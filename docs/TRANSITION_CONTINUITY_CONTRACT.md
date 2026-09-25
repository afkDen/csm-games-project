# Transition Continuity Contract — Reversible, Retargetable, Interruption-Safe

This contract prevents beautiful motion from becoming brittle when the visitor scrolls backward, reverses direction quickly, clicks during a transition, changes routes, resizes, or hands control between scroll and gameplay.

Read this with `SCROLL_EXPERIENCE_CONTRACT.md`, `WORLD_UNIQUENESS_CONTRACT.md`, and `ROUTE_SCENE_GRAPH.md`.

## Core rule

**Important visual transitions are state, not one-way event chains.**

For any reversible cinematic phase, the rendered result should be derivable from a canonical state such as route progress, stable application state, and bounded live input channels. A transition must not depend on a fragile history of timeouts, completion callbacks, or assumptions that the user will keep moving forward.

The visitor is allowed to change their mind.

## Required behavior

A cinematic transition should normally support all of the following without visual corruption:

- scroll forward, stop, then continue;
- scroll backward before the transition finishes;
- reverse direction repeatedly;
- jump to a nearby scroll position;
- press an eligible button while motion is still settling;
- move pointer/touch during a scrubbed sequence;
- trigger route/back navigation at a defined safe point;
- resize/orientation change;
- tab visibility loss/resume;
- enter and leave gameplay without scroll fighting the game;
- reduced-motion or adaptive-quality mode changes at supported boundaries.

If one of these behaviors is intentionally disallowed, the world spec must say why, what input is temporarily owned/locked, and how the UI communicates/recoveries from that restriction.

## Canonical-state principle

Prefer systems where a visual frame is computed from:

```text
stable app state
+ route progress / transition progress
+ character-specific live input channels
= rendered visual state
```

Examples of live input channels include pointer position, scroll velocity, acceleration, game state, audio analysis, and settled/idle time. Keep them bounded and explicitly owned.

Avoid using the *previous animation completion* as the only source of truth for what should render next.

## Single ownership

Every animated property must have one runtime owner at a time.

Do not let GSAP, Motion, R3F frame loops, Theatre.js, CSS transitions, and ad-hoc React effects simultaneously write the same transform/material/camera/property.

Ownership may transfer, but the handoff must be explicit and tested.

## Retargeting and cancellation

When the user changes the target while a transition is active:

1. read the current canonical/visual state;
2. cancel, overwrite, or retarget the previous motion cleanly;
3. continue from the current visible state rather than snapping back to a stale start value;
4. preserve invariants such as camera ownership, portal visibility, input ownership, and audio ownership;
5. leave no orphaned timers, callbacks, tweens, listeners, render targets, or audio loops.

Do not queue a long sequence of obsolete clicks/scroll intents and play them after the user has already changed direction.

## Scroll-driven states

Scrubbed animation should normally be a deterministic function of scroll progress. Direction and velocity can modify secondary behavior, but reversing scroll must reconstruct the primary composition reliably.

Avoid irreversible mutations inside ordinary ScrollTrigger callbacks when the same state can be expressed directly from progress.

If a threshold triggers a persistent application state, separate that persistent state from the reversible cinematic visuals around it.

## Button / control interaction during motion

Buttons and controls must have an explicit transition policy:

- **retargetable:** the active transition redirects toward the new target;
- **safe immediate action:** the action can occur without corrupting the active visual state;
- **temporarily owned:** interaction is briefly unavailable because another interaction owns the stage, with clear semantics and bounded duration.

Silently ignoring clicks, accepting duplicate activation, or firing overlapping route/portal transitions is a failure.

Do not globally disable all interaction just because a tween is running.

## Portal state machine

Shared portal lifecycle may use stable states such as:

```text
HUB_IDLE
→ ROUTE_ACTIVE
→ PORTAL_ARMED
→ PORTAL_TRANSITION
→ GAME_ACTIVE
→ RETURN_TRANSITION
→ HUB_IDLE
```

This is a lifecycle model, not a shared animation template.

Every route owns how those states look, how progress is mapped between them, and what the transition feels like. The implementation must prevent contradictory simultaneous states such as `GAME_ACTIVE` while route scroll still owns the same controls/camera.

## Transition uniqueness

Reversibility does **not** mean every route gets the same generic crossfade/zoom timeline.

Each world must define a character-owned **transition grammar**: its recurring spatial/motion vocabulary for moving between major states. The grammar must materially differ from completed sibling worlds and be included in the world uniqueness audit.

Examples of differentiation dimensions include:

- cut vs continuous morph;
- forward penetration vs lateral travel vs compositional reassembly;
- rigid precision vs elastic overshoot vs velocity-reactive disorder;
- lens/refraction topology;
- typography participation;
- depth-plane crossing order;
- whether the scene folds, peels, refracts, fractures, converges, blooms, snaps, slides, or reorganizes;
- audio transition envelope and silence strategy.

These are examples, not mandatory motifs.

## Implementation guidance

Use the simplest robust mechanism that preserves the approved experience. Depending on the beat, that may be:

- a scrubbed GSAP timeline whose progress is externally controlled;
- a state-linked Motion value/spring;
- R3F values derived from canonical progress plus damped live input;
- Theatre.js sequence progress driven by route state;
- an image/video sequence addressed by normalized progress;
- a small explicit finite-state machine for portal/game ownership.

Avoid brittle `setTimeout` choreography, completion-callback pyramids, duplicated boolean flags, or hidden mutable state when progress/state can model the behavior directly.

## Required transition tests

For every major route transition, test at minimum:

- forward completion;
- reverse completion;
- direction flip around 20–30%;
- direction flip around 45–55%;
- direction flip around 70–80%;
- rapid alternating scroll input;
- stop/idle/resume mid-transition;
- pointer/touch activity while scrubbed;
- eligible button activation at representative mid-transition points;
- duplicate activation/double-click/tap;
- browser back/forward where applicable;
- route exit during a safe intermediate state;
- resize/orientation while active;
- mobile/touch equivalent;
- reduced-motion equivalent;
- game handoff and return.

Capture representative visual evidence, not only DOM assertions.

## Failure conditions

A P1/P2 transition finding is appropriate when any of the following occurs:

- reversing scroll causes a jump, stale frame, broken mask, or wrong depth order;
- a button starts a second conflicting transition;
- rapid input leaves the camera/portal/UI in contradictory ownership states;
- a completed callback fires after the transition was cancelled and corrupts the new state;
- returning from gameplay resumes stale scroll ownership;
- different character routes reuse essentially the same transition choreography with cosmetic substitutions;
- the only way to make a transition reliable is to ignore user input for an unnecessarily long period.
