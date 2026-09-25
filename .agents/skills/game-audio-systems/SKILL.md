---
name: game-audio-systems
description: "Design and implement the project's web audio system for cinematic worlds and minigames: audio unlock, buses, ambience, SFX, spatial cues, adaptive layers, pause/visibility behavior, Web Audio processing, and optional Tone.js sequencing. Use whenever interaction needs sound, audio-reactive visuals, rhythm timing, spatial feedback, or route/game audio lifecycle work."
---

# Game Audio Systems

Read `docs/AUDIO_DESIGN.md` and update `AUDIO_MANIFEST.json` for shipped assets.

## Default tool split

- Howler.js: samples, sprites, loops, practical SFX/ambience.
- Web Audio API: custom graph/effects, analyzers, panning/spatial behavior, processing.
- Tone.js: only for real musical sequencing, adaptive transport, synthesis, or rhythm mechanics.

## Required behavior

1. Unlock audio from a valid user gesture.
2. Provide a global mute immediately.
3. Define audio buses instead of scattering volume state across components.
4. Stop/crossfade route-owned loops cleanly.
5. Pause game-timed audio with game pause and visibility rules.
6. Avoid clipping when many sounds overlap; use gain structure/compression if necessary.
7. Keep critical gameplay feedback audible/readable but provide visual equivalents for players who mute audio.
8. Measure timing-sensitive mechanics using the audio clock when appropriate rather than visual frame timing.

## Spatial restraint

Use positional audio when direction/distance matters. Do not spatialize every UI click.
