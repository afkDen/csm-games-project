# Verification Plan

Verification must prove the **running experience**, not merely DOM structure or implementation intent.

## Cinematic route evidence

For every character route, capture/inspect:

- entry composition;
- early transformation;
- midpoint;
- signature interaction;
- pre-peak anticipation;
- engineered peak;
- lens/portal formation;
- game handoff;
- result/return;
- representative backward-scroll reconstruction;
- mobile equivalents.

## Full scroll pass

Use browser/Playwright/manual tooling to scrub the complete route slowly forward and backward. Record:

- ranges where scroll materially changes scene state;
- accidental dead-scroll intervals;
- pinned-state jumps;
- one-way state bugs;
- timeline/property ownership conflicts;
- velocity/direction behavior when implemented;
- idle/settle behavior after input stops.

A screenshot-only review does not validate scrollcraft feel.

## Creative direction evidence

Compare representative rendered states against the route's still-aesthetic profile and character spec:

- still-derived palette/value/light/composition;
- pastel/colorful project-family coherence;
- character-authentic behavioral expression;
- dark treatment limited to intentional contrast;
- type/VFX/UI/support assets subordinate to the composition.

## Spatial-depth evidence

Inspect occlusion, relative plane movement, foreground structure, camera crossing, lens compositing, and depth-aware type. A uniform zoom with particles does not pass.

## Games

Play the real loop. Verify controls, supporting systems, escalation, success/failure, restart, pause/exit, cleanup, feedback, and touch strategy.

## Audio

Verify browser unlock, mute, route/game ownership, pause/visibility, crossfades, overlapping SFX, and measurable signal/timing evidence where practical.

## Responsive / recovery

Test representative large desktop, laptop-height, tablet, 390 px mobile, and 320 px when needed. Check deep links, history, resize/orientation, route interruption, renderer failure, reduced motion, quality tiers, muted/unavailable audio, and focus/escape semantics.

## Performance

Measure heaviest cinematic/game states and diagnose before simplifying. Review frame pacing, transfer/media cost, GPU/render passes where useful, memory, inactive-world cost, and preload behavior. Follow `PERFORMANCE_AND_QUALITY.md`: protect primary choreography and reduce secondary cost first.

## Assets / rights / secrets

Reconcile shipped assets with manifests, provenance, license/terms, source/derivative boundaries, required credits, and secret scanning.

## Capability evidence

Reconcile every `CAPABILITY_ROUTING.md` row with actual invocation/output and resulting change. Mentioning or installing a capability does not count as use.


## Transition continuity stress matrix

For every major character/portal transition, test:

- normal forward and reverse completion;
- direction flips near 25%, 50%, and 75%;
- rapid alternating wheel/touchpad/touch input;
- stop/idle/resume during motion;
- eligible button/control input while active;
- double-click/double-tap/duplicate activation;
- browser back/forward at supported states;
- resize/orientation/visibility interruption;
- game handoff and return;
- mobile and reduced-motion equivalents.

Inspect rendered state for jumps, stale callbacks, duplicate timelines, property-owner fights, orphaned audio, incorrect depth order, stuck input locks, or contradictory portal/game ownership.

## Media derivative verification

When FFmpeg/FFprobe or equivalent was used, verify transform provenance, browser decode, key-frame fidelity, reverse scrub/addressing, mobile variants, and that source masters were not modified in place.
