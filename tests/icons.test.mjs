import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import sharp from 'sharp';
import {loadIcon} from '../dist/loaders.js';
import catalog from '../dist/catalog.js';
import {combineSvg,transformPaint,invertPaint} from '../scripts/lib/svg-variants.mjs';
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
test('React Color and Dark preserve original source pixels and alpha',async()=>{
 for(const icon of catalog){
  for(const [variant,folder] of [['color','icons'],[icon.symbolTheme==='light'?'light':'dark',icon.symbolTheme==='light'?'icons/light':'icons/default']]){
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
   if(a.data[i+3]>16){for(let c=0;c<3;c++)delta+=Math.abs(a.data[i+c]+b.data[i+c]-255);count+=3;}
  }
  assert.ok(count>0,icon.id+' empty artwork');assert.ok(delta/count<3,icon.id+' inversion');
 }
});
test('wordmark composition contains one symbol and one wordmark at the documented ratio',async()=>{
 for(const icon of catalog){
  const module=await import(`../dist/${nameOf(icon.id)}/index.js`);
  if(!icon.hasText){assert.equal(module.default.Combine,undefined);await assert.rejects(loadIcon(icon.id,'combine-dark'));continue;}
  const symbol=await readFile(new URL(`../icons/${icon.symbolTheme==='light'?'light':'default'}/${icon.id}.svg`,import.meta.url),'utf8');
  const text=await readFile(new URL(`../icons/text/${icon.id}.svg`,import.meta.url),'utf8');
  const box=s=>s.match(/viewBox="([^"]+)"/)[1].split(/[\s,]+/).map(Number);
  const sb=box(symbol),tb=box(text);
  const expectedWidth=48*sb[2]/sb[3]+12+24*tb[2]/tb[3];
  for(const variant of ['combine-dark','combine-light']){
   const {default:C}=await loadIcon(icon.id,variant);
   const html=renderToStaticMarkup(createElement(C,{size:48}));
   const width=Number(html.match(/\bwidth="([^"]+)"/)[1]);
   assert.ok(Math.abs(width-expectedWidth)<.001,icon.id+' composition width');
   const count=s=>(s.match(/<(?:path|rect|circle|ellipse|line|polygon|polyline)\b/g)||[]).length;
   assert.equal(count(html),count(symbol)+count(text),icon.id+' must include each artwork once');
   assert.equal(icon.aspectRatios[variant],expectedWidth/48);
  }
  // Rendered wordmark region must match the original alpha geometry, now in white.
  const {default:C}=await loadIcon(icon.id,'combine-dark');
  const combined=await sharp(Buffer.from(renderToStaticMarkup(createElement(C,{size:96})))).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const original=await sharp(Buffer.from(text)).resize({height:48}).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const x=Math.round(96*sb[2]/sb[3]+24),y=24;let delta=0;
  for(let row=0;row<original.info.height;row++)for(let col=0;col<original.info.width;col++){
   const i=(row*original.info.width+col)*4, j=((row+y)*combined.info.width+col+x)*4;
   delta+=Math.abs(original.data[i+3]-combined.data[j+3]);
   if(combined.data[j+3]>200)for(let c=0;c<3;c++)assert.ok(combined.data[j+c]>250,icon.id+' dark wordmark must be white');
  }
  assert.ok(delta/(original.info.width*original.info.height)<3,icon.id+' wordmark alpha changed');
 }
});

test('composition handles XML declarations; inversion preserves P3 fallback and alpha',()=>{
 const svg='<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="#1b1b1b" style="fill:#1b1b1b;fill:color(display-p3 0.1059 0.1059 0.1059);fill-opacity:0.5"/></svg>';
 const inverse=transformPaint(svg,'invert');
 assert.match(inverse,/fill="#e4e4e4"/i);
 assert.match(inverse,/color\(display-p3 0.8941 0.8941 0.8941\)/);
 assert.match(inverse,/fill-opacity:0.5/);
 assert.equal(invertPaint('color(display-p3 0 0.5 1 / 0.3)'),'color(display-p3 1 0.5 0 / 0.3)');
 assert.match(combineSvg(svg,svg,'xml'),/^<svg/);
});

test('corrected white symbols and their wordmarks contrast with the intended surface',async()=>{
 for(const id of ['zai','open-webui','google']){
  for(const variant of ['dark','light',...(catalog.find(i=>i.id===id).hasText?['combine-dark','combine-light']:[])]){
   const {default:C}=await loadIcon(id,variant);
   const bitmap=await render(Buffer.from(renderToStaticMarkup(createElement(C,{size:96}))));
   const expected=variant.endsWith('dark')?255:0;let opaque=0;
   for(let i=0;i<bitmap.data.length;i+=4)if(bitmap.data[i+3]>200){
    opaque++;
    for(let c=0;c<3;c++)assert.ok(Math.abs(bitmap.data[i+c]-expected)<4,id+'/'+variant+' surface contrast');
   }
   assert.ok(opaque>0,id+'/'+variant+' must have visible artwork');
  }
 }
});

test('catalog exposes the optional website metadata without altering it',async()=>{
 const metadata=JSON.parse(await readFile(new URL('../metadata.json',import.meta.url),'utf8'));
 for(const entry of metadata){
  assert.equal(catalog.find(icon=>icon.id===entry.id).website,entry.website,entry.id);
  if(entry.website){const url=new URL(entry.website);assert.ok(['http:','https:'].includes(url.protocol));assert.ok(!url.username&&!url.password);}
 }
});
