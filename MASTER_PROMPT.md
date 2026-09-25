# Master Prompt — Chainsaw Lens Experience

You are building an **unofficial, non-brand-commissioned portfolio interaction study** inspired by the visual idea of characters holding eyewear frames and being seen through the lenses.

## Product intent

Create a premium, spatial, colorful, game-like web exhibition where each pair of glasses is a portal into a character-specific world.

The experience should feel closer to an authored motion-design / scrollcraft site than a conventional page with animated sections.

Core grammar:

`pastel lens hub → character contact → still-led spatial composition → continuous scroll transformation → character signature interaction → engineered cinematic peak → lens portal → chibi minigame → result/unlock → return through lens → hub progression`

Target worlds:

- Denji / Chainsaw Man
- Makima
- Aki
- Power
- Reze

Shared infrastructure creates cohesion. It must **not** turn the routes into reskinned versions of one page.

## Locked creative hierarchy

Read and enforce these contracts before planning or implementation:

1. `docs/CREATIVE_DIRECTION_CONTRACT.md` — still-led, pastel/colorful, character-authentic direction.
2. `docs/CHARACTER_FIDELITY_MATRIX.md` — behavioral hypotheses for each character.
3. `docs/SCROLL_EXPERIENCE_CONTRACT.md` — scroll is the timeline, not section navigation.
4. `docs/TRANSITION_CONTINUITY_CONTRACT.md` — major motion must be reversible/retargetable and safe under interruption.
5. `docs/SPATIAL_DEPTH_CONTRACT.md` — major cinematic states must not default to flat image + text.
6. `docs/WORLD_UNIQUENESS_CONTRACT.md` — each route is separately authored, including its transition grammar.
7. `docs/PERFORMANCE_AND_QUALITY.md` — experience first; optimize without flattening.
8. `docs/ASSET_SOURCING.md` — asset discovery is an adaptive gap-driven loop.
9. `docs/MEDIA_PIPELINE_FFMPEG.md` — FFmpeg/FFprobe are preferred build-time media tools when a real media transformation need exists.

## Experience requirements

1. **Lens as signature interaction.** It may mask another scene, refract/displace content, become the viewport, transfer world ownership, and act as the diegetic router.
2. **Stills are the visual authority.** Extract palette, contrast, composition, texture, lighting, crop, and atmosphere from approved stills before building the route.
3. **Pastel/colorful project tone.** Keep the overall site luminous, playful, color-rich, airy, polished, and premium. Dark/gritty treatment may be used for contrast but is not the default design system.
4. **Character-authentic behavior.** Character identity should be recognizable through motion, pacing, composition, interaction, typography, audio, and game behavior — not only imagery or color.
5. **Scroll is a continuous creative input.** Major cinematic acts use pinned/scrubbed/transformed staging, camera/depth changes, character-owned transition grammar, signature interactions, velocity/direction response where useful, and coherent reverse/retarget behavior. Repeated fade/slide reveals do not satisfy this requirement.
6. **The experience must not feel flat.** Use meaningful 2.5D/3D/optical depth, occlusion, camera travel, layered typography, atmosphere, foreground structure, and lens composition where the still supports it.
7. **Transitions are deterministic and interruption-safe.** Reverse scroll, fast direction changes, eligible mid-transition controls, duplicate activation, history/navigation, resize, and game handoffs must not create competing animation owners or stale state. Each character owns materially different transition choreography.
8. **Still art must feel temporally alive.** Use meaningful decomposition and authored motion without mangling illustration anatomy.
9. **Scenes retain life at rest.** Where appropriate, ambience, reflection, low-amplitude world motion, pointer response, or camera settling continues after scroll stops.
10. **Every route has a signature move and engineered peak.** These are character-owned and cannot be recreated merely by swapping assets/keyframes.
11. **Minigames are substantive compact systems.** Each needs a dominant mechanic, supporting systems, escalation, success/fail, replay, readable feedback, touch/keyboard strategy, and distinct player fantasy.
12. **Audio is first-class.** Ambience, SFX, spatial cues, game feedback, route crossfades, mute, browser unlock, pause/visibility lifecycle, and measurable verification are part of the experience.
13. **Asset discovery stays open.** After defining a beat, identify missing textures, models, atmosphere, media, audio, masks, VFX sources, or supporting art; source/generate/derive/procedurally create what strengthens the scene and record provenance.
14. **Source art stays private/raw until intentionally derived.** `assets/source/` is not public. Shipping derivatives live under `public/assets/derived/` and retain provenance.
15. **No fake commerce or affiliation.** No fake cart/checkout/availability/brand CTA. Clearly label the work as an unofficial concept/interaction study.

## Preferred technical direction

Prototype before locking:

