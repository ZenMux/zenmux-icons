# Source-backed brand variants

## Problem and goal

Aggregate real assets by Name, preserving Color symbols, Dark Default symbols and
optional complete Combine logos. Source Combine already includes its symbol and text.
Dev.1 incorrectly treated it as a pure wordmark and prepended a second symbol.
Dev.2 uses the complete source directly and never composes or invents brand artwork.
A separate private adapter handles transport, naming and credentials, outside this repo.

## Files and control flow

icons/<id>.svg is Color; icons/default/<id>.svg is Dark; icons/combine/<id>.svg is the
optional complete logo. The private adapter maps the corresponding source variants.
metadata.json keeps id/name/group/groups/hasText. hasText means complete logo artwork
containing text is supplied; it does not mean a text-only source exists. 130 brands,
386 sources, 126 complete logos. Four brands only expose symbol variants.
scripts/generate.mjs reads source SVGs, derives Light and CombineLight by RGB inversion,
and emits React components plus static variants. Geometry/alpha and original viewBoxes
remain unchanged. scripts/lib/svg-variants.mjs protects structural mask/clip paint,
preserves CSS fallbacks and prefixes IDs; React useId isolates repeated instances.
Catalog and lazy placeholders retain actual aspect ratios and per-variant loading.

## Non-goals and compatibility

No text extraction, font rendering or automated composition. Color, Mono, Dark/Light,
Default and lazy APIs stay compatible. Dev.1 pure Text exports were misnamed full logos;
dev.2 removes them. Missing variants reject rather than silently falling back.
Removed source brands are not remapped to differently named products.
GitHub stays private; publish only the scoped dev package, without moving latest.
Next consumes the package without storing SVG or raster resources.

## Validation

Compare Color, Dark and CombineDark React raster output with every original source;
verify Light RGB inversion, alpha, unique/resolvable IDs and original Combine ratios.
Assert Text is absent, and brands without complete sources have no Combine exports.
Type tests and bundle tests cover lazy loading without eager artwork dependencies.
Private parser tests cover aggregation, groups, missing/duplicate sources and safety.
Next browser checks cover actual source logo display, downloads, missing rows and themes.

## Rollout and open questions

Publish 0.1.0-dev.2 and sync the internal registry. Dev.1 is immutable; do not overwrite it.
Internal registry isolation can delay installation; report it separately from publication.
Additional source variants need an explicit mapping; none are guessed automatically.
