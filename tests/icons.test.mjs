import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import sharp from 'sharp';
import * as Icons from '../dist/index.js';
const metadata=JSON.parse(await readFile(new URL('../metadata.json',import.meta.url),'utf8'));
test('every icon renders twice with unique, resolvable fragment IDs',()=>{
 const components=Object.values(Icons);
 assert.equal(components.length,metadata.length);
 const html=renderToStaticMarkup(createElement('div',null,...components.flatMap((C,i)=>[createElement(C,{key:i+'a',size:32}),createElement(C,{key:i+'b'}),createElement(C.Color,{key:i+'c'}),createElement(C.Color,{key:i+'d'})])));
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(new Set(ids).size,ids.length);
 for(const [,id] of html.matchAll(/url\(#([^)]+)\)/g)) assert.ok(ids.includes(id),`Missing fragment ${id}`);
 assert.ok(html.includes('width="32"'));
});
test('SVGs have transparent corners and React preserves original artwork',async()=>{
 for(const icon of metadata){
  const svg=await readFile(new URL(`../icons/${icon.id}.svg`,import.meta.url));
  const C=Icons[icon.id.split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join('')];
  const react=Buffer.from(renderToStaticMarkup(createElement(C.Color,{size:86})));
  const render=buffer=>sharp(buffer).resize(172,172).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const a=await render(svg), b=await render(react);
  for(const pixel of [0,171,172*171,172*172-1]) assert.equal(a.data[pixel*4+3],0,`${icon.id}: opaque corner`);
  assert.ok(a.data.some((v,i)=>i%4===3&&v>0),`${icon.id}: empty artwork`);
  let difference=0;
  for(let i=0;i<a.data.length;i++) difference+=Math.abs(a.data[i]-b.data[i]);
  assert.ok(difference/a.data.length<2,`${icon.id}: rendering changed`);
 }
});

test('size and monochrome black/white work for every icon',async()=>{
 for(const icon of metadata){
  const C=Icons[icon.id.split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join('')];
  for(const color of ['black','white']){
   const html=renderToStaticMarkup(createElement(C,{size:48,color}));
   assert.ok(html.includes('width="48"')&&html.includes('height="48"'));
   assert.ok(!html.includes(' size='));
   const samples=[Buffer.from(html),await readFile(new URL(`../static/${color}/${icon.id}.svg`,import.meta.url))];
   for(const sample of samples){
    const {data}=await sharp(sample).resize(96,96).ensureAlpha().raw().toBuffer({resolveWithObject:true});
    let visible=0;
    for(let i=0;i<data.length;i+=4)if(data[i+3]>200){
     visible++;
     for(let c=0;c<3;c++)assert.equal(data[i+c],color==='black'?0:255,`${icon.id}: ${color} paint`);
    }
    assert.ok(visible>0);
   }
  }
 }
});
