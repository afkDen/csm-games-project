# Minigame Spec Template

## Character / route

## Fantasy

What should the player feel they are doing, and how does that fantasy express the character rather than a generic arcade verb?

## Visual inheritance

How does the game inherit the route's still-derived palette logic, pastel tonal translation, character behavior, typography/graphic language, depth, and signature motifs without becoming a disconnected game skin?

## Core verb

One sentence.

## Supporting systems

1.
2.
3. (optional)

## Objective

## Failure pressure

## Camera / spatial model

What viewpoint and spatial rules make this game read differently from the others?

## Input

### Desktop

### Touch

### Keyboard/accessibility notes

## State machine

`idle → ready → playing → paused → success|failure → results → replay|exit`

## Simulation ownership

What owns authoritative game state? What is presentation-only? Which values update at high frequency without broad React rerenders?

## Escalation

Describe the 30-second and 90-second versions of the game. Identify an actual system/phase change, not only higher spawn rate or longer duration.

## Scoring / mastery

## Chibi animation needs

## World/FX needs

## HUD / playfield budget

What must stay persistently visible? What is transient or behind pause/help? How is the playable center protected?

## Audio needs

## Experience-first quality / performance risks

Which visual/game systems are protected because they carry the fantasy? Which secondary effects may adapt first on constrained devices?

## Deterministic debug hooks

Seed/debug controls needed to reproduce failures or balance states.

## Uniqueness against existing games

State why this game is not a reskin of any existing character game. Compare core verb, timing model, movement/spatial model, failure pressure, mastery system, and payoff.

## Test cases

- starts from route handoff
- primary mechanic works
- support system A works
- support system B works
- escalation/phase change occurs
- success
- failure
- replay
- pause/resume
- hidden-tab resume
- route exit cleanup
- mobile input
- keyboard/focus behavior
- muted audio still communicates critical feedback
- representative active-game screenshot is visually readable
- game feels like a continuation of the route art direction rather than a separate product
