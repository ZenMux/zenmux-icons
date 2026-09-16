# Source-backed brand variants

## Problem and goal

Dev.5 contains 322 brands across LLM, Agent and Provider. It extends the dev.3
67-brand snapshot with 255 brands, using the verified intended background of original symbols.
The new Combine input is a Light wordmark without a symbol. This differs from dev.2,
whose source already contained complete logos. All input SVGs come from original files;
private adapters, source-system URLs and authentication remain outside this repository.

## Files and data contract

icons/<id>.svg is original Color Default; icons/default/<id>.svg is original Dark Default;
icons/light/<id>.svg is original Light Default; icons/text/<id>.svg is original Light
Combine wordmark. metadata.json retains id/name/group/groups/hasText and adds
symbolTheme (light/dark) to identify the original symbol. There are 319 wordmarks,
322 Dark symbols and 322 Color symbols: 963 source SVGs.
v0, Google Cloud and Google have no wordmarks and no Combine variants.
Two alternative Simple inputs are skipped by the private adapter, with an explicit log.
Source directory validation rejects old complete-logo layouts rather than mixing rules.

## Generation flow

scripts/generate.mjs preserves the supplied symbol and derives the opposite theme
by RGB inversion. Source validation requires exactly one Light/Dark Default input.
CombineDark composes the Dark symbol + inverted Light wordmark. CombineLight
composes the Light symbol + original Light wordmark. Each symbol is 48 units high, each
wordmark 24 units high, with a 12-unit gap and vertical centering. No typography is
invented and each source appears once. Combined size is height; width follows viewBox.
scripts/lib/svg-variants.mjs preserves original geometry and opacity, handles XML
prologs, protects mask/clip paint, and prefixes each input's IDs before composition.
Inversion preserves hex presentation fallbacks and display-p3 inline colors separately,
including alpha. React useId isolates repeated instances. Mono remains currentColor.

## Compatibility and non-goals

Component variants remain Color, Mono, Dark/Default, Light and Combine variants.
No new pure Text API, no auto-inferred brand colors or backgrounds, and no code-level
renaming of missing brands. Existing dev.3 IDs remain unchanged; new brands retain their source names.
Lazy loaders remain split per variant; catalog imports do not load artwork.

## Validation

Private parser tests verify names, duplicate conflicts, groups and missing sources.
Public tests compare original symbol pixels/alpha, dark/light inversion including
semi-transparent artwork, per-instance IDs, composition path counts and source geometry,
wordmark placement and ratio, and lazy dependency graphs. XML/P3 regression fixtures
verify fallback paints and alpha. Inspect sample combined renders on both backgrounds.
Run generate, test and check before packing. A dry-run validates a complete snapshot
before applying changes. Missing source variants fail explicitly or stay unavailable.

## Rollout and open questions

Publish a unique 0.1.0-dev.5 prerelease with tag dev, keeping latest unchanged.
Keep the GitHub repository private. Verify official availability and internal mirror
synchronization separately; internal isolation may delay installation. Do not deploy
production. Source additions outside the three mapped variants need explicit rules.

## Verified source-theme corrections

Dev.4 trusted the newly added Default names, although all 255 originals were white
or white/gray artwork. Dev.5 corrects symbolTheme to dark for those reviewed inputs.
Private adapter corrections are keyed to SHA-256 of the actual SVG bytes, with user
approval. This avoids a global Light-to-Dark rule: changed originals no longer match.
Corrections move the unchanged original into the appropriate source directory; Light
wordmarks and original Color artwork are unaffected. Regression tests verify actual
foreground contrast for Z.ai, Open WebUI and Google and their available combinations.
