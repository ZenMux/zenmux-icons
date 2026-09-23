# Explicit symbol/text variants (development release)

## Problem and scope

The replacement catalog supplies Group, Name, Type=Symbol|Text and Color=Color|Light|Dark.
Groups come from the structured name, not directory categories. Light/Dark are artwork
colors, not surface names. Preserve all five supplied variants independently, without inversion.
This is a dev-only catalog migration; stable latest and consumers remain unchanged.

## Model and files

metadata gains sourceVariants (explicit source slots) and hasSymbol. Source files are
icons/<id>.svg for Color and icons/{dark,light,text-dark,text-light}/<id>.svg for others.
Legacy metadata remains supported. Same name in different groups remains a distinct entry
because source geometry differs; first group retains the base ID, later groups use suffixes.
Only normalized exact names are joined within a group. No spelling/brand guesses.
Website is retained from the Color symbol; text-only entries may have no website.

scripts/check.mjs validates slots/flags/files; generate.mjs uses exact sources, creates
currentColor derivatives and composes Combine only when both Symbol and Text exist.
Text-only exports have Text/TextDark/TextLight and a text default, not Color/Mono/Avatar/Combine.
loadIcon/LazyIcon default to text when no color exists; BrandIcon members become optional.
The README generator discovers groups and supports text-only images; preview avoids missing symbols.
Tests compare every explicit source against its rendered variant; legacy inversion tests remain
limited to legacy metadata. Missing variants reject instead of creating fake artwork.

## Validation and rollout

Run generation, checker, TypeScript and all rendering/compound/lazy tests. Compare source byte
hashes against the input snapshot, confirm complete asset count and Website coverage.
Publish a unique X.Y.Z-dev.N under dev on a separate branch/tag. Never move latest or main as
part of this preview. Stable adoption and consumer adaptations require a separate decision.

## Refreshed dev.1 snapshot

Reloaded the corrected source names: 114 grouped entries, 555 source SVGs,
113 color-symbol websites, 1 text-only entry. Seven prior orphan names now join
their corrected group/name entries. No latest or consumer manifest changes.

## Composition opt-out

Optional metadata hasCombine=false suppresses all three composed SVG variants and
all Combine exports, while retaining Symbol/Color/Text/Avatar as available. The source
adapter derives it from Combine=false; absent flags retain the old default. The current
Xiaomi MiMo source explicitly opts out. Rendering tests require missing composition
loaders to reject, while verifying Text and Symbol independently against source pixels.

## Stable 0.1.2: source-side grouping supersedes preview IDs

Per owner correction, one normalized name now produces one entry/ID with multiple
groups. The source adapter deterministically selects a complete set per artwork type
from the first sorted group, unions memberships and rejects conflicting website or
composition metadata. Extra historical group IDs become aliases, not artwork entries.
The resulting catalog contains 96 brands and 470 selected source files. Aliases cannot
collide with canonical IDs or other aliases. Next uses aliases solely for redirects;
all group links use the canonical ID. These changes are approved for stable 0.1.2.

## 0.1.3 source correction

Kitchen corrected Agent Text from Grok to Grok Build. A fresh sync now assigns both
Symbol and Text to Grok Build, while Maker Symbol/Text remains Grok. No parser space
normalization bug was involved. Release 0.1.3 republishes the corrected catalog.

## Optional source color variants

ColorLight and ColorDark are preserved as ColorLight/ColorDark components and static
color-light/color-dark assets. They target light and dark surfaces respectively and
are not the monochrome Light/Dark artwork. Tests compare both directly to source pixels.
