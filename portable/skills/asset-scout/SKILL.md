---
name: asset-scout
description: "Adaptive gap-driven asset discovery for the still-led pastel motion experience. Use after a scene/scroll score identifies missing textures, atmosphere, models, media, masks, audio, lighting, foreground/background elements, or other support; reopen whenever review finds a concrete asset gap."
---

# Asset Scout

Use `docs/ASSET_SOURCING.md` as authoritative policy and `ASSET_MANIFEST.json` as the production provenance ledger.

## Mission

Do not assume the initial asset set is enough. Find, derive, generate, reconstruct, or procedurally create the smallest strong set of supporting material required to execute an already-defined beat.

The supplied character stills remain the aesthetic authority. Supporting assets must reinforce their palette/composition/atmosphere and the character's interaction grammar rather than become the identity themselves.

## Trigger

Run after the still profile + experience score identify a real gap, or when audit/review reports flatness, generic lighting, weak atmosphere, missing foreground/background structure, poor transition material, inadequate scrub media, or weak sound depth.

## Candidate classes

Consider textures, masks, displacement, HDRI/reflection sources, atmosphere, environmental layers, 3D props, scrub sequences/video, VFX source material, typography/graphics, ambience/foley, generated support art, and procedural alternatives. When the selected solution requires media inspection/transcoding/frame extraction/audio preparation, route the derivative step through `media-pipeline-ffmpeg` when available.

## Acquisition ladder

Compare:

1. existing approved project asset;
2. derivative from approved owner source;
3. clearly licensed external asset;
4. approved generated project-specific support asset;
5. procedural/reconstructed implementation;
6. simplification if cost exceeds experiential value.

## Source routing

- Owner-supplied campaign/anime art: primary character source; never scrape automatically.
- Poly Haven: HDRIs/PBR/textures/models with terms/provenance review.
- Pexels: defined photo/video need only; protect `PEXELS_API_KEY`.
- Iconify: icons/symbols with collection-license review.
- Kenney: permissive game/UI/3D support when it does not impose generic pack identity.
- img2threejs: editable reconstruction where useful.
- Other providers: allowed only after current discovery + rights review.
- Original/procedural/generated support: preferred for identity-critical needs when stronger.

## Required output

For each gap, produce a small candidate comparison including:

- beat/need served;
- aesthetic/still fit;
- provenance/license/terms;
- format/editability;
- expected optimization/mobile cost;
- genericness risk;
- selected route and reason.

Record shipped assets in `ASSET_MANIFEST.json` and verify them in the real scene, not just a thumbnail.

## Secret / rights rule

Never expose keys/tokens. Public availability is not a license. A derivative of copyrighted owner art remains tied to that source's rights status.
