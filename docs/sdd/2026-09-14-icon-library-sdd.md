# Icon library and local update contract

## Background and goals

Maintain transparent, original-color AI brand SVGs and React components in one
private repository. Support reproducible local generation and independent local
preview. Start with nine brands. Package publication and CI are out of scope.

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
private repository. The package remains private and no publishing workflow exists.

## Open questions

The package name is @zenmux/icons; the repository is ZenMux/zenmux-icons.
Confirm ownership of the npm scope, licensing and hosting before publication.
Do not maintain a duplicate unscoped package.

The source adapter transfers validated SVG text unchanged. All monochrome conversion,
static variants, React generation, and size support belong to this repository.

Gallery sections and group filters are derived from metadata group labels, not a
hardcoded category list. New groups appear on the next successful synchronization.
The unscoped zenmux-icons package is a separately published name-protection placeholder
containing package information only. The root @zenmux/icons package remains private.
