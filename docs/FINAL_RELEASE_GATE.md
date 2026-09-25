# Final Release Gate

The project is complete only when the experience, games, assets, creative direction, and technical boundaries have been verified together.

## Creative direction

For every route:

- approved stills visibly drive palette relationships, composition, lighting character, texture, crop, and atmosphere;
- character identity is expressed through behavior/motion/composition/interaction, not only image/color;
- the route belongs to the shared bright, pastel-forward, colorful project family;
- dark/gritty moments are bounded intentional contrast rather than the default site language;
- typography, UI, VFX, supporting assets, and sound support rather than overpower the supplied still;
- representative frames remain intentionally composed.

## Experience completeness

- hub/lens gallery is coherent and provides entry/return for all five worlds;
- Denji, Makima, Aki, Power, and Reze routes are complete or scope reduction has explicit owner approval;
- all five routes pass `WORLD_UNIQUENESS_CONTRACT.md`;
- lens portal works across entry, return, refresh, back/forward, reverse, retargeting, and interruption;
- hub progression reflects completed worlds;
- all-worlds-complete payoff/finale is implemented and verified;
- unofficial concept/interaction-study disclosure is visible and does not imply affiliation.

## Scroll / motion-site experience

For every cinematic route:

- a retained 0–100 experience score matches the implemented route;
- scroll materially controls camera/depth/state/typography/lens/audio over substantial ranges;
- the dominant grammar is not stacked fade/slide/scale reveals;
- the full route has been scrubbed slowly forward and backward;
- no accidental dead-scroll range makes input feel ignored;
- entry, early, midpoint, signature interaction, anticipation, engineered peak, portal, handoff, and exit states were visually inspected;
- scrubbed states reconstruct coherently in reverse unless an intentional one-way state is documented;
- representative direction reversals around 25/50/75% do not jump, corrupt depth, or leave stale transition state;
- eligible controls used mid-transition retarget or act safely without duplicate timelines; duplicate activation is contained;
- stopping input leaves appropriate low-amplitude life without fighting the timeline;
- game input ownership is explicit after handoff.

## Spatial depth / still treatment

For every route:

- major cinematic states use meaningful spatial relationships rather than flat image + text + decorative particles;
- at least one major beat produces a readable change in occlusion, perspective, scale relationship, focus, or spatial ownership;
- source art remains visually stable enough to avoid uncanny face/hand/eyewear deformation;
- motion is more than uniform zoom/parallax garnish;
- typography participates in the composition/depth where appropriate;
- lens behavior functions as a spatial/compositing device rather than only decoration;
- mobile composition is authored rather than merely cropped;
- reduced/quality variants preserve dramatic intent.

## World uniqueness

- every route passes the fifteen-axis `WORLD_UNIQUENESS_CONTRACT.md` gate;
- shared abstractions remain mechanism-level and do not collapse character truth, composition, scroll/camera grammar, signature interaction, game fantasy, audio palette, mobile translation, or payoff;
- retained uniqueness evidence exists for every world;
- major transition grammar is materially different across routes rather than a shared animation template with different assets/easing.

## Adaptive asset discovery / provenance

- each route retains an asset-gap record from orchestration;
- review-triggered asset gaps were reopened when appropriate rather than papered over with generic effects;
- every shipped external/generated production asset appears in the appropriate manifest;
- raw owner source art remains outside public-serving source folders;
- shipping derivatives retain provenance links;
- copyrighted transformations are not misrepresented as newly unencumbered rights;
- required credits/terms are implemented;
- no automatically scraped anime/campaign art was introduced without owner direction;
- sourced assets strengthen a defined beat and do not impose a generic stock identity.

## Media pipeline / FFmpeg derivatives

When shipped media derivatives were created with FFmpeg/FFprobe or equivalent:

- source masters remain preserved;
- transform recipes/commands and provenance are retained;
- browser decode/seek/loop behavior was verified;
- scrub sequences map deterministically in forward and reverse;
- desktop/mobile/quality variants preserve the authored composition;
- FFmpeg remains a development/build-time capability, not a visitor runtime dependency.

## Minigames

For every shipped game:

- dominant mechanic and supporting systems work;
- escalation/phase behavior is observable;
- success, failure, restart, pause/resume, exit, and return work;
- keyboard/pointer/touch strategy is verified where applicable;
- HUD does not unnecessarily obstruct the playfield;
- game state cleans up after exit/route changes;
- muted audio still leaves critical feedback visually readable;
- game art direction inherits its route's character/still/pastel language.

## Audio

- audio unlock follows browser gesture requirements;
- immediate global mute works everywhere;
- world/game loops stop or crossfade correctly;
- pause/visibility behavior is correct;
- overlapping SFX do not create obvious clipping/volume instability;
- synthesized/processed audio has measurable signal/level/timing evidence where practical;
- route/game audio ownership does not leak after exit.

## Browser / recovery

Verify representative large desktop, laptop-height, tablet-ish, 390 px mobile, and 320 px when risk exists.

Check:

- deep links/direct route loads;
- browser back/forward;
- resize/orientation changes;
- route interruption;
- no-WebGL/renderer-failure path;
- reduced-motion and adaptive-quality modes;
- audio unavailable/muted behavior;
- focus return and keyboard escape semantics;
- no covered console/runtime/accessibility-class failures in tested scope.

## Experience-first performance

- measure frame pacing during the heaviest cinematic and game states;
- review transfer sizes, texture/geometry memory pressure, route preload behavior, and inactive-world cost;
- use browser/GPU tooling when cost is unclear;
- run Lighthouse/MotionScore or equivalents when available as diagnostics;
- primary still/depth/scroll/signature systems were not removed merely to raise synthetic scores;
- when degradation was necessary, secondary effects were reduced first per `PERFORMANCE_AND_QUALITY.md`;
- accepted tradeoffs are documented honestly;
- no sustained severe input-latency/crash/memory issue makes the experience unusable on intended tiers.

## Secrets / security

- source/public/build outputs contain no configured private credential values;
- `.env.local` is untracked;
- no public runtime env variable exposes build/tool credentials;
- untrusted URLs/raw HTML/storage/network boundaries added during production receive focused review.

## Tool ledger honesty

- `USED` means a real invocation/result affected the work;
- installed/detected tools are not retroactively marked used;
- blocked tools have real blockers;
- optional review tools remain bounded by their policy files.

## Final commands

Run the repository audit command plus application build/type/lint/test/browser gates that exist at that time.

Bootstrap-level audit command:

```bash
npm run bootstrap:audit
```

A passing bootstrap audit is necessary but not sufficient for production completion.

## Multi-agent evidence gate

Before final completion:

- every production milestone has an approved orchestration audit and passing implementation review;
- required capability usage is reconciled against evidence, not self-report;
- no unresolved P0/P1 findings remain;
- deferred P2/P3 items are explicitly justified or owner accepted;
- all five worlds retain still profiles, scroll scores, uniqueness comparisons, asset-gap decisions, and representative rendered evidence;
- `npm run agents:validate` passes.
