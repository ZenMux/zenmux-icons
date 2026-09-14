# zenmux-icons

Transparent AI brand icons maintained by ZenMux.

GitHub repository: `ZenMux/zenmux-icons`. Package name: `@zenmux/icons`.
The scoped package contains the implementation. `packages/zenmux-icons` is a small
name-protection placeholder exporting package information only; it has no icons
and no second implementation. Its publication is independent of the main package.

**Status:** private GitHub repository. `@zenmux/icons` is available as a public dev
prerelease (`0.1.0-dev.0`, npm tag `dev`); there is no stable release. The name-protection placeholder
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

Install the development release:

```sh
npm install @zenmux/icons@dev
```

For a fixed version use `@zenmux/icons@0.1.0-dev.0`. The examples below also work
with a built local checkout installed by absolute directory.

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
An open-source license will be decided separately. This prerelease is marked UNLICENSED.

## Grouped galleries and asynchronous loading

Load the directory separately from artwork. This entry contains only data and types;
it does not import React, icon components or the SVG paths:

```tsx
import iconCatalog, { iconGroups } from '@zenmux/icons/catalog';
import { LazyIcon } from '@zenmux/icons/lazy';

export function Gallery() {
  return iconGroups.map(group => (
    <section key={group}>
      <h2>{group}</h2>
      {iconCatalog.filter(icon => icon.group === group).map(icon => (
        <div key={icon.id}>
          <LazyIcon name={icon.id} variant="color" size={48} />
          <span>{icon.name}</span>
        </div>
      ))}
    </section>
  ));
}
```

`LazyIcon` reserves space and imports only the requested icon/variant when it enters
within 160px of the viewport. A shared IntersectionObserver is used. Pass `variant="mono"`
and `color="black"` or `color="white"` for monochrome output. Use `eager` for an icon
that should load on mount (for example, in an opened modal). `fallback` and
`errorFallback` accept React nodes. Changing name/variant cancels stale render updates;
unmounting disconnects observation and ignores pending results. Without
IntersectionObserver, it falls back to loading on mount. SSR renders the placeholder.
`LazyIcon` is a client component; place stateful gallery code in a client boundary in Next.js.

For your own visibility, modal or Suspense logic:

```tsx
import { lazy, Suspense } from 'react';
import { loadIcon } from '@zenmux/icons/loaders';
const GeminiColor = lazy(() => loadIcon('gemini', 'color'));
// Render only when the containing view should load:
<Suspense fallback={null}><GeminiColor size={32} /></Suspense>
```

The loader registry uses literal dynamic imports so bundlers can create separate
chunks. Module loading is cached by the runtime. Actual chunk scheduling remains
controlled by the consuming bundler; do not import the root icon barrel or prefetch
all loader functions for a lazy gallery. For a single synchronous component you can
use `import Gemini from '@zenmux/icons/Gemini'`.

The static gallery likewise fetches metadata first and assigns SVG image sources
only near the viewport. Group headings come from source metadata. Missing groups
and brand artwork are not fabricated from the reference design.

## Development releases

A release is packed after generation, tests and validation. Only `dist/`, original
SVGs, black/white SVGs, metadata and package documentation are distributed. Internal
source adapters and authentication are never included. The default publication tag
is `dev`; use unique prerelease versions and do not move `latest` for development work.
