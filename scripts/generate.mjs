import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { transform } from '@svgr/core';
import { optimize } from 'svgo';

const root = path.resolve(process.argv[2] || '.');
const metadata = JSON.parse(await readFile(path.join(root, 'metadata.json'), 'utf8'));
const generated = new Map();
const staticFiles = new Map();

// Paint in masks, clipping paths and gradient definitions is structural, not a brand color.
function monochromePlugin() {
  let protectedDepth = 0;
  const protectedElements = new Set(['defs', 'mask', 'clipPath']);
  return {
    name: 'monochrome',
    fn: () => ({ element: {
      enter(node) {
        if (protectedElements.has(node.name)) protectedDepth++;
        if (protectedDepth) return;
        for (const attr of ['fill', 'stroke']) {
          const value = node.attributes[attr];
          if (value && value !== 'none' && value !== 'transparent') node.attributes[attr] = 'currentColor';
        }
        if (node.name === 'svg' && !node.attributes.fill) node.attributes.fill = 'currentColor';
      },
      exit(node) { if (protectedElements.has(node.name)) protectedDepth--; },
    } }),
  };
}

for (const icon of metadata) {
  if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(icon.id)) throw Error('Invalid icon id');
  const name = icon.id.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
  const original = await readFile(path.join(root, 'icons', `${icon.id}.svg`), 'utf8');
  for (const variant of ['Mono', 'Color']) {
    const { data } = optimize(original, {
      plugins: [
        ...(variant === 'Mono' ? [monochromePlugin()] : []),
        { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
        { name: 'prefixIds', params: { prefix: icon.id + '-' + variant.toLowerCase() } },
      ],
    });
    if (variant === 'Mono') {
      for (const color of ['black', 'white']) staticFiles.set(`${color}/${icon.id}.svg`, data.replaceAll('currentColor', color) + '\n');
    }
    const ids = [...data.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
    const replaceAttrValues = {};
    for (const id of ids) {
      replaceAttrValues[id] = `{instanceId + ${JSON.stringify('-' + id)}}`;
      replaceAttrValues[`url(#${id})`] = `{'url(#' + instanceId + ${JSON.stringify('-' + id + ')')}}`;
      replaceAttrValues[`#${id}`] = `{'#' + instanceId + ${JSON.stringify('-' + id)}}`;
    }
    const result = await transform(data, {
      plugins: ['@svgr/plugin-jsx'], typescript: true, ref: true, dimensions: false,
      expandProps: 'end', jsxRuntime: 'automatic', replaceAttrValues,
      svgProps: { width: '{size}', height: '{size}', 'aria-hidden': 'true', focusable: 'false' },
      template: (v, { tpl }) => tpl`
        import { forwardRef, useId } from 'react';
        import type { Ref } from 'react';
        import type { IconProps } from '../types.js';
        const ${v.componentName} = ({ size = '1em', ...props }: IconProps, ref: Ref<SVGSVGElement>) => {
          const instanceId = useId();
          return ${v.jsx};
        };
        ${v.exports};
      `,
    }, { componentName: name + variant });
    generated.set(`${name}/${variant}.tsx`, `'use client';\n// Generated from SVG assets. Do not edit manually.\n${result}\n`);
  }
  generated.set(`${name}/index.ts`, `'use client';\n// Generated. Do not edit manually.\nimport Mono from './Mono.js';\nimport Color from './Color.js';\nconst ${name} = Object.assign(Mono, { Color });\nexport default ${name};\n`);
}
generated.set('types.ts', `// Generated. Do not edit manually.\nimport type { SVGProps } from 'react';\nexport type IconProps = Omit<SVGProps<SVGSVGElement>, 'size'> & { size?: number | string };\n`);
generated.set('index.ts', `// Generated. Do not edit manually.\nexport type { IconProps } from './types.js';\n` + metadata.map(icon => {
  const n = icon.id.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
  return `export { default as ${n} } from './${n}/index.js';`;
}).join('\n') + '\n');
generated.set('catalog.ts', `// Generated metadata only; this module does not import React or SVG components.
export const iconCatalog = ${JSON.stringify(metadata, null, 2)} as const;
export type IconName = typeof iconCatalog[number]['id'];
export const iconGroups = ${JSON.stringify([...new Set(metadata.map(i=>i.group))], null, 2)} as const;
export default iconCatalog;
`);
const loaderEntries = metadata.map(icon => {
  const n = icon.id.split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join('');
  return `  ${JSON.stringify(icon.id)}: { mono: () => import('./${n}/Mono.js'), color: () => import('./${n}/Color.js') }`;
}).join(',\n');
generated.set('loaders.ts', `// Generated literal dynamic imports enable per-icon, per-variant bundler chunks.
import type { IconName } from './catalog.js';
export type IconVariant = 'mono' | 'color';
export const iconLoaders = {\n${loaderEntries}\n} as const;
export function loadIcon(name: IconName, variant: IconVariant = 'color') {
  if (!Object.prototype.hasOwnProperty.call(iconLoaders, name) || !['mono', 'color'].includes(variant)) {
    return Promise.reject(new Error('Unknown icon or variant'));
  }
  return iconLoaders[name][variant]();
}
`);
generated.set('lazy.tsx', await readFile(new URL('./templates/lazy.tsx', import.meta.url), 'utf8'));
// Generate everything in memory before replacing these generated-only directories.
for (const [dir, files] of [['src', generated], ['static', staticFiles]]) {
  const output = path.join(root, dir);
  await rm(output, { recursive: true, force: true });
  for (const [name, code] of files) {
    const destination = path.join(output, name);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, code);
  }
}
console.log(`Generated ${metadata.length} icons: React Mono/Color and black/white SVGs.`);
