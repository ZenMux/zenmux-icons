# Source-backed brand variants

## Goal and source contract

Aggregate real assets by brand Name. Keep original Color symbol, supplied Dark Default
symbol, and optional pure wordmark. A separate private adapter handles source naming,
source transport and credentials; none of that integration is shipped here.
Metadata keeps id/name/group, adds groups and hasText. Current snapshot: 130 brands,
386 sources, 126 wordmarks. No invented text for missing-wordmark brands.

## Files and generation

icons/<id>.svg is Color; icons/default/<id>.svg is Dark; icons/text/<id>.svg is the
optional wordmark. scripts/lib/svg-variants.mjs preserves inline style fallbacks,
deduplicates repeated CSS properties for valid JSX, inverts RGB without changing alpha,
and protects structural mask/clip paint. Combined SVGs compose the actual symbol at
48px height and wordmark at 24px height, with a 12px gap; no glyph paths are authored.
Prefix IDs independently before combining to avoid collisions, then use React useId
for repeated component instances. Text and combined components retain aspect ratio.

src and static are generated. Catalog provides available variants and aspect ratios,
while loadIcon retains literal dynamic imports. LazyIcon uses the ratio to reserve
space, including missing-variant error fallback. Names do not imply availability.

## Compatibility and rollout

Color and theme-aware Mono APIs remain. Dark/Light and optional Text/Combine APIs are
additive; Default aliases Dark. Real source removals are explicit and are not remapped
to other products. Version 0.1.0-dev.1 is a dev release, not a stable release.
GitHub remains private. The unscoped placeholder is not duplicated or republished.

## Validation

Private parser tests cover Name aggregation, groups, duplicates, missing variants,
legacy slug preservation and safe style parsing. Public tests compare source and
React raster output, verify dark/light inversion and alpha, per-instance fragment IDs,
real wordmark aspect ratios and missing-text behavior. Bundle tests ensure no SVG is
in the metadata or static lazy-entry graph. A complete staged snapshot passes these
checks before promotion. Next should consume package components, not copy resources.

## Open points

Additional source variants outside this contract need an explicit mapping. Different
brand groups are retained as metadata. Source export precision and display-p3 colors
are preserved rather than flattened into guessed hex values.
