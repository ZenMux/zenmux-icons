import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import sharp from 'sharp';
import {loadIcon} from '../dist/loaders.js';
import catalog from '../dist/catalog.js';
import {artworkBox,combineSvg,transformPaint,invertPaint} from '../scripts/lib/svg-variants.mjs';
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
  const sb=await artworkBox(symbol),tb=await artworkBox(text);
  const expectedWidth=48*sb[2]/sb[3]+12+(48*0.7)*tb[2]/tb[3];
  for(const variant of ['combine-dark','combine-light']){
   const {default:C}=await loadIcon(icon.id,variant);
   const html=renderToStaticMarkup(createElement(C,{size:48}));
   const width=Number(html.match(/\bwidth="([^"]+)"/)[1]);
   assert.ok(Math.abs(width-expectedWidth)<.001,icon.id+' composition width');
   const count=s=>(s.match(/<(?:path|rect|circle|ellipse|line|polygon|polyline)\b/g)||[]).length;
   assert.equal(count(html),count(symbol)+count(text),icon.id+' must include each artwork once');
   assert.ok(Math.abs(icon.aspectRatios[variant]-expectedWidth/48)<1e-12,icon.id+' aspect ratio');
  }
  // Check actual painted heights, not the padded source viewBoxes.
  for(const variant of ['combine-dark','combine-light']){
   const {default:C}=await loadIcon(icon.id,variant);
   const combined=await sharp(Buffer.from(renderToStaticMarkup(createElement(C,{size:240})))).ensureAlpha().raw().toBuffer({resolveWithObject:true});
   const split=Math.floor(240*sb[2]/sb[3]+30);
   function bounds(left,right){
    let top=combined.info.height,bottom=-1;
    for(let y=0;y<combined.info.height;y++)for(let x=left;x<right;x++)if(combined.data[(y*combined.info.width+x)*4+3]>8){top=Math.min(top,y);bottom=Math.max(bottom,y);}
    assert.ok(bottom>=top,icon.id+' visible region');return {top,bottom,height:bottom-top+1};
   }
   const symbolBounds=bounds(0,split),textBounds=bounds(split,combined.info.width);
   assert.ok(Math.abs(textBounds.height/symbolBounds.height-0.7)<0.015,icon.id+' painted ratio');
   assert.ok(Math.abs((textBounds.top+textBounds.bottom)-(symbolBounds.top+symbolBounds.bottom))<4,icon.id+' painted centering');
  }
 }
});

test('Text variants contain only the source wordmark and are absent without a source',async()=>{
 for(const icon of catalog){
  const module=await import(`../dist/${nameOf(icon.id)}/index.js`);
  if(!icon.hasText){
   for(const member of ['Text','TextLight','TextDark'])assert.equal(module.default[member],undefined);
   for(const variant of ['text','text-light','text-dark'])await assert.rejects(loadIcon(icon.id,variant));
   continue;
  }
  const source=await readFile(new URL(`../icons/text/${icon.id}.svg`,import.meta.url),'utf8');
  for(const variant of ['text','text-light','text-dark']){
   const {default:C}=await loadIcon(icon.id,variant);
   const expected=variant==='text-light'?source:transformPaint(source,variant==='text-dark'?'invert':'currentColor');
   const original=await render(Buffer.from(expected));
   const html=renderToStaticMarkup(createElement(C,{size:96}));
   const count=s=>(s.match(/<(?:path|rect|circle|ellipse|line|polygon|polyline)\b/g)||[]).length;
   assert.equal(count(html),count(source),icon.id+'/'+variant+' must not add a symbol');
   const outputs=[html];
   if(variant!=='text')outputs.push(await readFile(new URL(`../static/${variant}/${icon.id}.svg`,import.meta.url),'utf8'));
   for(const output of outputs){
    const actual=await render(Buffer.from(output));
    assert.equal(actual.data.length,original.data.length,icon.id+'/'+variant);
    let delta=0;for(let i=0;i<actual.data.length;i++)delta+=Math.abs(actual.data[i]-original.data[i]);
    assert.ok(delta/actual.data.length<3,icon.id+'/'+variant+' source pixels changed');
   }
  }
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

test('optional ColorLight preserves source pixels and is absent without a source',async()=>{
 for(const icon of catalog){
  const {default:Icon}=await import(`../dist/${nameOf(icon.id)}/index.js`);
  if(!icon.hasColorLight){
   assert.equal(Icon.ColorLight,undefined);
   await assert.rejects(loadIcon(icon.id,'color-light'));
   continue;
  }
  assert.ok(Icon.ColorLight);
  const source=await readFile(new URL(`../icons/color-light/${icon.id}.svg`,import.meta.url));
  const original=await render(source);
  const {default:C}=await loadIcon(icon.id,'color-light');
  const outputs=[Buffer.from(renderToStaticMarkup(createElement(C,{size:96}))),
   await readFile(new URL(`../static/color-light/${icon.id}.svg`,import.meta.url))];
  for(const output of outputs){
   const actual=await render(output);assert.equal(actual.data.length,original.data.length);
   let delta=0;for(let i=0;i<actual.data.length;i++)delta+=Math.abs(actual.data[i]-original.data[i]);
   assert.ok(delta/actual.data.length<3,icon.id+' ColorLight changed source');
  }
 }
});


test('painted bounds exclude padding, retain offset origins, and reject empty artwork',async()=>{
 const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 20 100 100"><rect x="30" y="50" width="40" height="20" fill="black"/></svg>';
 const bounds=await artworkBox(svg);
 for(const [i,expected] of [30,50,40,20].entries())assert.ok(Math.abs(bounds[i]-expected)<0.1);
 await assert.rejects(artworkBox('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"/>'),/empty/);
});
