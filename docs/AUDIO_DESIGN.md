# Audio Design

Audio is a first-class experience system.

## Core buses

Suggested logical buses:

- `master`
- `ambience`
- `music`
- `ui`
- `worldSfx`
- `gameSfx`
- `voice` only if explicitly introduced later

## Runtime policy

- Audio must begin only after a valid user gesture when required by the browser.
- A global mute control must be immediately reachable.
- Route/world transitions should crossfade or intentionally cut; never leave orphaned loops.
- Pausing a game should pause game-timed audio while allowing intentionally persistent hub/ambient behavior only if designed.
- Visibility changes and route teardown must stop timers/loops cleanly.

## Tool split

Recommended default:

- Howler.js for sample playback, sprites, looping, practical game SFX and ambience
- Web Audio API for custom filters, analyzers, panning/spatial routing, reactive FX, or processing not cleanly expressed in the convenience layer
- Tone.js only when a route/minigame needs sequenced music, synchronized transport, synthesis, or rhythm mechanics

## Spatial design

Use spatial cues purposefully:

- lens approach / pass-through
- off-screen hazards
- collectible direction
- world ambience anchored to space
- camera/listener movement in selected scenes

Avoid turning every sound into positional audio.

## Asset policy

Raw audio source belongs in `assets/source/audio/`. Production derivatives belong in `public/assets/derived/audio/` and must be recorded in `AUDIO_MANIFEST.json`.

## Audio sourcing boundary

Prefer original/procedural sound design, owner-supplied licensed audio, or clearly permissive game-audio sources. Kenney audio packs may be evaluated through `asset-scout` when they fit; do not force stock SFX into identity-critical moments.

Do not use ripped anime OST, dialogue, or show audio merely because the visual source is Chainsaw Man. Any copyrighted audio source requires its own provenance/permission analysis separate from image assets.

Tone.js/Web Audio synthesis is encouraged when it creates character-specific feedback without introducing another external asset/rightsholder dependency.

## Verification

Use the project-local `audio-verification` skill after material audio changes. Audio graph correctness is not established by compilation alone. Where practical, render or instrument deterministic samples, inspect level/envelope/timing evidence, and verify unlock/mute/pause/cleanup in a real browser. Do not claim subjective sound quality without human listening.