- Next.js + TypeScript
- React Three Fiber + Drei over a persistent Canvas when it proves the strongest route continuity
- Three.js for materials/shaders/world objects
- GSAP + ScrollTrigger for macro scroll timelines and scrubbed acts
- Motion for DOM/HUD/game-feel motion where useful
- Theatre.js for authored cinematic sequences when visual keyframing is superior
- scroll-scrubbed image/video sequences when they outperform realtime reconstruction for a specific beat
- FFmpeg/FFprobe as preferred development-time preparation tools when a beat needs media inspection, frame extraction, browser derivatives, or audio preparation; never as a visitor runtime dependency
- Howler.js for practical samples/ambience; Web Audio API for custom processing/spatial/analysis; Tone.js only for genuine sequencing/rhythm needs
- Zustand only if shared progression/state truly benefits from it
- Playwright/browser evidence for real interaction verification

Do not lock a library solely because it appears here.

## Process-aware multi-agent method

Route every task through `docs/PROCESS_TIER_POLICY.md`. Trivial work is intentionally lightweight; normal work gets implementation + independent review; major/architectural work uses the full `docs/AGENT_LOOP_PROTOCOL.md` sequence:

1. `experience-orchestrator` — high-reasoning plan, still profile, character fidelity hypothesis, experience score, asset-gap analysis, capability census/routing, architecture, acceptance criteria.
2. `orchestration-auditor` — independent high-reasoning critique that actively uses applicable creative/motion/depth/asset/game/audio/architecture skills and rejects flat, generic, dark-by-default, section-based, or weakly character-authored plans.
3. `production-implementer` — executes the approved packet without silently reducing creative ambition.
4. `implementation-reviewer` — independently reviews the actual running result using browser/test/rendered evidence, including full forward/back scroll, intermediate states, character fidelity, pastel/still alignment, depth, asset usage, game/audio behavior, and capability reconciliation.
5. `lens-autopilot` — milestone closeout/state continuity/next milestone.

Neither planning nor implementation advances merely because an agent says it is done.

## Capability routing requirement

For normal/major/architectural implementation, perform a capability census proportional to the scope across installed skills, configured MCP servers, available APIs, built-in research/browser capabilities, scripts, and existing project systems.

Every materially plausible capability is classified as `REQUIRED`, `CONDITIONAL`, `DEFERRED`, `NOT APPLICABLE`, or `BLOCKED` with a task-specific reason. Relevant capabilities may not be silently ignored; irrelevant capabilities may not be invoked for checklist coverage.

Usage claims require material evidence.

## First vertical slice

Do not build all five worlds first. The first slice must prove:

- persistent visual stage / scene shell;
- one complete character route;
- supplied-still aesthetic profile and pastel integration;
- meaningful still-to-cinematic spatial decomposition;
- a scored continuous scroll timeline with no accidental dead-scroll ranges;
- distinctive camera/depth choreography and coherent reverse/retarget behavior;
- a character-owned transition grammar materially distinct from sibling routes;
- interruption-safe behavior under representative direction flips and eligible mid-transition controls;
- one character-specific signature interaction;
- one engineered cinematic peak;
- adaptive asset-gap discovery and at least one justified supporting-asset/procedural decision when a real gap exists;
- lens portal state transition;
- chibi representation pipeline;
- one substantive minigame;
- audio unlock/mute/ambience/feedback;
- route return and progression;
- authored desktop/mobile strategy;
- reduced-motion/quality strategy that preserves the primary dramatic idea.

Initialization ends only after the first-slice orchestration packet passes independent orchestration audit. Then present that audited plan to the owner.

## Approval and production autonomy

When the owner clearly says **“Approved. Proceed.”** or equivalent full approval, activate `PRODUCTION_AUTOPILOT.md` and continue through production without routine owner gates.

Owner revisions are temporary interrupts: checkpoint → orchestrate/audit → implement/review → resume.

Stop only for explicit owner hold, genuine owner-only blocker, consequential unresolved rights/creative fork, or final verified completion.

## Asset rules

- Run an asset-gap pass after the still profile and scroll score exist.
- Use `asset-scout` for real production gaps and reopen it when review finds missing depth/atmosphere/material/audio.
- Prefer the strongest combination of approved existing, derived, licensed external, generated, reconstructed, and procedural assets.
- Favor clear provenance and editability.
- Reject assets that compete with the supplied stills or make the project look like a generic 3D/game template.
- Never treat publicly accessible anime/campaign art as automatically reusable production material.

## Review policy

- Scroll Craft / motion-site principles and project scroll/depth/still skills are core experience tools.
- Emil Design Engineering remains bounded optional motion-quality review under `docs/EMIL_POLICY.md`.
- Impeccable remains bounded mature-identity critique under `docs/IMPECCABLE_POLICY.md`.
- Performance/accessibility/security audits harden the experience; they do not automatically authorize removing intentional spatial/game ambition.

## Completion standard

The project is complete only when `docs/FINAL_RELEASE_GATE.md` passes; all five worlds are character-authentic, still-led, visibly part of the pastel project family, spatially authored, dynamically scroll-driven, and demonstrably distinct; each minigame and route lifecycle is verified; capability/asset usage claims are truthful; source/provenance/secrets boundaries are intact; and remaining limitations are explicitly documented.
