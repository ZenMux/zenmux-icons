# zenmux-icons

Transparent AI brand icons maintained by ZenMux.

GitHub repository: `ZenMux/zenmux-icons`. Package name: `@zenmux/icons`.
The scoped package contains the implementation. `packages/zenmux-icons` is a small
name-protection placeholder exporting package information only; it has no icons
and no second implementation. Its publication is independent of the private root package.

**Status:** private GitHub repository. The main `@zenmux/icons` package is not
published and intentionally has `private: true`. The name-protection placeholder
[`zenmux-icons@0.0.0`](https://www.npmjs.com/package/zenmux-icons) is published.
No CI or automatic package publishing is configured.

## Icon catalog

| Icon | Preview | SVG |
| --- | --- | --- |
| Cherry Studio | <img src="icons/cherry-studio.svg" width="36" height="36" alt="Cherry Studio" /> | [Download](icons/cherry-studio.svg) |
| Claude | <img src="icons/claude.svg" width="36" height="36" alt="Claude" /> | [Download](icons/claude.svg) |
| Cline | <img src="icons/cline.svg" width="36" height="36" alt="Cline" /> | [Download](icons/cline.svg) |
| Codex | <img src="icons/codex.svg" width="36" height="36" alt="Codex" /> | [Download](icons/codex.svg) |
| Cursor | <img src="icons/cursor.svg" width="36" height="36" alt="Cursor" /> | [Download](icons/cursor.svg) |
| Gemini | <img src="icons/gemini.svg" width="36" height="36" alt="Gemini" /> | [Download](icons/gemini.svg) |
| Obsidian | <img src="icons/obsidian.svg" width="36" height="36" alt="Obsidian" /> | [Download](icons/obsidian.svg) |
| Sider | <img src="icons/sider.svg" width="36" height="36" alt="Sider" /> | [Download](icons/sider.svg) |
| Z.ai | <img src="icons/zai.svg" width="36" height="36" alt="Z.ai" /> | [Download](icons/zai.svg) |

## Local development

Requires Node.js 22+ and npm. Python 3 is used only by the local static preview server.

```sh
npm ci
npm run generate
npm test
npm run check
npm run preview
```

Open http://localhost:4173 to browse source-defined groups, search icons, inspect transparency on light/dark
backgrounds, switch original/black/white variants and sizes, copy SVG/React snippets, or download
individual SVGs. Black/white assets are generated under `static/black` and `static/white`.

## React

For a local checkout, run `npm run build` then install its absolute directory
into a consuming project with `npm install /absolute/path/to/zenmux-icons`.
The following example applies after that local installation, not a registry install:

```tsx
import { Claude, Gemini } from '@zenmux/icons';

<Claude size={24} color="black" />
<Gemini size={32} color="white" />
<Gemini.Color size={32} />
```

Default components are monochrome and follow `currentColor`; `color="black"` and
`color="white"` select explicit colors. `.Color` retains the original brand palette.
Both support `size` (number or CSS string, default `1em`), standard SVG props and
forwarded refs. Explicit `width`/`height` props override `size` on their respective axes. Decorative icons are
hidden from assistive technology by default. For a meaningful standalone icon:

```tsx
<Claude role="img" aria-hidden={false} aria-label="Claude" />
```

Generated components use React `useId` to isolate gradients and clipping references
for each rendered instance. Components carry a `use client` boundary for Next.js.
Static SVG files can be used in any framework via `<img>` or as downloaded assets;
when manually inlining the same raw SVG multiple times, namespace its fragment IDs.

## Updating assets

The source-system adapter is maintained separately and is not distributed in this
repository. It submits only vetted SVG assets, a minimal catalog, and generated
React components. This repository's `scripts/` contains only local build and check
tools; none fetch source-system data.

`icons/*.svg` and `metadata.json` are the inputs. `src/` and `static/` are generated and should not
be edited by hand. Keep original colors and viewBoxes. Review changes against the
preview, including transparent and dark backgrounds. An update must pass:

```sh
npm run generate
npm test
npm run check
```

Tests cover repeated-instance SVG references, transparent corners, nonempty artwork,
and raster comparison between source SVGs and generated color React components. Additional checks cover size,
ref typings, and black/white output for both React and static SVG variants.

Brand artwork and names belong to their respective owners; see [NOTICE](NOTICE).
An open-source license and npm publication will be decided separately.
