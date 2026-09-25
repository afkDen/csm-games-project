# Experience-First Performance and Quality Strategy

## Principle

**Experience first; performance is a usability floor, not the primary creative objective.**

Design the strongest still-led, spatial, scroll-reactive experience first. Then optimize the implementation without flattening the concept.

The project is allowed to be visually ambitious when the cost materially improves depth, character expression, motion, interaction, or the lens transition.

## What performance does not authorize

Do not remove or neutralize the following merely to improve synthetic scores or minimize bundle size:

- the persistent visual stage;
- primary still decomposition;
- character-specific scroll grammar;
- signature interaction;
- engineered cinematic peak;
- lens/portal handoff;
- meaningful foreground/background depth;
- route-specific typography choreography;
- substantive game feedback.

If these systems are expensive, diagnose and optimize their implementation before deleting their creative function.

When large media is the bottleneck, prefer intentional build-time derivatives through `MEDIA_PIPELINE_FFMPEG.md` before deleting the authored beat.

## Optimization order

When performance is insufficient, prefer corrections in this order:

1. resize and re-encode assets to actual display need;
2. improve texture/video/audio compression and delivery;
3. lazy-load worlds and noncritical assets;
4. preload only the upcoming transition / route-critical material;
5. stop invisible, inactive, or off-route work;
6. reuse geometry, materials, textures, buffers, and render targets where it does not reduce authorship;
7. reduce expensive secondary particles / shadows / reflections / post effects;
8. lower secondary render-target / shader / environment resolution;
9. reduce auxiliary depth layers that do not carry composition;
10. substitute precomposed or baked support effects where interaction is unnecessary;
11. only then simplify a primary effect, preserving its dramatic role by another technique.

## Adaptive quality, not universal simplicity

Quality tiers may vary implementation detail while preserving the same dramatic intent.

### High-capability

- full authored depth composition;
- richer secondary atmosphere;
- higher effect/reflection quality;
- denser supporting particles;
- higher-resolution scrub media where valuable.

### Moderate

- same composition and scroll score;
- lower secondary particle density;
- cheaper reflections/post passes;
- reduced auxiliary texture/effect resolution;
- fewer nonessential concurrent systems.

### Constrained / mobile

- same character truth, major composition, signature interaction, portal payoff, and story beats;
- separately authored crop and camera path;
- fewer simultaneous support layers;
- precomposed alternatives for expensive noninteractive effects;
- lighter media and shader detail.

Mobile is an alternate composition, not a static downgrade.

## Performance floor

Experience-first does not mean broken interaction. Investigate and fix:

- sustained severe frame-time spikes;
- scroll/input lag that breaks control;
- crashes or WebGL loss with no recovery;
- runaway memory growth;
- long avoidable main-thread blocking;
- unnecessary background rendering/audio/simulation;
- thermal/battery abuse from work that does not contribute to the visible experience.

## Frame pacing

For active gameplay and high-motion scenes, inspect frame-time distributions rather than average FPS alone.

Reference budgets:

- 60 FPS ≈ 16.7 ms/frame;
- 30 FPS ≈ 33.3 ms/frame.

These are diagnostics, not automatic design targets for every device. A visually richer route can be acceptable when interaction remains responsive and the tradeoff is intentional.

## Route loading

Do not preload all five worlds at startup. Preload what is necessary to make the next lens transition convincing. Asset discovery and the experience score should inform preload boundaries.

## React / simulation cost

Do not route high-frequency camera, scroll, particle, or game simulation through broad React state updates merely because React Three Fiber is used. Keep tight simulation local/imperative where appropriate and expose only state the UI needs.

## GPU diagnosis

When a rich scene is expensive, capture representative browser/GPU evidence before simplifying. Inspect draw calls, render targets, texture pressure, overdraw, shader passes, duplicate work, and inactive systems. Use SpectorJS or equivalent when helpful.

## Benchmarks

Lighthouse, MotionScore, traces, transfer size, memory, and frame pacing are diagnostic evidence. A score by itself does not justify flattening the experience.

## Review rule

A fast route may still fail if it is flat, static, generic, or under-authored. A heavier route may pass when the additional cost produces a clear experiential benefit and the route remains usable on the intended tier.
