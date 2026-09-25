# Experience Architecture

## Preferred shell

Prototype a single persistent WebGL Canvas that survives route changes while DOM content and world scene graphs change around it.

Conceptual ownership:

```text
ExperienceShell
├─ Persistent Canvas
│  ├─ SceneRouter
│  ├─ HubScene
│  ├─ ActiveCharacterWorld
│  ├─ PortalLayer
│  └─ SharedPostFX / quality controller
├─ DOM Story Layer / depth-aware typography
├─ HUD / accessibility controls
└─ AudioRuntime
```

This is a hypothesis, not a mandate. If a vertical-slice prototype demonstrates that a different renderer lifecycle is measurably simpler and equally seamless, record the decision in `DECISIONS.md`.

## Route model

Suggested URL model:

- `/` — hub/gallery
- `/denji`
- `/makima`
- `/aki`
- `/power`
- `/reze`

The user should perceive a physical lens transition even if the URL changes underneath. During cinematic acts, the active route should behave as a persistent transforming stage governed by `SCROLL_EXPERIENCE_CONTRACT.md`, not a stack of disposable full-screen sections.

## Portal lifecycle

1. selected frame gains focus
2. lens surface becomes an active compositing boundary
3. destination scene becomes visible inside the lens
4. camera/frame approaches until lens occupies the viewport
5. route/world ownership swaps while occluded by the lens
6. camera exits into destination world
7. input/scroll ownership transfers to the world

Reverse this logic for the return path when possible rather than fading out.

## Shared vs world-specific

Read `WORLD_UNIQUENESS_CONTRACT.md` before adding a shared world/page abstraction. Shared code should remove lifecycle duplication, not authored differences.

Shared:

- renderer/canvas lifecycle
- quality tiers
- input abstraction
- pause/visibility handling
- audio buses
- portal state machine
- game lifecycle contract
- completion/unlock persistence

World-specific:

- still-aesthetic interpretation / pastel translation
- composition
- camera language
- scroll score
- signature interaction / engineered peak
- spatial depth plan
- shaders when identity-specific
- minigame mechanics
- sound palette
- typography treatment
- dramatic transition staging around the shared portal contract
- route scene graph / DOM story structure
- world-specific game simulation and balancing
