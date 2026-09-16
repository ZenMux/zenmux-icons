# zenmux-icons

Transparent AI brand icons maintained by ZenMux.

GitHub repository: `ZenMux/zenmux-icons`. Package name: `@zenmux/icons`.
The scoped package contains the implementation. `packages/zenmux-icons` is a small
name-protection placeholder exporting package information only; it has no icons
and no second implementation. Its publication is independent of the main package.

**Status:** private GitHub repository. `@zenmux/icons` is available as a public dev
prerelease (`0.1.0-dev.6`, npm tag `dev`); there is no stable release. Dev.7 is prepared
locally but its publication is blocked by registry PUT 404 responses. The name-protection placeholder
[`zenmux-icons@0.0.0`](https://www.npmjs.com/package/zenmux-icons) is published.
No CI or automatic package publishing is configured.

## Icon catalog

322 brands are available in this development release. Metadata is generated from the
actual source collection. 319 brands have Light wordmarks. Symbols retain their supplied Light or Dark theme. Consult `@zenmux/icons/catalog` or the local preview for the
current names, groups and available variants.

Dev.7 additionally exposes `.Text`, `.TextLight`, and `.TextDark` (lazy variants
`text`, `text-light`, `text-dark`) only when `hasText` is true. Text is the original
vector wordmark, never generated typography. Combine is symbol + wordmark at a 1:0.8
visible-artwork height ratio (excluding source padding), vertically centered with a
gap of 0.25 symbol heights. These APIs are introduced in dev.7.

The compound API follows LobeHub's component model:

```tsx
import { Zenmux } from '@zenmux/icons';

<Zenmux size={56} />                         // Mono, currentColor
<Zenmux.Color size={56} />                   // Original palette
<Zenmux.Text size={56} />                    // Wordmark, currentColor
<Zenmux.Combine size={56} />                 // Mono symbol + wordmark
<Zenmux.Combine size={56} type="color" />    // Original symbol + currentColor wordmark
<Zenmux.Avatar size={56} />                  // Circular avatar
```

Combine accepts `color`, `inverse`, `showLogo`, `showText`, `spaceMultiple`,
`textMultiple`, `iconProps`, `extra`, `extraClassName`, `extraStyle` and ordinary
div props/styles. Defaults preserve the requested 1:0.8 visible height ratio and
0.25 symbol-height gap. Avatar accepts `shape="circle" | "square"`, `background`,
`color`, `iconMultiple`, `iconClassName`, `iconStyle` and div props/styles.
It defaults to a white Mono on black with 0.75 icon scale; supply brand-specific
colors explicitly rather than inferring a primary color from arbitrary source paths.
Text/Combine are absent without source wordmarks. `.title` is the catalog brand name.

Like LobeHub, public Combine and Avatar are HTML layout components (div refs), not
single SVGs. Existing `loadIcon(id, 'combine')` and themed CombineDark/CombineLight
remain vector components for lazy assets/downloads. `loadIconComponent(id)` loads
one brand's full public API on demand. No LobeHub artwork or UI dependency is bundled.

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

For the currently published version use `@zenmux/icons@0.1.0-dev.6`; the new Text,
compound Combine and Avatar APIs above require the pending dev.7 release.
The examples below also work
with a built local checkout installed by absolute directory.

```tsx
import { Deepseek, Arcee } from '@zenmux/icons';

<Deepseek.Light size={24} />
<Deepseek.Dark size={32} />
<Arcee.Color size={32} />
```

Default components are monochrome and follow `currentColor`; `color="black"` and
`color="white"` select explicit colors. `.Color` retains the original brand palette.
Both support `size` (number or CSS string, default `1em`), standard SVG props and
forwarded refs. Explicit `width`/`height` props override `size` on their respective axes. Decorative icons are
hidden from assistive technology by default. For a meaningful standalone icon:

```tsx
<Deepseek role="img" aria-hidden={false} aria-label="Deepseek" />
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
const ArceeColor = lazy(() => loadIcon('arcee', 'color'));
// Render only when the containing view should load:
<Suspense fallback={null}><ArceeColor size={32} /></Suspense>
```

The loader registry uses literal dynamic imports so bundlers can create separate
chunks. Module loading is cached by the runtime. Actual chunk scheduling remains
controlled by the consuming bundler; do not import the root icon barrel or prefetch
all loader functions for a lazy gallery. For a single synchronous component you can
use `import Deepseek from '@zenmux/icons/Deepseek'`.

The static gallery likewise fetches metadata first and assigns SVG image sources
only near the viewport. Group headings come from source metadata. Missing groups
and brand artwork are not fabricated from the reference design.

## Development releases

A release is packed after generation, tests and validation. Only `dist/`, original
SVGs, black/white SVGs, metadata and package documentation are distributed. Internal
source adapters and authentication are never included. The default publication tag
is `dev`; use unique prerelease versions and do not move `latest` for development work.

## Source-backed variants

- `.Color`: original color symbol.
- `.Dark` / `.Default`: supplied Dark symbol, or RGB inversion of a supplied Light symbol.
- `.Light`: supplied Light symbol, or RGB inversion of a supplied Dark symbol.
  Original geometry and opacity remain intact; catalog `symbolTheme` identifies the original.
- Default component / `mono`: theme-aware monochrome compatibility entry.
- `.CombineDark`: original Dark symbol + inverted Light wordmark.
- `.CombineLight`: inverted Dark symbol + original Light wordmark.
- `.Combine`: theme-aware monochrome composition.

The source wordmark has no symbol. Compose exactly one symbol (48 units high) and
one wordmark (24 units high), with a 12-unit gap and vertical centering.
Original SVGs are preserved in `icons/`, `icons/default/` (Dark), `icons/light/` (Light), and `icons/text/`.

Combined `size` specifies height; width follows the real aspect ratio.
`LazyIcon` and `loadIcon` accept `dark`, `light`,
`combine-dark`, `combine-light`, as well as compatibility variants. Check `hasText`
and `variants` in the catalog before displaying combined options; unavailable
variants reject rather than silently falling back. Lazy placeholders reserve the
correct aspect ratio before the artwork chunk loads.

```tsx
import { LazyIcon } from '@zenmux/icons/lazy';
<LazyIcon name="arcee" variant="combine-dark" size={48} />
```

Version dev.6 includes 322 brands in LLM, Agent and Provider groups, preserving the
67-brand dev.3 catalog and adding 255 brands. Inputs include 322 verified dark-surface symbol originals and 319 Light wordmarks.
The 255 newly added white/gray originals have corrected symbolTheme metadata,
so their Light variant is inverted instead of displaying white artwork on white. v0, Google Cloud and Google
have no wordmark, so they expose no Combine variants. The two Gemma Simple source
variants remain outside this Default-based release. Missing variants are not fabricated.

## Brand websites

Brand metadata includes an optional `website` URL, copied from the source's Color
Default entry. It is available in both `metadata.json` and `@zenmux/icons/catalog`:

```ts
import catalog from '@zenmux/icons/catalog';
const website = catalog.find(icon => icon.id === 'zenmux')?.website;
```

Only HTTP(S) URLs without embedded credentials are accepted. Websites can be project
pages as well as brand homepages. Missing URLs remain omitted rather than inferred.
