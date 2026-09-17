# Public repository visibility

## Background and goal

Make the reviewed icon repository publicly readable without changing package
behavior, licensing, or publication channels. Earlier private-only rollout
instructions are historical and superseded by this decision.

## Scope and non-goals

Update README and repository guidance to describe public visibility. Retain
UNLICENSED in both package manifests, the existing brand rights NOTICE, and all
source-system separation rules. Public access does not grant an open-source
license or trademark rights. No npm publication, new version, stable channel
promotion, or consumer dependency update is part of this change.

## Data and control flow

No API, schema, build output, or runtime changes. Review all remotely reachable
branches and tags for private information, confirm update tooling supports public
repositories, publish these documentation changes, change repository visibility,
then verify unauthenticated repository and Git access.

## Edge cases and validation

Public visibility applies to repository history and all branches, not only main.
Secret-pattern scans cannot prove the absence of every possible secret or establish
rights to redistribute third-party artwork. Future commits must preserve the same
source-system boundary. Check documentation diffs and scan new content; prior
dependency verification passed generation, all 17 tests and asset checks.

## Rollout and compatibility

Private update tooling stays outside this repository. Existing Git URLs and package
imports remain unchanged; authenticated write access is still required. Verify
anonymous reads after the visibility change. Do not rely on switching back to
private to retract information already copied publicly.

## Open questions

A separate, explicit decision is required for an open-source code license, brand
asset licensing policy, stable npm publication, or a GitHub Release page.
