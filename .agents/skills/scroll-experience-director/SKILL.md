---
name: scroll-experience-director
description: "Design and verify motion-site/scrollcraft-style route choreography where scroll is a continuous timeline controlling camera, depth, typography, scene state, audio, and portal progression. Use for every character cinematic route and hub sequence with meaningful scrollytelling."
---

# Scroll Experience Director

Read `docs/SCROLL_EXPERIENCE_CONTRACT.md`, `docs/TRANSITION_CONTINUITY_CONTRACT.md`, and the current character world spec.

## Core standard

A route should feel like the visitor is driving a living composition through time/space. Repeated viewport fade/slide reveals are not sufficient.

## Required route design

Before implementation, produce a 0–100 experience score with contiguous ranges covering:

- opening;
- development;
- interactive hold/variation;
- anticipation;
- engineered peak;
- portal/game handoff.

Every substantial range must name what scroll materially changes.

## Inputs

Use progress as the baseline. Add direction, velocity, acceleration, and idle/settle behavior where they materially improve the character grammar.

Different visual layers may respond with different damping/mass. Keep ownership clear so GSAP/Motion/R3F/Theatre do not fight over properties.

## Transition grammar + signature move

Require a route-owned transition grammar for movement between major states, plus one bespoke character-owned signature interaction/transition. Neither may be recreated in a sibling route merely by changing assets, palette, timing, and keyframes.

## Review

Scrub slowly forward and backward through the full route. Inspect:

- dead scroll;
- abrupt ownership jumps;
- broken reverse states;
- interruption/retarget bugs under direction flips and eligible button input;
- repeated transition choreography already used by a sibling route;
- intermediate compositions;
- pinned-scene pacing;
- velocity/direction response;
- idle life;
- game input handoff;
- mobile adaptation.

A polished entry/exit does not compensate for weak middle choreography.
