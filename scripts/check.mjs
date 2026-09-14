import {readFile,readdir} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(process.argv[2]||'.');
const metadata=JSON.parse(await readFile(path.join(root,'metadata.json'),'utf8'));
if(!Array.isArray(metadata)||!metadata.length) throw Error('Empty icon catalog');
const ids=metadata.map(i=>i.id);
if(new Set(ids).size!==ids.length) throw Error('Duplicate icon ids');
for(const item of metadata) {
  if(Object.keys(item).some(k=>!['id','name','group'].includes(k))) throw Error('Unexpected metadata field');
  if(!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(item.id)||typeof item.name!=='string'||typeof item.group!=='string'||!item.group.trim()) throw Error('Invalid metadata');
}
const files=(await readdir(path.join(root,'icons'))).sort();
if(JSON.stringify(files)!==JSON.stringify(ids.map(i=>i+'.svg').sort())) throw Error('Catalog and SVG files differ');
for(const file of files){
 const s=await readFile(path.join(root,'icons',file),'utf8');
 if(!s.includes('<svg')||!s.includes('viewBox=')) throw Error(`Invalid SVG: ${file}`);
 if(/<(?:script|foreignObject|image|style)\b|\bon\w+\s*=|<!DOCTYPE|<!ENTITY/i.test(s)) throw Error(`Unsafe SVG: ${file}`);
 if(/(?:href\s*=\s*["'](?!#)|url\(\s*["']?(?!#))/i.test(s)) throw Error(`External SVG resource: ${file}`);
}
console.log(`Checked ${ids.length} SVG assets.`);
