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
