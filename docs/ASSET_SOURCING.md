# Adaptive Asset Discovery and Sourcing Policy

## Principle

The initial asset set is **not assumed to be sufficient**.

Asset discovery is an active production loop: define the intended scene and scroll score, identify what is missing, then source, derive, generate, reconstruct, or procedurally create only what materially improves the experience.

The supplied character stills remain the primary visual authority. Supporting assets should spatialize, animate, enrich, or sonically support them rather than establish a competing identity.

## When to run an asset-gap pass

Run `asset-scout`:

1. during world orchestration after the still profile + experience score exist;
2. before implementing a beat whose required material is missing;
3. when a reviewer identifies flatness, sparse atmosphere, weak transition material, generic lighting, insufficient foreground/background structure, or weak sound depth;
4. when an existing asset is technically unsuitable for responsive, scroll-scrubbed, or interactive use.

Asset discovery can reopen at any milestone. It is not a one-time setup phase.

## Asset classes to consider

- textures / material maps / masks / grain / displacement;
- environmental and atmospheric imagery;
- foreground/background compositing elements;
- lightweight 3D models / props;
- HDRIs / reflection / lighting sources;
- procedural source textures;
- image sequences / video useful for scroll scrubbing;
- typography / icons / graphic support;
- shaders / visual-effect techniques;
- ambience / foley / impacts / transitions;
- generated or procedurally created supporting art where appropriate.

## Acquisition ladder

For each real need, prefer in this order when the result is strong:

1. reuse an approved existing project asset;
2. derive from an approved owner source still;
3. source a clearly licensed supporting asset;
4. generate a project-specific supporting asset through an approved workflow;
5. create it procedurally / reconstruct it as editable geometry;
6. simplify the effect if the asset cost outweighs its experiential value.

This is a decision ladder, not a prohibition on external assets.

## Candidate evaluation

Shortlist only a few strong candidates and record:

- exact need / scene beat served;
- aesthetic compatibility with the still profile;
- source / creator/provider when known;
- license / terms / attribution obligations;
- format and technical suitability;
- editability / crop / recolor / compositing potential;
- expected optimization work;
- mobile / memory / runtime cost;
- genericness risk;
- why procedural/generated/existing alternatives are weaker or stronger.

## Preferred routing

- **Owner-supplied anime/campaign stills** — primary character source. Do not scrape automatically.
- **Poly Haven** — HDRIs, PBR textures/materials, selected models; record terms and acquisition method.
- **Pexels** — photo/video only when a defined beat genuinely needs it; requires `PEXELS_API_KEY` for API use.
- **Iconify** — symbols/icons with collection-license review.
- **Kenney** — permissive game/UI/3D assets when they fit without imposing a game-pack identity.
- **img2threejs** — reconstruction when a reference object should become editable/animation-ready geometry.
- **Original / procedural / generated support** — preferred when a centerpiece or signature interaction needs project-specific form.

Other providers may be used when current capability discovery finds a better licensed source. Record provenance and do not infer permissive rights from public availability.

## Source / derivative boundary

Raw inputs belong in `assets/source/`. Shipping derivatives belong in `public/assets/derived/` and remain linked to their provenance record. Transformation does not reset copyright or licensing obligations.

## Production manifest

Every shipped external or generated production asset must be represented in `ASSET_MANIFEST.json` with at least the fields enforced by `scripts/validate-assets.mjs`. Add useful metadata such as creator/provider, original URL/reference, intended beat, optimization notes, and derivative source when applicable.

## Scene verification

Do not approve an asset from a thumbnail alone. Verify it in the actual route at representative entry/mid/peak/portal states and responsive quality variants. Reject it if it breaks the still-led palette, introduces generic stock identity, or adds cost without meaningful visual value.

## Secret rule

API keys are build/tooling-only. Never copy credentials into source code, public env variables, generated docs, screenshots, logs, manifests, or browser bundles.

## 3D shipping

For external/DCC 3D assets that ship as files, prefer GLB/glTF 2.0 where practical. Normalize transforms, pivots, material count, texture size, and collision/LOD needs based on actual use. Code-native procedural geometry may remain code-native when that supports the interaction better.
## Media derivative handoff

When an approved asset solution requires video/audio inspection, transcoding, frame extraction, poster generation, scroll-sequence preparation, or browser-specific media derivatives, use `MEDIA_PIPELINE_FFMPEG.md` and the `media-pipeline-ffmpeg` skill when FFmpeg is available.

FFmpeg is a development/build-time production tool, not a website runtime dependency. Preserve source masters and record reproducible transform recipes for shipped derivatives.
