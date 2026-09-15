import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import catalog, { iconGroups } from '../dist/catalog.js';
import { loadIcon } from '../dist/loaders.js';
import { LazyIcon } from '../dist/lazy.js';

test('catalog bundles without React, loaders or SVG components', async () => {
  const result = await build({ entryPoints:['dist/catalog.js'], bundle:true, write:false, metafile:true, format:'esm' });
  assert.deepEqual(Object.keys(result.metafile.inputs), ['dist/catalog.js']);
  assert.ok(catalog.length>0);
  assert.deepEqual([...iconGroups], [...new Set(catalog.flatMap(i=>i.groups||[i.group]))]);
});

test('lazy entry keeps all artwork outside its static dependency graph', async () => {
  const result = await build({ entryPoints:['dist/lazy.js'], outdir:'.test-output', bundle:true, splitting:true, format:'esm', write:false, metafile:true });
  const outputs=result.metafile.outputs;
  const entry=Object.keys(outputs).find(p=>outputs[p].entryPoint==='dist/lazy.js');
  const seen=new Set();
  function inspect(name){
    if(seen.has(name))return;seen.add(name);
    const output=outputs[name];
    assert.ok(output,`Missing output ${name}`);
    assert.ok(!Object.keys(output.inputs).some(i=>/dist\/[^/]+\/(Mono|Color|Dark|Light|Text.*|Combine.*)\.js$/.test(i)), `Eager artwork in ${name}`);
    for(const imp of output.imports)if(imp.kind!=='dynamic-import'&&!imp.external)inspect(imp.path);
  }
  inspect(entry);
  assert.ok(Object.values(outputs).filter(o=>/\/(Mono|Color|Dark|Light|Text.*|Combine.*)\.js$/.test(o.entryPoint||'')).length>=catalog.length*2);
});

test('loadIcon resolves one variant, caches modules and rejects unknown input', async()=>{
 const [a,b]=await Promise.all([loadIcon(catalog[0].id,'color'),loadIcon(catalog[0].id,'color')]);
 assert.equal(a.default,b.default);
 assert.ok(renderToStaticMarkup(createElement(a.default,{size:24})).includes('<svg'));
 await assert.rejects(loadIcon('nonexistent'));
 await assert.rejects(loadIcon(catalog[0].id,'constructor'));
 await assert.rejects(loadIcon('__proto__','color'));
 await assert.rejects(loadIcon(catalog[0].id,'unknown'));
});

test('SSR lazy icon reserves dimensions without rendering any SVG',()=>{
 const html=renderToStaticMarkup(createElement(LazyIcon,{name:catalog[0].id,size:32}));
 assert.ok(html.includes('data-state="pending"'));
 assert.ok(html.includes('width:32px'));
 assert.ok(!html.includes('<svg'));
});
