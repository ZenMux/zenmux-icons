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
wordmark 38.4 units high (visible symbol:text height = 1:0.8), with a 12-unit gap and vertical centering. No typography is
invented and each source appears once. Combined size is height; width follows viewBox.
scripts/lib/svg-variants.mjs preserves original geometry and opacity, handles XML
prologs, protects mask/clip paint, and prefixes each input's IDs before composition.
Inversion preserves hex presentation fallbacks and display-p3 inline colors separately,
including alpha. React useId isolates repeated instances. Mono remains currentColor.

## Compatibility and non-goals

Component variants retain Color, Mono, Dark/Default, Light and Combine variants.
Text/TextLight/TextDark expose the standalone source wordmark; text/text-light/text-dark
loaders and catalog aspect ratios are generated only for hasText brands. Text follows
currentColor; TextLight preserves the source and TextDark inverts its paint. Static
text-light/text-dark SVGs use the same artwork as React and download consumers.
No auto-inferred brand colors or backgrounds, and no code-level
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

## Dev.6 website metadata

Color Default input names may supply a Website field. The private adapter validates
HTTP(S) URLs without credentials or whitespace, rejects conflicting duplicate values,
and writes optional website into metadata.json. Missing fields remain omitted; no
website is guessed. The catalog generator already copies metadata, so catalog.js and
its declaration files expose the same website without eager artwork imports. React
components and SVG outputs are unchanged. Existing consumers remain compatible.
Validation adds metadata/catalog equality and unsafe/conflicting URL cases. Publish
dev.6 with dev tag; keep latest unchanged. Source integrations stay private.

## Text exposure and ratio correction (2026-09-16, unpublished)

The detail gallery needs a pure Text row as well as a combined lockup. Update
scripts/generate.mjs and scripts/lib/svg-variants.mjs, then regenerate src/ and static/.
Source SVGs and metadata inputs are unchanged. Existing Combine names remain, but
their dimensions change to honor 1:0.8 painted-height proportions; width is derived from
the new viewBox. The unchanged gap is 25% of symbol height. References remain scoped
per input and per React instance, including non-zero viewBox origins.

Tests verify all standalone source pixels, static/React parity, absent-source rejection,
one symbol plus one wordmark, dimensions, alpha placement, typings and lazy loading.
This is a local source change, not a published dev.6 replacement. Publish a new unique
version only on user request, then update the consumer pin and lockfile before rollout.
No production deployment or source-system edits. Open question: release version and timing.

Source viewBoxes contain unequal transparent margins (ZenMux symbol about 86% painted,
wordmark about 63%), so canvas-height scaling does not satisfy the visual ratio.
artworkBox measures nonzero alpha with the existing sharp dev dependency at 2048px
height, capped at 8192px width. It maps the pixel bounds back to source coordinates,
including offset origins; empty artwork fails generation. Bounds are shared across
theme variants. Only composition transforms use these bounds; standalone files retain
their geometry and margins. SVG output remains vector, not embedded raster. This is
build-time measurement with subpixel approximation, not a browser/runtime dependency.
Painted-height/centering tests use independent raster scans with antialias tolerances.

## LobeHub-style compound components

Reference: installed @lobehub/icons OpenRouter index/components plus the shared
IconCombine/IconAvatar implementations. Default remains Mono/currentColor; Color is
the original source. Text is currentColor. Public Combine now supports type=mono/color,
visibility flags, inverse ordering, spacing/text multipliers, icon overrides and extra
text. Avatar supports circle/square, background/foreground, scale and icon styling.
scripts/templates/compound.tsx implements these layout controls with React/HTML only;
generate.mjs emits per-brand factories and index members. No dependency on LobeHub UI.

Unlike per-brand LobeHub presets, our source catalog has no authoritative primary color
or avatar styling. Avatar therefore uses documented neutral black/white defaults and
accepts explicit overrides; no primary-color metadata is invented. Brand artwork stays
ours. The approved 0.8 painted text multiplier and 0.25 gap remain the defaults.
Box measurement includes Color separately because its geometry may differ from Mono.

Compatibility: Combine changes from a single SVG to a div containing two SVGs, as in
the reference. Consumers needing SVG/ref/export behavior use the unchanged generated
CombineDark/CombineLight or loadIcon's combine variants. Compound refs are HTMLDivElement;
this DOM/ref change requires a new prerelease and migration note. Default, Color, Text
and themed SVG entry points remain. Missing wordmarks omit Text/Combine, never Avatar.
loadIconComponent performs per-brand dynamic import, validates names and does not put
artwork into the catalog's static graph. title comes from existing catalog metadata.

Validation covers all brands' six-member availability, original Color selection,
missing-source cases, custom Combine flags/spacing/order, Avatar appearance props,
refs, isolated fragment IDs and existing SVG geometry tests. Browser checks must use
the actual public components, not approximate previews. Publishing remains separately
authorized; no avatar brand-color migration is assumed.

## Dev.7 release attempt (2026-09-16)

User authorized npm publication and scoped commit/push. Version and package lock
are prepared at 0.1.0-dev.7. Generate, all 16 tests, source checks and archive
allowlist/credential scans pass. The release archive contains only public package
files (10,754,397 bytes; SHA-1 0112b29fefba0cce311a431669f2aa4216cb4ab9).
Two PUT attempts to the official registry returned 404; subsequent exact-version
queries still return 404. whoami succeeds and collaborator lookup reports the
account as read-write, so the precise publication failure is unresolved, not
assumed to be an invalid token. No successful publication is claimed.
Keep dev/latest tags unchanged. Do not retry blindly or bump again: resolve the
registry/account issue, check whether dev.7 has appeared, and compare integrity
before any further publication attempt. Next must not pin the unavailable version.

A separate empty consumer installed the prepared tarball with React/ReactDOM and
TypeScript from npm. Runtime checks and TypeScript compilation passed for all six
public usages, named/direct imports, catalog, loadIconComponent, all Text/Combine
lazy variants, deferred SSR and missing-wordmark behavior. This validates the
distributed artifact, but is explicitly not a successful registry install of dev.7.

### Publication accepted (2026-09-16 follow-up)

Retrying the same checked archive with the user's current npm user configuration
succeeded with HTTP 202 Accepted and npm's explicit processing notice. The former
environment credential is no longer present; no credentials or npm configuration
were changed by the agent. Initial official metadata queries still list dev.6.
Do not republish dev.7 while processing. Acceptance is not installation evidence:
verify the version, archive integrity, dev tag and clean registry install before
updating Next's dependency pin. latest must remain 0.1.0-dev.0.
