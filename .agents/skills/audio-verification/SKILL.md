---
name: audio-verification
description: "Verify browser audio and synthesized game sound with measurable evidence instead of assuming an AudioContext graph sounds correct. Use after creating or changing UI/game SFX, synthesis, Web Audio graphs, adaptive layers, gain structure, or timing-sensitive audio, especially when the agent cannot directly hear the result."
---

# Audio Verification

Read `docs/AUDIO_DESIGN.md` before verification. This skill complements `game-audio-systems`; it does not replace creative sound design.

## Principle

Compiling and connecting audio nodes does not prove that the output is audible, clean, unclipped, click-free, or correctly timed. When audio materially changes, produce evidence appropriate to the implementation.

## Verification ladder

1. **Lifecycle** — verify valid user-gesture unlock, mute, pause/resume, visibility handling, route/game cleanup, and restart behavior in a real browser.
2. **Signal existence** — for generated/processed audio, render or capture a deterministic short sample where practical and verify it is not silent when sound is expected.
3. **Level sanity** — inspect peak/RMS or equivalent level evidence; flag obvious clipping, near-silence, or pathological gain jumps.
4. **Envelope sanity** — inspect attack/release boundaries for discontinuities when clicks/pops are plausible.
5. **Timing** — for rhythm, combo, beat, or scheduled cues, compare event timing against the audio clock rather than visual frame timing alone.
6. **Mix stress** — exercise representative simultaneous SFX and confirm gain structure remains stable.
7. **Fallback** — with audio muted/unavailable, confirm critical game state still has visual feedback.

## Preferred techniques

- Browser `OfflineAudioContext` for deterministic Web Audio graph rendering when feasible.
- `AnalyserNode`/meter instrumentation for runtime level and spectrum checks.
- Playwright/browser automation for unlock, mute, pause, route transition, and cleanup assertions.
- `ffprobe`/`ffmpeg` are preferred development-time tools when a real audio metadata/derivative/waveform need exists and the binaries are available; route preparation through `media-pipeline-ffmpeg`. Never make them a browser runtime dependency.
- Small purpose-built debug/export harnesses are acceptable, but remove or isolate them from the shipping experience.

## Do not fake listening

Never claim that a sound is pleasant, cinematic, punchy, balanced, or free of artifacts solely from reading code. Report measurable findings and browser behavior. Subjective final listening remains an owner/human review when it matters.

## Evidence

Record concise evidence in the relevant game/world review or `docs/TOOL_USAGE_LOG.md` only when this skill materially affected a decision or found/fixed an issue.
