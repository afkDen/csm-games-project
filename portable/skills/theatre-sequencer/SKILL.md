---
name: theatre-sequencer
description: "Use Theatre.js for hand-authored cinematic sequences in Three.js/web scenes when visual keyframing, a dope sheet, graph editing, or precise shot iteration is superior to scroll/runtime code. Use for opening shots, portal reveals, boss/result moments, or finale sequences—not as the default owner of interactive gameplay motion."
---

# Theatre Sequencer

## When to use

Use only for moments that benefit from art-directable keyframes and shot iteration.

Good candidates:

- hub opening reveal
- character route intro
- exact camera/light choreography before a portal
- game success/boss/result shot
- final all-worlds-complete sequence

Avoid using Theatre.js for continuous gameplay simulation, pointer tracking, ordinary hover states, or every scroll transform.

## Workflow

1. Define the shot purpose and duration/progress relationship.
2. List controlled properties (camera, lights, groups, shader uniforms).
3. Keep gameplay/runtime ownership separate.
4. Block the sequence quickly.
5. Refine in the sequence/graph editor.
6. Export/persist the authored state as project source.
7. Verify that route interruption, pause, resize, and reduced-motion strategy remain coherent.

## Integration rule

If a Theatre sequence is driven by scroll progress, establish one explicit bridge between scroll progress and the Theatre sequence. Do not allow both systems to independently animate the same properties.
