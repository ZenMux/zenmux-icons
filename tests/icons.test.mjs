import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import sharp from 'sharp';
import {loadIcon} from '../dist/loaders.js';
import catalog from '../dist/catalog.js';
const nameOf=id=>id.split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join('');
const render=buffer=>sharp(buffer).resize({height:96}).ensureAlpha().raw().toBuffer({resolveWithObject:true});

test('every source-backed variant renders with unique and resolvable fragment IDs',async()=>{
 for(const icon of catalog){
  for(const variant of icon.variants){
   const {default:C}=await loadIcon(icon.id,variant);
   const html=renderToStaticMarkup(createElement('div',null,createElement(C,{size:48}),createElement(C,{size:48})));
   const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
   assert.equal(new Set(ids).size,ids.length,icon.id+'/'+variant);
   for(const [,id] of html.matchAll(/url\(#([^)]+)\)/g))assert.ok(ids.includes(id),'Missing reference '+id);
  }
 }
});
test('React Color and Dark variants preserve real source artwork and alpha',async()=>{
 for(const icon of catalog){
  for(const [variant,folder] of [['color','icons'],...(typeof icon.hasText==='boolean'&&icon.groups?[['dark','icons/default']]:[])]){
   const original=await readFile(new URL(`../${folder}/${icon.id}.svg`,import.meta.url));
   const {default:C}=await loadIcon(icon.id,variant);
   const jsx=Buffer.from(renderToStaticMarkup(createElement(C,{size:96})));
   const a=await render(original),b=await render(jsx);
   assert.equal(a.data.length,b.data.length,icon.id);
   let difference=0;for(let i=0;i<a.data.length;i++)difference+=Math.abs(a.data[i]-b.data[i]);
   assert.ok(difference/a.data.length<3,`${icon.id}/${variant}: changed render ${difference/a.data.length}`);
  }
 }
});
test('Light is Dark RGB inversion with unchanged geometry and opacity',async()=>{
 for(const icon of catalog){
  const a=await render(await readFile(new URL(`../static/dark/${icon.id}.svg`,import.meta.url)));
  const b=await render(await readFile(new URL(`../static/light/${icon.id}.svg`,import.meta.url)));
  assert.equal(a.data.length,b.data.length);
  let delta=0,count=0;
  for(let i=0;i<a.data.length;i+=4){
   assert.ok(Math.abs(a.data[i+3]-b.data[i+3])<3,icon.id+' alpha');
   if(a.data[i+3]>200){for(let c=0;c<3;c++)delta+=Math.abs(a.data[i+c]+b.data[i+c]-255);count+=3;}
  }
  assert.ok(count>0,icon.id+' empty artwork');assert.ok(delta/count<3,icon.id+' inversion');
 }
});
test('no text means no text/combined exports; real wordmarks keep their aspect ratio',async()=>{
 for(const icon of catalog){
  const module=await import(`../dist/${nameOf(icon.id)}/index.js`);
  if(!icon.hasText){assert.equal(module.default.Text,undefined);assert.equal(module.default.Combine,undefined);await assert.rejects(loadIcon(icon.id,'combine-dark'));continue;}
  for(const variant of ['text-dark','text-light','combine-dark','combine-light']){
   const {default:C}=await loadIcon(icon.id,variant);
   const html=renderToStaticMarkup(createElement(C,{size:48}));
   const width=Number(html.match(/\bwidth="([^"]+)"/)[1]);
   assert.ok(Math.abs(width-48*icon.aspectRatios[variant])<.001,icon.id+' aspect ratio');
   assert.ok(icon.aspectRatios[variant]>0);
  }
 }
});
