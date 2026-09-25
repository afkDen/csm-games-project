---
name: still-to-cinematic
description: "Turn approved static character/campaign art into still-led cinematic 2.5D web scenes using a source-derived aesthetic profile, meaningful depth planes, camera choreography, lens masks, selective secondary motion, scroll coupling, and responsive composition without inventing unsupported source animation."
---

# Still to Cinematic

Read:

- `docs/STILL_TO_CINEMATIC_PIPELINE.md`
- `docs/CREATIVE_DIRECTION_CONTRACT.md`
- `docs/SPATIAL_DEPTH_CONTRACT.md`
- `docs/SCROLL_EXPERIENCE_CONTRACT.md`

## Goal

Make the supplied still feel spatially inhabitable and temporally alive while preserving its visual identity and illustration integrity.

## Workflow

1. Build the still-aesthetic profile first: hue/value/light/composition/texture/crop/negative-space/rigid-region observations.
2. Define the route's intended scroll/camera beats before cutting layers.
3. Identify a small set of meaningful depth relationships; do not maximize layer count.
4. Preserve rigid facial/hand/eyewear/line-art regions unless a very small deformation is demonstrably safe.
5. Identify any material the still cannot provide but the experience score requires; route real gaps to `asset-scout`.
6. Add secondary motion only where it supports the character/world: atmosphere, light, cloth/hair drift, reflection, glint, focus, foreground movement, etc.
7. Integrate the still into the pastel/colorful project family through surrounding world/light/type/optics rather than destructive recoloring.
8. Bind motion to scroll/pointer/game state when the coupling improves the authored shot.
9. Verify desktop/mobile compositions and forward/back intermediate states.

## Avoid

- uniform zoom-only "cinematic" treatment;
- flat image + text with particles as the finished route;
- excessive mesh warping of faces/hands;
- fake lip sync/body motion not supported by the illustration;
- dozens of micro-layers that add complexity without depth;
- generic dark/gritty treatment that ignores the still's actual visual logic;
- using pre-rendered media when realtime interaction is the point;
- refusing pre-rendered scrub media when it is clearly the stronger solution for a noninteractive beat.

## Output discipline

Record shipped derivatives in `ASSET_MANIFEST.json` and keep raw source art outside `public/`.
