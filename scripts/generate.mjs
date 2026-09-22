import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { transform } from '@svgr/core';
import { optimize } from 'svgo';
import { artworkBox, combineSvg, normalizeSvg, transformPaint, viewBox } from './lib/svg-variants.mjs';

const root = path.resolve(process.argv[2] || '.');
const metadata = JSON.parse(await readFile(path.join(root,'metadata.json'),'utf8'));
const generated = new Map(), staticFiles = new Map(), enriched = [];
const componentName = id => id.split('-').map(s => s[0].toUpperCase()+s.slice(1)).join('');
const names = {mono:'Mono',color:'Color','color-light':'ColorLight',dark:'Dark',light:'Light',text:'Text','text-dark':'TextDark','text-light':'TextLight',combine:'Combine','combine-dark':'CombineDark','combine-light':'CombineLight'};

for (const icon of metadata) {
  if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(icon.id)) throw Error('Invalid icon id');
  const name = componentName(icon.id);
  let sources, compoundBoxes;
  if (icon.sourceVariants) {
    sources = {};
    for (const variant of icon.sourceVariants) {
      const file = variant === 'color' ? `${icon.id}.svg` : `${variant}/${icon.id}.svg`;
      sources[variant] = await readFile(path.join(root, 'icons', file), 'utf8');
    }
    if (icon.hasSymbol) sources.mono = transformPaint(sources.dark, 'currentColor');
    if (icon.hasText) sources.text = transformPaint(sources['text-dark'], 'currentColor');
    if (icon.hasSymbol && icon.hasText && icon.hasCombine !== false) {
      const symbolBox = await artworkBox(sources.dark), textBox = await artworkBox(sources['text-dark']);
      compoundBoxes = [symbolBox, await artworkBox(sources.color), textBox];
      for (const theme of ['dark', 'light']) {
        sources['combine-' + theme] = combineSvg(sources[theme], sources['text-' + theme],
          icon.id + '-' + theme, await artworkBox(sources[theme]), await artworkBox(sources['text-' + theme]));
      }
      sources.combine = transformPaint(sources['combine-dark'], 'currentColor');
    }
  } else {
  const color = await readFile(path.join(root,'icons',icon.id+'.svg'),'utf8');
  const original = await readFile(path.join(root,icon.symbolTheme==='light'?'icons/light':'icons/default',icon.id+'.svg'),'utf8');
  const dark = icon.symbolTheme==='light' ? transformPaint(original,'invert') : original;
  const light = icon.symbolTheme==='light' ? original : transformPaint(original,'invert');
  sources = {mono:transformPaint(dark,'currentColor'),color,dark,light};
  if (icon.hasColorLight) sources['color-light'] = await readFile(path.join(root,'icons/color-light',icon.id+'.svg'),'utf8');
  if (icon.hasText) {
    // This catalog supplies wordmarks only; compose them with the Dark Default symbol.
    const text = await readFile(path.join(root,'icons/text',icon.id+'.svg'),'utf8');
    sources['text-light'] = text;
    sources['text-dark'] = transformPaint(text,'invert');
    sources.text = transformPaint(text,'currentColor');
    const symbolBox = await artworkBox(original), textBox = await artworkBox(text);
    compoundBoxes = [symbolBox, await artworkBox(color), textBox];
    sources['combine-dark'] = combineSvg(dark, sources['text-dark'], icon.id+'-dark', symbolBox, textBox);
    sources['combine-light'] = combineSvg(sources.light, sources['text-light'], icon.id+'-light', symbolBox, textBox);
    sources.combine = transformPaint(sources['combine-dark'],'currentColor');
  }
  }
  const hasSymbol = icon.hasSymbol !== false;
  const hasCombine = hasSymbol && icon.hasText && icon.hasCombine !== false;
  const baseMember = hasSymbol ? 'Mono' : 'Text';
  const ratios = {};
  for (const [variant, original] of Object.entries(sources)) {
    const data = normalizeSvg(original,icon.id+'-'+variant);
    const box = viewBox(data);const ratio = box[2]/box[3];ratios[variant] = ratio;
    if (!['color','mono','text','combine'].includes(variant))staticFiles.set(`${variant}/${icon.id}.svg`,data+'\n');
    if(variant==='light')staticFiles.set(`${icon.sourceVariants?'white':'black'}/${icon.id}.svg`,data+'\n');
    if(variant==='dark')staticFiles.set(`${icon.sourceVariants?'black':'white'}/${icon.id}.svg`,data+'\n');
    const replacement = {};
    for(const [,id] of data.matchAll(/\bid="([^"]+)"/g)) {
      replacement[id]=`{instanceId + ${JSON.stringify('-'+id)}}`;
      replacement[`url(#${id})`]=`{'url(#' + instanceId + ${JSON.stringify('-'+id+')')}}`;
      replacement[`#${id}`]=`{'#' + instanceId + ${JSON.stringify('-'+id)}}`;
    }
    const width=ratio===1?'{size}':`{typeof size === 'number' ? size * ${ratio} : 'calc(' + size + ' * ${ratio})'}`;
    const result=await transform(data,{
      plugins:['@svgr/plugin-jsx'],typescript:true,ref:true,dimensions:false,expandProps:'end',jsxRuntime:'automatic',replaceAttrValues:replacement,
      svgProps:{width,height:'{size}','aria-hidden':'true',focusable:'false'},
      template:(v,{tpl})=>tpl`
        import { forwardRef, useId } from 'react';
        import type { Ref } from 'react';
        import type { IconProps } from '../types.js';
        const ${v.componentName} = ({ size = '1em', ...props }: IconProps, ref: Ref<SVGSVGElement>) => {
          const instanceId = useId();
          return ${v.jsx};
        };
        ${v.exports};
      `,
    },{componentName:name+names[variant]});
    generated.set(`${name}/${names[variant]}.tsx`, `'use client';\n// Generated from real source assets. Do not edit manually.\n${result}\n`);
  }
  const members=Object.keys(sources).filter(v=>v!=='mono'&&v!=='combine').map(v=>names[v]);
  if (hasSymbol) generated.set(`${name}/Avatar.tsx`, `'use client';\n// Generated.\nimport Mono from './Mono.js';\nimport { createAvatar } from '../compound.js';\nexport default createAvatar(Mono);\n`);
  if (hasCombine) generated.set(`${name}/CompoundCombine.tsx`, `'use client';\n// Generated.\nimport Mono from './Mono.js';\nimport Color from './Color.js';\nimport Text from './Text.js';\nimport { createCombine } from '../compound.js';\nexport default createCombine(Mono, Color, Text, ${compoundBoxes.map(box=>JSON.stringify(box)).join(', ')});\n`);
  const imports = [...new Set([baseMember, ...members])];
  generated.set(`${name}/index.ts`, `'use client';\n// Generated. Do not edit manually.\n${hasSymbol ? "import Avatar from './Avatar.js';\n" : ''}${hasCombine ? "import Combine from './CompoundCombine.js';\n" : ''}${imports.map(n=>`import ${n} from './${n}.js';`).join('\n')}\nconst ${name} = Object.assign(${baseMember}, { ${members.join(', ')}, ${hasCombine ? 'Combine, ' : ''}${hasSymbol ? 'Avatar, ' : ''}title: ${JSON.stringify(icon.name)}, Default: ${hasSymbol?'Dark':'TextDark'} });\nexport default ${name};\n`);
  enriched.push({...icon,hasText:!!icon.hasText,hasCombine:!!hasCombine,variants:Object.keys(sources),aspectRatios:ratios});
}
generated.set('compound.tsx',await readFile(new URL('./templates/compound.tsx',import.meta.url),'utf8'));
generated.set('types.ts',`// Generated.\nimport type { SVGProps } from 'react';\nexport type IconProps = Omit<SVGProps<SVGSVGElement>, 'size'> & { size?: number | string };\n`);
generated.set('index.ts',`export type { IconProps } from './types.js';\nexport type { CombineProps, AvatarProps } from './compound.js';\n`+metadata.map(i=>`export {default as ${componentName(i.id)}} from './${componentName(i.id)}/index.js';`).join('\n')+'\n');
const groups=[...new Set(metadata.flatMap(i=>i.groups||[i.group]))];
generated.set('catalog.ts',`// Generated metadata only; no artwork imports.\nexport const iconCatalog = ${JSON.stringify(enriched)} as const;\nexport type IconName = typeof iconCatalog[number]['id'];\nexport const iconGroups = ${JSON.stringify(groups)} as const;\nexport default iconCatalog;\n`);
const loaderEntries=enriched.map(i=>`  ${JSON.stringify(i.id)}: { ${i.variants.map(v=>`${JSON.stringify(v)}: () => import('./${componentName(i.id)}/${names[v]}.js')`).join(', ')} }`).join(',\n');
generated.set('loaders.ts',`// Generated literal dynamic imports: one chunk per icon/variant.\nimport type { ComponentType } from 'react';\nimport type { IconProps } from './types.js';\nimport type { IconName } from './catalog.js';\nexport type IconVariant = ${Object.keys(names).map(v=>JSON.stringify(v)).join(' | ')};\ntype IconLoader = () => Promise<{default: ComponentType<IconProps>}>;\nexport const iconLoaders: Record<IconName, Partial<Record<IconVariant, IconLoader>>> = {\n${loaderEntries}\n};\nexport function loadIcon(name: IconName, variant?: IconVariant) {\n  const variants = Object.prototype.hasOwnProperty.call(iconLoaders,name) ? iconLoaders[name] : undefined;\n  variant ??= variants?.color ? 'color' : 'text';\n  const loader = variants && Object.prototype.hasOwnProperty.call(variants,variant) ? variants[variant] : undefined;\n  return typeof loader === 'function' ? loader() : Promise.reject(new Error('Unknown or unavailable icon variant'));\n}\n`);
const componentLoaderCode = `
import type { CombineProps, AvatarProps } from './compound.js';
export type BrandIcon = ComponentType<IconProps> & {
  Color?: ComponentType<IconProps>;
  ColorLight?: ComponentType<IconProps>;
  Text?: ComponentType<IconProps>;
  Combine?: ComponentType<CombineProps>;
  Avatar?: ComponentType<AvatarProps>;
  title: string;
};
const componentLoaders: Record<IconName, () => Promise<{default: BrandIcon}>> = {
${metadata.map(i=>`  ${JSON.stringify(i.id)}: () => import('./${componentName(i.id)}/index.js'),`).join('\n')}
};
export function loadIconComponent(name: IconName) {
  return Object.prototype.hasOwnProperty.call(componentLoaders, name)
    ? componentLoaders[name]() : Promise.reject(new Error('Unknown icon'));
}
`;
generated.set('loaders.ts', generated.get('loaders.ts') + componentLoaderCode);
generated.set('lazy.tsx',await readFile(new URL('./templates/lazy.tsx',import.meta.url),'utf8'));
for(const [dir,files] of [['src',generated],['static',staticFiles]]) {
  await rm(path.join(root,dir),{recursive:true,force:true});
  for(const [name,code] of files){const target=path.join(root,dir,name);await mkdir(path.dirname(target),{recursive:true});await writeFile(target,code);}
}
console.log(`Generated ${enriched.length} brands, ${enriched.filter(i=>i.hasText).length} complete source logos.`);
