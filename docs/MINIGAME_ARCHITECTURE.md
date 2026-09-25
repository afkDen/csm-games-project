# Minigame Architecture

## Complexity target

Each character game should feel like a compact web game, not a decorative interaction.

Minimum design target:

- one dominant mechanic;
- two or more supporting systems;
- escalation or phase change;
- readable score/progress/health/state feedback where appropriate;
- explicit win and fail states;
- restart/replay path;
- keyboard and touch input strategy;
- pause / tab-hidden behavior;
- meaningful audio feedback;
- a character-specific audiovisual payoff.

Comprehensive means **systemic depth**, not unnecessary campaign length.

## Shared lifecycle contract

```text
idle → ready → playing → paused → success|failure → results → replay|exit
```

A shared shell may own lifecycle, accessibility, audio pause, result routing, quality settings, and common input normalization. It must not force shared gameplay mechanics, scoring curves, level structures, or camera behavior.

Read `WORLD_UNIQUENESS_CONTRACT.md`: the five games must express different player fantasies and meaningful verb sets.

## Route visual continuity

The game is the highest-interaction state of the same character world, not a separate visual product. It should inherit the route's still-derived color relationships, pastel tonal family, character motion attitude, graphic/type motifs, and depth/optical language where useful. Simplification for gameplay readability is allowed; aesthetic disconnection is not.

## Simulation / rendering boundary

For games with non-trivial state:

- keep gameplay rules/simulation state outside render-only R3F/Three objects;
- do not use broad React state for every per-frame simulation mutation;
- let the renderer adapt simulation state into scene objects/effects;
- keep DOM HUD/menu surfaces outside WebGL by default when they are text-heavy or interaction-heavy;
- explicitly pause/gate camera or game input when menus/dialogs own pointer/keyboard interaction.

Use a tighter imperative subsystem when high-frequency state would otherwise cause unnecessary React churn.

## Chibi rendering

Prototype at least two plausible strategies before locking the first production pipeline:

1. 2D sprite/cutout character in a 3D world;
2. lightweight stylized 3D/procedural character.

Choose based primarily on character expression, readability, animation needs, gameplay hit/collision needs, visual continuity with the route, and asset rights. Production cost/mobile constraints matter, but use adaptive quality or a different representation before flattening the game fantasy.

img2threejs may be evaluated for an approved stylized procedural 3D reconstruction, but it is not the default simply because a reference image exists.

## Game loop quality

Each game spec must define:

- player verbs;
- objective;
- risk/failure pressure;
- feedback;
- mastery curve;
- 30-second experience;
- 90-second experience;
- mobile input;
- failure recovery;
- final audiovisual payoff.

The game should become more expressive or demanding through actual system change. A longer timer or faster spawn rate alone is weak escalation.

## Playfield / HUD rule

The game must read as a playable scene, not a dashboard around a canvas.

- keep persistent HUD compact;
- protect the center/lower-middle playfield unless the mechanic requires otherwise;
- use transient prompts for onboarding when possible;
- move lore, help, settings, and long control explanations behind pause/drawer surfaces;
- verify HUD/playfield balance from screenshots, not DOM measurements alone.

## Deterministic debugging

Where randomness affects tests or balancing, prefer seeded behavior or debug controls so failures can be reproduced. Do not make the public experience feel deterministic merely for test convenience.

## Playtest loop

For meaningful gameplay changes:

`implement → play/input burst → pause/observe → capture → inspect state + console → adjust`

Use Playwright for repeatable input and state flows when practical, but WebGL/canvas games also require screenshot/visual review. DOM assertions alone cannot validate gameplay readability.

For unexplained GPU/frame cost or rendering defects, use browser performance tooling and SpectorJS or an equivalent frame inspector rather than guessing from source code.

## Scope guard

Favor replayable mastery over long scripted campaigns. Each game should be deep enough to reward a replay without turning the portfolio into five separate full-size games.
