import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadIconComponent } from '../dist/loaders.js';
import catalog from '../dist/catalog.js';

const render = (C, props = {}) => renderToStaticMarkup(createElement(C, props));
const svgCount = html => (html.match(/<svg\b/g) || []).length;
test('compound API exposes LobeHub-style Mono, Color, Text, Combine and Avatar', async () => {
  for (const icon of catalog) {
    const { default: Icon } = await loadIconComponent(icon.id);
    assert.equal(Icon.title, icon.name);
    const mono = render(Icon, { size: 56 });
    assert.match(mono, /currentColor/);
    assert.equal(svgCount(render(Icon.Avatar, { size: 56 })), 1);
    assert.equal(typeof Icon.Color, 'object');
    if (!icon.hasText) {
      assert.equal(Icon.Text, undefined);
      assert.equal(Icon.Combine, undefined);
      continue;
    }
    assert.match(render(Icon.Text), /currentColor/);
    const combined = render(Icon.Combine, { size: 56 });
    assert.equal(svgCount(combined), 2);
    assert.match(combined, /gap:14px/);
    assert.match(combined, /height="44.800000000000004"/);
    const color = render(Icon.Combine, { type: 'color', size: 56 });
    assert.equal(svgCount(color), 2);
    assert.ok(color.includes(`-${icon.id}-color`), icon.id + ' must use original Color');
    assert.ok(color.includes(`-${icon.id}-text`), icon.id + ' must use currentColor Text');
  }
  await assert.rejects(loadIconComponent('__proto__'));
});
test('Combine supports color, visibility, order, spacing, extra and icon overrides', async () => {
  const { default: Icon } = await loadIconComponent('zenmux');
  assert.equal(svgCount(render(Icon.Combine, { showLogo: false })), 1);
  assert.equal(svgCount(render(Icon.Combine, { showText: false })), 1);
  assert.equal(svgCount(render(Icon.Combine, { showLogo: false, showText: false })), 0);
  const custom = render(Icon.Combine, { size: 40, inverse: true, spaceMultiple: 0.5,
    textMultiple: 0.6, color: 'red', extra: 'AI', extraClassName: 'extra',
    extraStyle: { fontWeight: 700 }, iconProps: { className: 'symbol' }, title: 'Brand' });
  assert.match(custom, /row-reverse/);
  assert.match(custom, /gap:20px/);
  assert.match(custom, /color:red/);
  assert.match(custom, /height="24"/);
  assert.match(custom, /class="symbol"/);
  assert.match(custom, /class="extra"/);
  assert.match(custom, /font-weight:700/);
  assert.match(custom, />AI<\/span>/);
});
test('Avatar supports circle/square, brand styling and scale overrides', async () => {
  const { default: Icon } = await loadIconComponent('zenmux');
  assert.match(render(Icon.Avatar, { size: 56 }), /border-radius:50%/);
  const custom = render(Icon.Avatar, { size: 56, shape: 'square', background: '#123456',
    color: '#abcdef', iconMultiple: 0.6, iconClassName: 'mark', iconStyle: { opacity: 0.8 },
    style: { borderRadius: 8 }, 'aria-label': 'ZenMux avatar' });
  for (const value of ['background:#123456','color:#abcdef','border-radius:8px',
    'scale(0.6)','class="mark"','opacity:0.8','aria-label="ZenMux avatar"']) assert.ok(custom.includes(value), value);
});
