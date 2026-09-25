# Scroll Experience Contract — Scroll Is the Timeline

This contract exists to prevent the project from becoming a sequence of attractive sections with entrance animations. Pair it with `TRANSITION_CONTINUITY_CONTRACT.md` so the same choreography remains reliable under reverse and interruption.

## Core rule

**Scroll is an authored continuous input.** It is not merely page navigation.

During cinematic route phases, scroll should meaningfully drive one or more of:

- camera position / orientation / focal framing;
- still-image depth separation;
- animation or image-sequence playhead;
- masks and reveals;
- object transforms and world-state changes;
- foreground/background scale and perspective;
- typography position, depth, occlusion, or assembly;
- lighting / atmosphere / particle density;
- refraction and lens state;
- sound intensity / filtering / spatial emphasis;
- portal formation and ownership handoff.

A route fails if its dominant grammar is `section enters viewport → fade/translate/scale → next section`.

## Persistent stage

Prefer a persistent visual stage for major cinematic acts. DOM story content may advance while the scene itself evolves continuously rather than being replaced wholesale at every section boundary.

A route should feel like a **world transforming under the visitor's input**, not a slideshow being revealed.

## Experience score

Before implementation, every character route must map its primary cinematic timeline from `0–100%` in `docs/CHARACTER_WORLD_TEMPLATE.md`-based world spec.

For each range, define:

- dramatic purpose;
- visual composition;
- scroll-controlled property/state;
- camera behavior;
- still/depth behavior;
- pointer/touch behavior;
- typography behavior;
- audio behavior;
- entry and exit condition.

The score must include an authored opening, development, interactive hold or variation, engineered peak, resolution, and lens/game handoff.

## No accidental dead scroll

Every substantial scroll range must have a perceivable authored consequence. Long ranges where the user scrolls and nothing changes require an explicit narrative reason.

During review, scrub the complete route slowly forward and backward. Any accidental dead-scroll interval large enough to feel like input is being ignored is a P1/P2 experience issue depending on severity.

Intentional quiet is allowed when the visual stage still has purposeful ambient life or the stillness itself is part of the dramatic score.

## Input model

Do not reason only about normalized progress. Where useful, derive and art-direct:

- progress;
- direction;
- velocity;
- acceleration / deceleration;
- idle / settle state.

Different scene systems may respond with different damping. Scroll position can remain precise while camera, foreground, atmosphere, typography, and secondary FX exhibit different temporal mass.

## Reversibility and interruption

Scrubbed cinematic states should normally remain coherent in reverse. Backward scroll should reconstruct masks, camera positions, image planes, lens states, and typography rather than producing broken one-way states.

The route must also remain coherent when direction changes before a transition finishes or an eligible control is used while motion is active. Define canonical state/property ownership and retarget/cancel behavior under `TRANSITION_CONTINUITY_CONTRACT.md`.

One-way events are allowed only when stateful progression or gameplay truly requires them and recovery behavior is defined.

## Continuous life

Stopping scroll should not make the route feel dead. Where appropriate, retain low-amplitude activity such as:

- atmosphere / particles;
- reflection or refraction drift;
- shader motion;
- secondary hair/cloth/light movement;
- pointer-responsive perspective;
- environmental audio;
- camera settling.

Ambient motion must not fight the user's scrubbed timeline.

## Transition grammar + signature move

Each character route must define a character-owned transition grammar for moving between major states. The grammar must materially differ from completed sibling routes; changing only assets, copy, palette, easing, timing, and keyframes does not make the transition system unique.

Each route also needs at least one bespoke signature interaction or transition that cannot be recreated by swapping assets, copy, palette, and keyframes in another route.

The signature move must arise from character behavior and the still composition. It should be documented in the world spec and verified in the running result.

## Engineered peak

Each route needs one primary cinematic peak. Protect it with enough anticipation and scroll distance to register.

The peak may combine camera, still transformation, typography, sound, particles, geometry, and portal formation, but should have a clear compositional idea rather than maximum simultaneous effects.

## Pointer/touch relationship

Scroll is primary during cinematic acts, but the stage should also acknowledge presence where appropriate through restrained pointer/touch response. Pointer behavior must support the character grammar and never become generic cursor gimmickry.

## Game handoff

Scroll should visibly lead into the lens/game transition. Once gameplay becomes the primary interaction, transfer input ownership explicitly. Do not allow page scrolling to fight active game controls.

## Mobile choreography

Mobile is separately art-directed. Preserve the dramatic score and signature move while adapting:

- crop and framing;
- pinned duration;
- depth travel;
- image sequence resolution/count;
- touch response;
- number of simultaneous layers;
- type placement;
- expensive secondary effects.

Do not replace the route with static stacked cards.

## Verification

At minimum capture and inspect:

- entry;
- early transformation;
- midpoint;
- signature interaction;
- pre-peak anticipation;
- engineered peak;
- portal formation;
- game handoff;
- reverse-scroll reconstruction of representative states;
- direction reversals around representative 25/50/75% transition points;
- eligible button/control activation and duplicate activation while motion is active;
- mobile equivalents.
