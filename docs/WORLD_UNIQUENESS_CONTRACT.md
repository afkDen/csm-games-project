# World Uniqueness Contract

Shared infrastructure must make the project coherent. It must **not** make the five character experiences interchangeable.

Read this with `CREATIVE_DIRECTION_CONTRACT.md`, `SCROLL_EXPERIENCE_CONTRACT.md`, and `SPATIAL_DEPTH_CONTRACT.md`.

## The rule

A character route is not a theme applied to a reusable page template. The shared layer owns mechanisms and lifecycle; each world owns its character expression, composition, dramatic rhythm, scroll/camera language, signature interaction, game fantasy, and audiovisual personality.

The project fails this contract if one world can be converted into another primarily by swapping palette, text, imagery, keyframes, and a game component.

## Allowed shared similarities

These are deliberate connective tissue:

- pastel-forward project family and still-led art-direction method;
- eyewear/lens portal metaphor;
- hub and return relationship;
- global mute, pause, quality, accessibility, and recovery controls;
- portal lifecycle primitives;
- progression/completion state;
- asset preload/disposal conventions;
- game lifecycle and result routing;
- input normalization where it improves reliability;
- project-wide type/spacing tokens that do not dictate composition.

## World-owned axes

Every world spec must define its own answer for these **fifteen** axes:

1. **Character truth** — what recognizable behavioral qualities are being translated from the character?
2. **Emotional objective** — what should the visitor feel here?
3. **Composition grammar** — symmetry/asymmetry, density, negative space, foreground/midground relationships.
4. **Palette / tonal translation** — how the supplied still's real color logic enters the shared pastel project family.
5. **Camera grammar** — forward drive, orbit, lateral rail, held portrait, unstable follow, perspective compression, etc.
6. **Scroll/device grammar** — pinned tableau, continuous one-shot, layered depth crossing, lateral reveal, object transformation, editorial cut, interactive hold, etc.
7. **Transition grammar / continuity** — how major states connect, what motion/spatial vocabulary recurs, how it reverses/retargets, and why this route cannot be mistaken for a sibling transition system.
8. **Spatial / still treatment** — decomposition, occlusion, depth relationships, what remains rigid, how the still becomes inhabitable.
9. **Typography / graphic behavior** — placement, scale, motion, depth, collision, occlusion, rhythm.
10. **Signature interaction** — one bespoke interaction/transition that belongs to this route.
11. **Lens transition staging** — shared portal states may be reused, but their dramatic presentation remains world-owned.
12. **Audio palette** — ambience, transient texture, spatial behavior, silence, music/adaptive strategy.
13. **Minigame fantasy and core verb** — different player fantasy and meaningful verb set.
14. **Payoff** — character-specific resolution before returning to the hub.
15. **Mobile translation** — how the route's dramatic idea changes compositionally for touch/small screens without becoming a generic fallback.

## Differentiation gate

Before implementation of a new world, compare it to every already-built world.

It must materially differ from its nearest sibling on at least **nine of the fifteen** axes, and it must always have a clearly world-owned answer for:

- character truth;
- camera or scroll/device grammar;
- transition grammar / continuity;
- signature interaction;
- minigame fantasy/core verb;
- audio palette;
- payoff.

“Different color,” “different image,” “different copy,” “same transition with different easing/timing,” and “same interaction with new keyframes” do not count as material differentiation. No two routes should share the same major-transition topology merely re-skinned with character assets.

The shared pastel family is a cohesion constraint, not an excuse to make all routes visually identical.

## No repeated skeleton rule

Avoid this architecture:

```text
<CharacterWorld config={characterConfig} />
```

when `characterConfig` primarily supplies palette, imagery, text, scroll keyframes, portal timing, and a game component to one generic renderer.

A registry may select route-owned implementations and shared capabilities:

```text
WorldRegistry
  denji  -> DenjiWorld
  makima -> MakimaWorld
  aki    -> AkiWorld
  power  -> PowerWorld
  reze   -> RezeWorld

Shared mechanisms:
  PortalRuntime
  AudioRuntime
  ProgressionStore
  QualityRuntime
  InputRuntime
  GameLifecycle
```

Generalize lifecycle and reusable low-level mechanisms after evidence. Do not generalize authored scene composition simply because two routes happen to use scroll progress.

## Game uniqueness gate

The five minigames must not be one loop with reskinned enemies/scoring.

Across the set, vary meaningful dimensions such as movement model, timing, target/avoid/control verbs, spatial layout, failure pressure, combo/resource/puzzle systems, viewpoint, session rhythm, and mastery expression.

Shared HUD primitives and lifecycle are fine. Shared mechanics require a concrete reason.

## Adjacent-world contrast

When choosing route order or hub recommendations, avoid presenting two worlds back-to-back that rely on the same dominant cinematic device, pacing, or game rhythm. Contrast is part of the exhibition design.

## Verification evidence

For each completed world, retain:

- still-aesthetic profile;
- character-fidelity hypothesis and resulting behavior;
- 0–100 experience score;
- representative entry / midpoint / signature interaction / pre-peak / peak / portal / exit captures;
- representative mobile states;
- active-game capture;
- nearest-sibling uniqueness comparison;
- any shared abstraction added because of the route;
- asset-gap decisions and provenance for added production assets.

If extracting a shared abstraction causes two worlds to converge visually, spatially, or behaviorally, revert or narrow it.
