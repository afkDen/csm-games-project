---
name: motion-crafting-runtime
description: "Implement responsive runtime motion for the lens-portal portfolio: scroll choreography, camera movement, route handoffs, gesture response, shader/material animation, HUD feedback, and game-feel transitions. Use after the scroll experience score and character motion grammar are approved."
---

# Motion Crafting Runtime

## Ownership

This skill implements runtime motion. `scroll-experience-director` owns the experience grammar; `creative-direction-guardian` owns the still/pastel/character art-direction hierarchy.

Read `docs/SCROLL_EXPERIENCE_CONTRACT.md` and `docs/TRANSITION_CONTINUITY_CONTRACT.md` before implementing macro motion.

## Preferred split

- GSAP/ScrollTrigger: macro scroll timelines, pinned/scrubbed acts, scene progress, transition callbacks.
- Motion: DOM/HUD gestures, springs, layout transitions, lightweight state-linked motion.
- Three/R3F frame loop: continuous world simulation and damped responses that should not be encoded as scroll tweens.
- Theatre.js: authored keyframed cinematic shots when visual sequencing is superior.
- scrubbed video/image sequences: when a pre-rendered beat gives better visual quality and does not need realtime geometry.

## Rules

1. Assign one owner to every animated property/state.
2. Separate scroll progress from continuous simulation/idle time.
3. Derive direction/velocity/settle state when the route score calls for it.
4. Use frame-rate-independent damping for interactive responses.
5. Keep reverse scrolling coherent for scrubbed states.
6. Make active transitions retargetable/cancellable where the interaction contract allows; stale completion callbacks must not mutate newer state.
7. Do not let multiple libraries fight over the same transform/property.
8. Preserve per-character motion differences, transition grammar, and signature interaction.
9. Verify entry, intermediate, peak, portal, reverse, 25/50/75% direction flips, eligible mid-transition controls, duplicate activation, resize, and mobile states.
10. Pause/throttle inactive worlds/games when safe without killing active-stage ambience.
11. Do not replace the approved scroll grammar with simpler reveal animations because they are easier to implement.

## Lens portal

Treat the portal as a state machine: focus → approach → lens/compositing ownership → occlusion/fullscreen → world swap → reveal → input handoff. Its staging and transition grammar remain route-owned even when the lifecycle is shared. Every ownership transfer needs a defined reverse/cancel/retarget policy.
