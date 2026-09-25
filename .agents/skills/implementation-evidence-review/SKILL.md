---
name: implementation-evidence-review
description: "Independently review the running implementation against the approved plan, locked creative/scroll/depth contracts, world uniqueness, browser evidence, game/audio behavior, architecture, assets, and claimed capability usage. Reviewers report findings and do not fix their own findings by default."
---

# Implementation Evidence Review

Read the approved orchestration artifacts and current implementation. Do not trust implementer self-report without evidence.

## Required visual/interaction review

When applicable, independently inspect:

- still-aesthetic fidelity and pastel tonal translation;
- character behavior expressed through motion/composition/interaction;
- full scroll route slowly forward and backward;
- representative 25/50/75% direction flips, rapid alternation, eligible mid-transition control activation, and duplicate activation;
- accidental dead scroll, stale callbacks, ownership conflicts, and broken intermediate states;
- signature interaction and engineered peak;
- spatial depth / occlusion / camera crossing / type integration;
- continuous idle life and pointer/touch response;
- lens portal ownership and game handoff;
- route uniqueness against completed siblings, including transition grammar rather than only palette/assets/keyframes;
- game controls/progression/fail/win/restart/escalation;
- audio unlock/mute/pause/cleanup and signal/timing evidence;
- mobile/tablet/laptop-height composition;
- reduced-motion/quality/failure modes;
- route/deep-link/back-forward lifecycle;
- memory/listener/timer/render cleanup;
- performance hotspots based on evidence, with primary creative systems protected per policy;
- asset/media provenance and whether sourced/FFmpeg-derived assets improve the intended beat rather than genericize it;
- accessibility/readable DOM controls and source/secrets boundaries.

DOM assertions alone are insufficient for canvas/WebGL quality.

## Skill-active review

Independently load the skills that define quality for the implemented feature. For a character cinematic route, this normally includes creative direction, scroll experience, spatial depth, still treatment, uniqueness, and any routed game/audio/asset skills.

## Capability compliance

For every row in `CAPABILITY_ROUTING.md`, record planned status, actual outcome, concrete evidence, and review status. A required capability without material evidence is a failure. A conditional capability whose trigger never fired is not.

## Findings

Classify findings:

- `P0` blocker/data-loss/security/major correctness;
- `P1` must fix before milestone closeout;
- `P2` quality/experience issue normally fixed before closeout;
- `P3` polish that may be deferred with explicit reason.

A route can receive P1/P2 findings for being flat, dark-by-default, section-like, generic, insufficiently character-authored, or over-optimized even when it is functionally correct.

Write `IMPLEMENTATION_REVIEW.md` with overall `PASS` or `FAIL`. Confirm repairs by rerunning the failing states.
