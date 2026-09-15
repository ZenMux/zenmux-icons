import { optimize } from 'svgo';

export function viewBox(svg) {
  const match = svg.match(/\bviewBox="([^"]+)"/);
  if (!match) throw new Error('SVG is missing viewBox');
  const box = match[1].trim().split(/[\s,]+/).map(Number);
  if (box.length !== 4 || box.some(n => !Number.isFinite(n)) || box[2] <= 0 || box[3] <= 0) throw new Error('Invalid viewBox');
  return box;
}
export function invertPaint(value) {
  if (/^(none|transparent|currentColor|url\()/i.test(value)) return value;
  let color = value;
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
  const prepared = optimize(svg, {plugins:['convertStyleToAttrs','convertColors']}).data;
  return optimize(prepared, { plugins: [{
    name: 'transformPaint', fn: () => ({element:{
      enter(node) {
        if (['mask','clipPath'].includes(node.name)) protectedDepth++;
        if (protectedDepth) return;
        if (node.name === 'svg') {
          node.attributes.fill ??= '#000';
          node.attributes.color ??= '#000';
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
export function combineSvg(symbol, text, prefix) {
  // Compose actual vector artwork; never substitute a font or invent a wordmark.
  const symbolSvg = normalizeSvg(symbol, prefix + '-symbol');
  const textSvg = normalizeSvg(text, prefix + '-text');
  const sb = viewBox(symbolSvg), tb = viewBox(textSvg);
  const symbolHeight = 48, textHeight = 24, gap = 12;
  const symbolWidth = sb[2] / sb[3] * symbolHeight;
  const textWidth = tb[2] / tb[3] * textHeight;
  function group(svg, box, x, y, height) {
    const opening = svg.match(/^<svg\b([^>]*)>/);
    if (!opening) throw new Error('Invalid normalized SVG');
    const attrs = opening[1].replace(/\s(?:xmlns(?::xlink)?|width|height|viewBox)="[^"]*"/g, '');
    const inner = svg.slice(opening[0].length).replace(/<\/svg>$/, '');
    return `<g${attrs} transform="translate(${x} ${y}) scale(${height / box[3]}) translate(${-box[0]} ${-box[1]})">${inner}</g>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${symbolWidth + gap + textWidth} 48" fill="none">${group(symbolSvg,sb,0,0,symbolHeight)}${group(textSvg,tb,symbolWidth+gap,12,textHeight)}</svg>`;
}
