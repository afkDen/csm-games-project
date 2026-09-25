# Media Production Pipeline — FFmpeg / FFprobe

FFmpeg is a **preferred development-time media production tool** for this project when motion/audio assets benefit from inspection, transcoding, sequence extraction, derivative creation, or optimization. It is not a browser/runtime dependency.

The creative objective remains experience-first: use the media pipeline to preserve ambitious motion while making delivery practical, not to flatten the design simply to minimize bytes.

## Runtime boundary

The finished website must consume prepared web assets. It must never require FFmpeg on the visitor's device or production web server merely to render ordinary routes.

FFmpeg/FFprobe may be used during local development, asset preparation, CI/build preparation, or deliberate content-generation steps.

## Capability routing

Run:

```bash
npm run media:doctor
```

The check is informational and does not fail the bootstrap when FFmpeg is unavailable.

Routing rule:

- if a milestone has no media transformation need: `NOT APPLICABLE`;
- if a media need exists and FFmpeg is available: normally `REQUIRED` for the relevant preparation step unless another tool is demonstrably better;
- if a media need exists and FFmpeg is unavailable: `BLOCKED` or use an explicitly documented equivalent fallback;
- do not install system packages or mutate the owner's machine without authorization.

## Preferred uses

Use FFprobe/FFmpeg where useful for:

### Video / motion source

- inspect codec, duration, frame rate, dimensions, pixel format, color metadata, alpha, and bitrate;
- make browser-targeted MP4/WebM derivatives;
- generate poster frames;
- extract scroll-scrubbed image sequences;
- generate alternate desktop/mobile derivatives;
- crop/scale/pad while preserving intentional composition;
- trim source clips to the exact authored beat;
- create lower-cost proxies for iteration before final-quality outputs;
- verify frame count/timing of scrubbed sequences.

### Image-sequence production

For a pre-rendered scroll beat, retain a reproducible mapping:

```text
approved source
→ selected time/range
→ frame extraction policy
→ resize/crop/color handling
→ browser format(s)
→ manifest entry
→ visual scrub QA
```

Do not arbitrarily drop frames until a sequence feels cheap. Determine the minimum density from the required scroll motion, camera speed, target device, and visual QA.

### Audio

- inspect sample rate, channels, duration, loudness/peak characteristics, and codec;
- trim/fade/crossfade source material;
- create browser-targeted derivatives;
- normalize deliberately when appropriate;
- generate analysis/waveform data when it helps debugging or authored timing;
- produce lightweight iteration proxies without overwriting masters.

Do not use normalization as an excuse to erase intentionally dynamic sound design.

## Source preservation

Never modify owner/source masters in place.

Raw assets remain under `assets/source/` or another explicitly protected source location. Generated/converted outputs belong under `public/assets/derived/` or a non-public intermediate/build directory as appropriate.

Prefer non-destructive commands and explicit output paths. During tooling, avoid accidental overwrite; preserve originals even when a derivative appears equivalent.

## Reproducibility record

For every shipped derivative produced with FFmpeg, retain enough provenance to reproduce it:

- source asset ID/path;
- source rights/provenance link through `ASSET_MANIFEST.json` or `AUDIO_MANIFEST.json`;
- FFmpeg/FFprobe version when material;
- command or normalized transform recipe;
- output format/codec;
- relevant dimensions/frame rate/sample rate;
- intended route/beat;
- whether desktop/mobile/quality variants exist;
- verification notes.

Do not store secrets or private filesystem paths in public manifests.

## Quality principles

1. Preserve the source still/sequence color relationships unless the creative plan explicitly grades them.
2. Avoid unnecessary generational recompression.
3. Preserve alpha when a compositing asset requires it and the selected browser format supports it.
4. Do not bake away a route's reversible interaction if realtime separation is important.
5. Conversely, prefer a high-quality pre-rendered sequence when it gives a materially stronger beat than a weak realtime reconstruction.
6. Test actual browser decoding and memory behavior; a small transfer file can still be expensive to decode or hold as many frames.
7. Mobile derivatives may use different resolution/frame density while preserving the same dramatic motion idea.

## Scroll-sequence contract

When FFmpeg creates media for scrubbed motion:

- route progress owns playback position;
- backward scroll must address earlier frames cleanly;
- seek/frame mapping must be deterministic;
- preload strategy must prevent obvious blank flashes at intended scroll speeds;
- progress clamping and missing-frame behavior must be defined;
- the sequence must remain interruption-safe under `TRANSITION_CONTINUITY_CONTRACT.md`;
- fallback/poster behavior must be defined for reduced motion or unsupported decoding paths.

## Security / command hygiene

- Treat filenames/paths as data; quote/pass them safely rather than constructing unsafe shell strings.
- Do not execute arbitrary media metadata as shell code.
- Do not download arbitrary URLs through FFmpeg protocols as a substitute for reviewed asset acquisition.
- Prefer local, provenance-reviewed source files.
- Keep temporary files outside public output unless they are intentional deliverables.

## Verification

Before accepting a media derivative:

- inspect it visually/audibly;
- compare key frames/segments against source intent;
- verify browser decode and loop/seek behavior where relevant;
- verify reverse scrub for image/video sequences;
- check mobile/quality variant composition;
- update asset/audio provenance and implementation evidence.
