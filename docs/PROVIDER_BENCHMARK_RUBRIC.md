# Provider / Model Benchmark Rubric

This rubric exists to compare **runs of the same bootstrap** consistently. It is not a general intelligence benchmark and should not be used to make broad claims outside the tested project/configuration.

## Evidence rule

Rate only what can be supported by the repository, run artifacts, rendered captures, browser tests, implementation evidence, and reviewer findings. A polished explanation is not evidence that the experience works.

## Rating scale

Use the same 0–4 scale for every category:

- **0 — Missing / broken:** requirement absent or unusable.
- **1 — Weak:** present in name but materially below the contract.
- **2 — Acceptable:** functional baseline, noticeable limitations.
- **3 — Strong:** clearly fulfills the intended experience with only minor issues.
- **4 — Exceptional:** unusually coherent, authored, robust execution within the same brief.

Keep written evidence beside each score. Do not rely on the aggregate number alone.

## Core categories

### A. Still-led visual fidelity

Judge whether supplied stills genuinely determine palette, framing, contrast, lighting character, texture, crop logic, and atmosphere rather than serving as decoration.

### B. Pastel / colorful reinterpretation

Judge whether the global tone remains luminous, playful, color-rich, premium, and inviting without erasing character-specific tension.

### C. Character authenticity

Judge whether motion, pacing, interaction, typography, sound, scene psychology, and game behavior feel specific to the character rather than only changing imagery/color.

### D. Spatial depth / anti-flatness

Judge meaningful foreground/background relationships, occlusion, camera travel, 2.5D/3D/optical structure, atmosphere, lens staging, and depth-aware composition.

### E. Scrollcraft / motion-site choreography

Judge continuous scroll-driven transformation, pinned/scrubbed staging, authored pacing, dead-scroll avoidance, engineered peak, reverse coherence, and idle life.

### F. Transition uniqueness

Judge whether each character route owns a materially distinct transition topology and signature interaction rather than a shared zoom/mask/crossfade skeleton.

### G. Transition continuity / interruption safety

Judge reverse scroll, rapid direction changes, mid-transition controls, duplicate activation, history/navigation, resize, route/game handoff, and absence of competing animation ownership.

### H. Asset/resource intelligence

Judge whether the run identifies real asset gaps and sources/derives/generates/procedurally creates supporting material with provenance and aesthetic discipline instead of settling for generic placeholders.

### I. Media pipeline quality

When relevant, judge whether FFmpeg/FFprobe or equivalent media preparation is used reproducibly for sequences/video/audio derivatives without becoming a runtime dependency.

### J. Game integration

Judge whether the minigame is substantive, character-specific, visually continuous with the route, readable, controllable, and integrated into progression rather than feeling bolted on.

### K. Audio design / lifecycle

Judge character/world-specific sound, interaction feedback, ambience, transition treatment, unlock behavior, mobile/browser lifecycle safety, and cleanup.

### L. Experience-first performance engineering

Judge whether the implementation protects primary visual/interaction ideas while intelligently reducing secondary cost, with adaptive quality where appropriate, rather than flattening the experience prematurely.

### M. Engineering / maintainability

Judge ownership boundaries, state architecture, cleanup, route isolation, tests, reusable infrastructure without over-generalizing authored worlds, and understandable implementation choices.

### N. Accessibility / alternate modes

Judge reduced motion, keyboard/touch access where relevant, readable interface, fallbacks, mobile art direction, and graceful degradation without turning the main experience into a generic page.

### O. Agent-loop discipline

Judge plan quality, capability routing, auditor independence, implementation evidence, reviewer independence, repair quality, artifact completeness, and honesty about blocked capabilities.

### P. Process / reasoning / experiment fidelity

Judge whether process tiers were routed proportionally, high-risk work was not down-tiered, fixed-high roles actually used the intended high reasoning configuration, adaptive implementation was classified/resolved correctly, forced-high triggers were honored, the exact provider-side effort/budget/model-variant control was recorded, canonical project state remained single-writer, and a clean benchmark retained a valid `RUN_LOCK.json`. A provider with no explicit reasoning control can still score strongly if that limitation is recorded honestly and the run is otherwise reproducible.

## Hard-gate findings

Regardless of average score, record as hard failures when applicable:

- first-slice implementation begins without required approval;
- auditor/reviewer self-approves in the same uninterrupted context;
- major routes use effectively identical transition/experience skeletons;
- the result defaults to dark/gritty styling against the locked pastel direction;
- primary cinematic routes are mostly flat image + text + reveal animation;
- reverse/interrupt interaction corrupts state or leaves stuck controls;
- rights/provenance rules are ignored for production assets;
- secrets are exposed;
- visual review claims pass without rendered evidence when that capability was available;
- release gate claims completion while required evidence is missing;
- a run presented as a clean provider benchmark has a missing or invalid experiment lock;
- project state is split across competing mutable state files or silently mutated by non-controller roles.

## Comparison output

For each run preserve:

1. category scores with short evidence notes;
2. hard-gate findings;
3. plan-audit and implementation-review round counts;
4. capability/tool blockers;
5. experiment lock + bootstrap/source-assets/owner-instruction/external-skill fingerprints;
6. exact provider/model mapping and exact reasoning control by role;
7. human qualitative notes on the strongest and weakest moments;
8. final release-gate state.

Use the rubric to understand **where** one run is stronger or weaker, not merely to produce a leaderboard number.
