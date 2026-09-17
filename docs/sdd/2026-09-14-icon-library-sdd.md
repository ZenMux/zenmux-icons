# Icon library and local update contract

Historical design: the private-repository rollout below was superseded on
2026-09-17 by [public visibility](2026-09-17-public-visibility-sdd.md).

## Background and goals

Maintain transparent, original-color AI brand SVGs and React components in one
private repository. Support reproducible local generation and independent local
preview. Start with nine brands. Development npm releases are supported; stable publication and CI are out of scope.

## Files and data

- `icons/<id>.svg`: reviewed, self-contained SVG source.
- `metadata.json`: sorted array of `{ id, name, group }`; no private provenance fields. Group labels follow source grouping; the adapter removes
  the default root label and excludes internal group IDs.
- `scripts/generate.mjs`: local SVG optimization and React generation.
- `src/`: generated Mono/Color components, compound named exports and IconProps.
- `static/black` and `static/white`: generated fixed-color SVG assets.
- `scripts/check.mjs`, `tests/`: input checks and render regression tests.
- `index.html`: searchable static gallery with download and copy actions.

## Control flow

A separately managed source adapter stages a complete asset snapshot. Only validated
assets and generated components enter this checkout. Local generation uses SVGO and
SVGR, preserves viewBoxes and brand colors, and replaces fragment IDs/references
with per-instance React useId values. Default components use currentColor; .Color
preserves original paint. The size prop sets both dimensions (default 1em), while
explicit width/height overrides remain supported. Monochrome generation replaces
visible fills/strokes but preserves structural paint in defs, masks and clipPaths. TypeScript emits ESM and declarations to dist.
The gallery reads the catalog and uses external SVG images to isolate SVG documents.

## Edge cases and validation

Reject empty catalogs, duplicate names, unexpected metadata, unsafe SVG content,
and external SVG resource references. Integration-side validation must reject
partial downloads and require review of source deletions. Repeated React instances
must have unique, resolvable IDs. Raster tests check transparent corners, nonempty
artwork and source/component visual equivalence. Corners alone do not prove that
all surrounding pixels are transparent; use the checkerboard preview for review.

## Compatibility and rollout

React 18/19 supported through standard SVG props and forwarded refs. The generated
components use a client boundary; raw SVGs remain framework independent. No existing
consumer is migrated automatically. Changes are committed locally and pushed to the
private repository. GitHub remains private; npm development releases are public under the dev tag. No CI publishing workflow exists.

## Open questions

The package name is @zenmux/icons; the repository is ZenMux/zenmux-icons.
Confirm ownership of the npm scope, licensing and hosting before publication.
Do not maintain a duplicate unscoped package.

The source adapter transfers validated SVG text unchanged. All monochrome conversion,
static variants, React generation, and size support belong to this repository.

Gallery sections and group filters are derived from metadata group labels, not a
hardcoded category list. New groups appear on the next successful synchronization.
The unscoped zenmux-icons package is a separately published name-protection placeholder
containing package information only. The root @zenmux/icons package is released as a dev prerelease.

## Catalog and lazy-loading contract

`catalog.ts` is generated from metadata and exports iconCatalog (also default),
iconGroups and IconName without importing React or artwork. `loaders.ts` contains
literal per-icon, per-variant imports and rejects unknown names/variants. Exact
catalog/loaders/lazy exports and per-icon subpaths are added to package.json.

The generated lazy.tsx comes from scripts/templates/lazy.tsx. LazyIcon defaults to
color, reserves size, and uses a shared IntersectionObserver with a 160px margin.
Effects import only after intersection or when eager is true. SSR is placeholder-only;
older browsers load on mount. Name/variant keys prevent stale imports from rendering,
and effect cleanup ignores pending results. Errors render errorFallback; callers can
remount to retry. Underlying import caching is native module-cache behavior.

Bundle tests traverse static chunk dependencies and require all artwork to remain
behind dynamic imports. Catalog bundles must contain only metadata. SSR, invalid
inputs and repeated dynamic loads are checked. A real-browser scroll fixture verifies
pending-to-loaded transitions. Public gallery SVG requests are deferred until images
approach the viewport; reference layout is implemented with the available real catalog.

0.1.0-dev.0 is a manual development release using npm tag dev and public access.
The package file allowlist excludes source adapters, tests, tools and credentials.
No latest/stable tag is intentionally published or changed. Licensing remains UNLICENSED.
