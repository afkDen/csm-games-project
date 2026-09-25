# Decision Log

Use `LOCKED`, `PROVISIONAL`, or `REJECTED`.

## Initial decisions

| Decision | Status | Rationale |
| --- | --- | --- |
| Unofficial portfolio concept, not a brand site | LOCKED | Core project intent. |
| Five character routes: Denji, Makima, Aki, Power, Reze | LOCKED | Matches current exploration scope. |
| Lens is the diegetic route/portal metaphor | LOCKED | Signature interaction and structural concept. |
| Owner supplies campaign/anime stills | LOCKED | Avoid automatic scraping; supports controlled provenance. |
| Raw source art remains outside `public/` | LOCKED | Keeps source/derivative boundary clear. |
| One minigame per character route | LOCKED | Project should feel playable, not decorative. |
| Games target substantive compact loops rather than one-click toys | LOCKED | Owner preference. |
| Audio is a first-class system | LOCKED | Needed for game-like experience. |
| Persistent R3F Canvas across routes | PROVISIONAL | Strong fit, but must be proven in vertical slice. |
| GSAP ScrollTrigger owns macro scroll choreography | PROVISIONAL | Strong fit with Scroll Craft; verify against route architecture. |
| Theatre.js used only for authored cinematic sequences | PROVISIONAL | Useful when keyframing beats code-only iteration. |
| Howler as default sample runtime; raw Web Audio for advanced processing | PROVISIONAL | Keeps basic audio practical while preserving lower-level options. |
| Tone.js only for rhythm/sequenced musical mechanics | PROVISIONAL | Avoid dependency unless a game benefits. |
| 2D/2.5D chibis over full 3D by default | PROVISIONAL | Better production/readability tradeoff, but prototype first. |
| Emil and Impeccable are optional bounded review tools | LOCKED | Preserve identity/ambition. |
| Shared mechanisms must not produce a generic character-world template | LOCKED | Each route must pass `WORLD_UNIQUENESS_CONTRACT.md`. |
| First clear “Approved. Proceed.” after initialization activates production autopilot | LOCKED | Owner wants assets/keys + prompt + one approval, with revision interrupt/resume afterward. |
| Supplied stills are the primary visual authority | LOCKED | Palette logic, composition, lighting, texture, crop, and atmosphere begin from the stills. |
| Global site tone is pastel-forward, colorful, playful, luminous, and premium | LOCKED | Dark/gritty franchise shorthand is not the default mood. |
| Character fidelity is expressed behaviorally | LOCKED | Motion, pacing, composition, interaction, type, audio, and game fantasy should reflect character qualities. |
| Scroll is a continuous authored timeline | LOCKED | Stacked fade/reveal sections are not the target experience. |
| Every route needs a bespoke signature interaction and engineered cinematic peak | LOCKED | Prevents template convergence and weak scrollytelling. |
| Major cinematic routes must not feel flat | LOCKED | Use meaningful 2.5D/3D/optical depth, occlusion, camera crossing, and integrated type where appropriate. |
| Asset discovery remains open throughout production | LOCKED | Re-run gap-driven sourcing/generation/procedural decisions when a scene is missing material. |
| Experience-first performance hierarchy | LOCKED | Optimize implementation and secondary cost before simplifying primary depth/scroll/signature choreography. |
| Character routes own materially different transition grammars | LOCKED | Reversibility is a reliability requirement, not permission to reuse one generic animation topology across all worlds. |
| Major transitions are reversible/retargetable and interruption-safe where interaction allows | LOCKED | Reverse scroll, rapid direction changes, eligible buttons, duplicate activation, and game/route handoffs must not corrupt state. |
| FFmpeg/FFprobe are preferred development-time media-production tools when a concrete media derivative need exists | LOCKED | Supports ambitious scroll sequences/video/audio while keeping the browser runtime independent of FFmpeg. |
