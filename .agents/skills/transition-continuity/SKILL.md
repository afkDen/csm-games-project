---
name: transition-continuity
description: "Design and implement reversible, retargetable, interruption-safe cinematic/portal transitions. Use for every character route, hub/portal handoff, and interaction where scroll, buttons, pointer/touch, navigation, or game ownership can change while motion is active."
---

# Transition Continuity

`docs/TRANSITION_CONTINUITY_CONTRACT.md` is authoritative.

## Mission

Treat important motion as deterministic state instead of a chain of one-way callbacks. The visitor must be able to reverse scroll, retarget eligible actions, stop/resume, and interact without corrupting camera, portal, UI, audio, or gameplay ownership.

## Design requirements

Before implementation define:

- canonical state/progress owner;
- animated-property ownership;
- reversible vs persistent state boundaries;
- retarget/cancel policy;
- button policy while motion is active;
- scroll/pointer/game input arbitration;
- route-specific transition grammar;
- portal/game handoff states;
- cleanup/recovery behavior.

## Runtime rules

1. Prefer progress/state-derived visuals over timeout/completion chains.
2. One runtime owns each animated property at a time.
3. Retarget from the current visible/canonical state; do not snap to stale starts.
4. Cancel stale callbacks/tweens/listeners/audio work when ownership changes.
5. Prevent duplicate route/portal activation.
6. Keep primary scrubbed states reconstructible in reverse.
7. Separate persistent progression changes from reversible cinematic presentation.
8. Do not solve reliability by globally disabling interaction for long periods.
9. Keep each character's transition grammar materially distinct from siblings.

## Evidence

Test representative 25/50/75% direction reversals, rapid alternation, mid-transition eligible control activation, duplicate activation, resize, route history, mobile/touch, reduced motion, game handoff, and return. Capture rendered evidence for visual states.
