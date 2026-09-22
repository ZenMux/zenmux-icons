import {readFile,readdir} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(process.argv[2]||'.');
const metadata=JSON.parse(await readFile(path.join(root,'metadata.json'),'utf8'));
if(!Array.isArray(metadata)||!metadata.length)throw Error('Empty catalog');
const ids=new Set(),expected=new Set();
for(const icon of metadata){
  if(Object.keys(icon).some(k=>!['id','name','group','groups','aliases','hasText','hasSymbol','hasCombine','sourceVariants','hasColorLight','symbolTheme','website'].includes(k)))throw Error('Unexpected metadata field');
  if(icon.aliases && (!Array.isArray(icon.aliases)||icon.aliases.some(a=>typeof a!=='string'||!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(a))))throw Error('Invalid aliases');
  if(icon.hasCombine!==undefined && (typeof icon.hasCombine!=='boolean' || (icon.hasCombine && (!icon.hasText || icon.hasSymbol===false))))throw Error('Invalid hasCombine');
  if(!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(icon.id)||ids.has(icon.id)||typeof icon.name!=='string'||!icon.name||!icon.group)throw Error('Invalid brand metadata');
  if(icon.groups&&(!Array.isArray(icon.groups)||icon.groups.some(g=>typeof g!=='string'||!g)||!icon.groups.includes(icon.group)))throw Error('Invalid groups');
  if(icon.website!==undefined){
    let url;try{url=new URL(icon.website)}catch{throw Error('Invalid website: '+icon.id)}
    if(typeof icon.website!=='string'||!['http:','https:'].includes(url.protocol)||!url.hostname||url.username||url.password||/[\s\\]/.test(icon.website))throw Error('Invalid website: '+icon.id);
  }
  ids.add(icon.id);
  if (icon.sourceVariants) {
    const variants = icon.sourceVariants;
    if (!Array.isArray(variants) || !variants.length || new Set(variants).size!==variants.length ||
        variants.some(v=>!['color','light','dark','text-light','text-dark'].includes(v)))throw Error('Invalid explicit variants');
    if (typeof icon.hasSymbol!=='boolean' || typeof icon.hasText!=='boolean' ||
        icon.hasSymbol!==variants.includes('color') || icon.hasText!==variants.includes('text-light'))throw Error('Invalid source flags');
    if (icon.hasSymbol && !['color','light','dark'].every(v=>variants.includes(v)))throw Error('Incomplete symbol');
    if (icon.hasText && !['text-light','text-dark'].every(v=>variants.includes(v)))throw Error('Incomplete text');
    for(const v of variants)expected.add(v==='color'?`${icon.id}.svg`:`${v}/${icon.id}.svg`);
    continue;
  }
  expected.add(`${icon.id}.svg`);
  if(icon.symbolTheme && !['light','dark'].includes(icon.symbolTheme))throw Error('Invalid source symbol theme');
  if(typeof icon.hasText==='boolean')expected.add(`${icon.symbolTheme==='light'?'light':'default'}/${icon.id}.svg`);
  if(icon.hasText)expected.add(`text/${icon.id}.svg`);
  if(icon.hasColorLight!==undefined && typeof icon.hasColorLight!=='boolean')throw Error('Invalid hasColorLight flag');
  if(icon.hasColorLight)expected.add(`color-light/${icon.id}.svg`);
}
const aliasIds=new Set();
for(const icon of metadata)for(const alias of icon.aliases||[]){
 if(ids.has(alias)||aliasIds.has(alias))throw Error('Conflicting alias: '+alias);
 aliasIds.add(alias);
}
async function files(dir,prefix=''){
 const all=[];
 for(const entry of await readdir(dir,{withFileTypes:true})){
  const rel=prefix+entry.name;
  if(entry.isDirectory())all.push(...await files(path.join(dir,entry.name),rel+'/'));else all.push(rel);
 }
 return all;
}
const actual=await files(path.join(root,'icons'));
if(actual.length!==expected.size||actual.some(f=>!expected.has(f)))throw Error('Catalog and source assets differ');
for(const file of actual){
 const s=await readFile(path.join(root,'icons',file),'utf8');
 if(!s.includes('<svg')||!s.includes('viewBox='))throw Error('Invalid SVG: '+file);
 if(/<(?:script|foreignObject|image|style)\b|\bon\w+\s*=|<!DOCTYPE|<!ENTITY/i.test(s))throw Error('Unsafe SVG: '+file);
 if(/(?:href\s*=\s*["'](?!#)|url\(\s*["']?(?!#))/i.test(s))throw Error('External SVG resource: '+file);
}
console.log(`Checked ${metadata.length} brands and ${actual.length} real SVG sources.`);
