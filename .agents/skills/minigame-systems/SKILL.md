---
name: minigame-systems
description: "Design and verify compact but substantive web minigames for each character route, covering player verbs, supporting systems, escalation, state machines, scoring/mastery, touch/keyboard input, pause/replay, failure recovery, deterministic debugging, and performance boundaries. Use whenever a character game is specified, implemented, balanced, or tested."
---

# Minigame Systems

Read `docs/MINIGAME_ARCHITECTURE.md` and start from `docs/MINIGAME_SPEC_TEMPLATE.md`.

## Design bar

Each game needs:

- one dominant mechanic
- two supporting systems
- escalation/phase change
- success/fail state
- replay path
- meaningful audiovisual feedback
- mobile and keyboard input strategy

## Engineering rules

1. Separate simulation/game state from presentation when it helps deterministic testing.
2. Keep the shared shell small: lifecycle, pause, result, audio hooks, input abstraction, progression callback.
3. Character-specific mechanics stay character-specific. Read `docs/WORLD_UNIQUENESS_CONTRACT.md`; do not derive five games from one generic mechanic/config shell.
4. Clean up timers, listeners, RAF loops, physics/simulation state, and audio on pause/unmount.
5. Prefer deterministic seeded behavior for tests where randomness would make failures hard to reproduce.
6. Verify real pointer/touch/keyboard behavior, not only programmatic state changes.
7. Keep authoritative simulation/rules outside render-only Three/R3F objects; avoid broad React rerenders for high-frequency game state.
8. Prefer DOM HUD/menu surfaces when text/control density would make in-scene UI harder to read or test.
9. Use screenshot-based playtesting for WebGL/canvas states; DOM assertions alone do not prove visual readability.
10. When GPU/render cost is unclear, profile with browser tooling/SpectorJS or equivalent before simplifying the experience.

## Balance evidence

Record why the game becomes harder or more expressive over 30–90 seconds. A longer timer alone is not escalation.
