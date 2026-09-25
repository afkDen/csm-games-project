---
name: media-pipeline-ffmpeg
description: "Use FFmpeg/FFprobe as a preferred build-time media pipeline for inspected, reproducible video, scroll-sequence, poster, audio, proxy, and browser-derivative preparation when a milestone has a concrete media transformation need. Never make FFmpeg a browser runtime dependency."
---

# FFmpeg Media Pipeline

Read `docs/MEDIA_PIPELINE_FFMPEG.md` and the asset/audio provenance policies.

## Trigger

Use after the experience/asset plan identifies a real video, image-sequence, poster, audio, waveform, proxy, or media-optimization requirement.

Run `npm run media:doctor` first. Availability alone is not usage evidence.

## Preferred flow

1. inspect source with FFprobe when metadata matters;
2. preserve the source master;
3. define the exact authored beat/derivative need;
4. create explicit non-destructive derivative(s);
5. verify visual/audio quality and browser behavior;
6. verify reverse/addressable scrub behavior when relevant;
7. record provenance + transform recipe/version/intent;
8. keep desktop/mobile/quality variants intentional rather than arbitrary.

## Rules

- Use local provenance-reviewed inputs; do not turn FFmpeg into an unreviewed network downloader.
- Do not overwrite owner masters.
- Avoid unnecessary generational encoding.
- Prefer pre-rendered media only when it improves the approved experience; do not bake away interaction that needs realtime separation.
- If FFmpeg is unavailable, record `BLOCKED` or an explicit equivalent fallback rather than silently dropping the beat.
- Use safe process argument handling; avoid interpolating untrusted filenames into shell code.
- FFmpeg is build/development tooling, not a visitor/runtime requirement.

## Evidence

Retain the command/normalized transform recipe, source/output linkage, relevant media metadata, and scene/browser verification in the milestone implementation report and manifest.
