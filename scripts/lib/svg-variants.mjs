import { optimize } from 'svgo';
import sharp from 'sharp';

export function viewBox(svg) {
  const match = svg.match(/\bviewBox="([^"]+)"/);
  if (!match) throw new Error('SVG is missing viewBox');
  const box = match[1].trim().split(/[\s,]+/).map(Number);
  if (box.length !== 4 || box.some(n => !Number.isFinite(n)) || box[2] <= 0 || box[3] <= 0) throw new Error('Invalid viewBox');
  return box;
}
export function invertPaint(value) {
  if (/^(none|transparent|currentColor|url\()/i.test(value)) return value;
  let color = ({black:'#000',white:'#fff'})[value.toLowerCase()] ?? value;
  const p3 = color.match(/^color\(display-p3\s+([^/]+?)(\s*\/\s*[^)]+)?\)$/i);
  if (p3) {
    const channels=p3[1].trim().split(/\s+/).map(v=>v.endsWith('%')?parseFloat(v)/100:Number(v));
    if(channels.length!==3||channels.some(v=>!Number.isFinite(v)))throw Error('Invalid display-p3 paint');
    return `color(display-p3 ${channels.map(v=>Number((1-v).toFixed(6))).join(' ')}${p3[2]||''})`;
  }
  if (/^#[\da-f]{3,4}$/i.test(color)) color = '#' + color.slice(1).split('').map(c => c + c).join('');
  if (/^#[\da-f]{6}([\da-f]{2})?$/i.test(color)) {
    return '#' + [1, 3, 5].map(i => (255 - parseInt(color.slice(i, i + 2), 16)).toString(16).padStart(2, '0')).join('') + color.slice(7);
  }
  throw new Error(`Cannot invert paint ${value}`);
}
export function normalizeSvg(svg, prefix) {
  return optimize(svg, { plugins: [
    {name:'dedupeInlineStyles', fn:()=>({element:{enter(node){
      if (!node.attributes.style) return;
      const declarations = new Map();
      for (const part of node.attributes.style.split(';')) {
        const colon = part.indexOf(':');
        if (colon < 0) continue;
        declarations.set(part.slice(0,colon).trim(),part.slice(colon+1).trim());
      }
      node.attributes.style = [...declarations].map(([key,value])=>key+':'+value).join(';');
    }}})},
    {name:'prefixIds',params:{prefix}},
  ] }).data;
}
export function transformPaint(svg, mode) {
  let protectedDepth = 0;
  const prepared = optimize(svg, {plugins:['convertColors']}).data;
  return optimize(prepared, { plugins: [{
    name: 'transformPaint', fn: () => ({element:{
      enter(node) {
        if (['mask','clipPath'].includes(node.name)) protectedDepth++;
        if (protectedDepth) return;
        if (node.name === 'svg') {
          node.attributes.fill ??= '#000';
          node.attributes.color ??= '#000';
        }
        if(node.attributes.style) {
          node.attributes.style=node.attributes.style.split(';').map(declaration=>{
            const colon=declaration.indexOf(':');if(colon<0)return declaration;
            const key=declaration.slice(0,colon).trim(),value=declaration.slice(colon+1).trim();
            if(!['fill','stroke','stop-color','color'].includes(key))return declaration;
            const paint=mode==='invert'?invertPaint(value):(['none','transparent'].includes(value)?value:mode);
            return key+':'+paint;
          }).join(';');
        }
        for (const key of ['fill','stroke','stop-color','color']) {
          const value = node.attributes[key];
          if (!value) continue;
          if (mode === 'invert') node.attributes[key] = invertPaint(value);
          else if (!['none','transparent'].includes(value)) node.attributes[key] = mode;
        }
      },
      exit(node) { if (['mask','clipPath'].includes(node.name)) protectedDepth--; },
    }}),
  }] }).data;
}

// Measure alpha rather than the padded source canvas. Only composition uses this
// box; standalone source variants retain their original viewBox and SVG paths.
export async function artworkBox(svg) {
  const box = viewBox(svg);
  const scale = Math.min(2048 / box[3], 8192 / box[2]);
  const width = Math.max(1, Math.round(box[2] * scale));
  const height = Math.max(1, Math.round(box[3] * scale));
  const { data, info } = await sharp(Buffer.from(svg))
    .resize(width, height, { fit: 'fill' }).ensureAlpha().raw()
    .toBuffer({ resolveWithObject: true });
  let left = width, top = height, right = -1, bottom = -1;
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    if (!data[(y * width + x) * info.channels + info.channels - 1]) continue;
    left = Math.min(left, x); right = Math.max(right, x);
    top = Math.min(top, y); bottom = Math.max(bottom, y);
  }
  if (right < left) throw new Error('Cannot compose empty SVG artwork');
  return [
    box[0] + left * box[2] / width,
    box[1] + top * box[3] / height,
    (right - left + 1) * box[2] / width,
    (bottom - top + 1) * box[3] / height,
  ];
}

export function combineSvg(symbol, text, prefix, symbolBox = viewBox(symbol), textBox = viewBox(text)) {
  // Compose actual vector artwork; never substitute a font or invent a wordmark.
  const symbolSvg = normalizeSvg(symbol, prefix + '-symbol');
  const textSvg = normalizeSvg(text, prefix + '-text');
  const sb = symbolBox, tb = textBox;
  const symbolHeight = 48, textHeight = symbolHeight * 0.7, gap = 12;
  const symbolWidth = sb[2] / sb[3] * symbolHeight;
  const textWidth = tb[2] / tb[3] * textHeight;
  function group(svg, box, x, y, height) {
    svg = svg.slice(svg.indexOf('<svg'));
    const opening = svg.match(/^<svg\b([^>]*)>/);
    if (!opening) throw new Error('Invalid normalized SVG');
    const attrs = opening[1].replace(/\s(?:xmlns(?::xlink)?|width|height|viewBox)="[^"]*"/g, '');
    const inner = svg.slice(opening[0].length).replace(/<\/svg>$/, '');
    return `<g${attrs} transform="translate(${x} ${y}) scale(${height / box[3]}) translate(${-box[0]} ${-box[1]})">${inner}</g>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${symbolWidth + gap + textWidth} ${symbolHeight}" fill="none">${group(symbolSvg,sb,0,0,symbolHeight)}${group(textSvg,tb,symbolWidth+gap,(symbolHeight-textHeight)/2,textHeight)}</svg>`;
}
