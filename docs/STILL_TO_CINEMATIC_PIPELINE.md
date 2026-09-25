# Still-to-Cinematic Pipeline

The owner supplies primary character stills. The task is not to hide that they are still images; it is to **spatialize and animate their visual logic** until the visitor feels able to enter them.

Read first:

- `docs/CREATIVE_DIRECTION_CONTRACT.md`
- `docs/SPATIAL_DEPTH_CONTRACT.md`
- `docs/SCROLL_EXPERIENCE_CONTRACT.md`

## Input

Raw owner-supplied imagery lives under:

`assets/source/official-anime-stills/character-holding-glasses/`

Never move raw source art into a public-serving location merely for convenience.

## 1. Still-aesthetic profile

Before cutting layers, document:

- focal subject and eye path;
- hue relationships and accents;
- value/contrast structure;
- shadow/highlight temperature;
- lighting softness/direction;
- negative space and crop logic;
- lens/glasses geometry;
- texture/grain/print qualities;
- composition motifs worth carrying into type/VFX/UI;
- regions that must remain rigid/stable.

This profile drives the route's visual system. Do not begin from a generic preset.

## 2. Spatial decomposition

Identify a **small number of meaningful depth relationships**, not maximum layer count:

- foreground occluder / hand / eyewear / graphic;
- character face/body;
- middle environment;
- far environment;
- atmosphere/light;
- type/lens plane when compositionally useful.

Estimate safe crop and occlusion behavior for desktop and mobile separately.

## 3. Asset-gap pass

Ask what the still cannot provide by itself but the planned experience score requires:

- foreground depth?
- extended background?
- environmental structure?
- reflection/refraction source?
- atmospheric texture?
- 3D prop?
- transition material?
- scrub sequence?
- ambient/foley audio?

Route real gaps to `asset-scout`. Do not add stock merely to make the scene busier.

## 4. Motion design

Possible techniques:

- perspective-aware camera push / rail / orbit / depth crossing;
- independent plane travel and occlusion change;
- scroll-scrubbed masks / image sequences / animation;
- constrained pointer/touch parallax;
- lens refraction / displacement / reflection;
- controlled secondary hair/cloth/light motion;
- environmental atmosphere and particles;
- depth-aware typography;
- focus/depth-of-field-like cues;
- velocity/direction-reactive secondary systems;
- authored still-to-still compositing transitions.

The route's scroll score decides when these occur. Do not stack effects without a dramatic role.

## 5. Pastel integration

Preserve the still's actual color logic while integrating it into the project's bright, pastel-forward family. Surrounding environment, lighting, gradients, type, reflections, and atmosphere may lift the route into softer/luminous values.

Do not destructively recolor key character art just to meet a pastel target.

## 6. Integrity rules

- protect faces, hands, eyewear, and identity-critical linework;
- avoid uncanny mesh-warping of illustration anatomy;
- prefer camera/layer motion over deforming the drawing;
- verify masks at intermediate states and responsive crops;
- preserve source provenance for every derivative.

## Video / image-sequence derivatives

Use rendered media when it materially improves a scroll-scrubbed or cinematic beat. When used:

- preserve poster/static fallback;
- optimize cadence/encoding for scrubbing;
- use the media only where interactivity does not require true realtime geometry;
- record source/transformation in `ASSET_MANIFEST.json`.

## Acceptance

A still-to-cinematic treatment passes when:

- it visibly retains the source still's visual identity;
- it has meaningful spatial relationships rather than uniform zoom;
- scroll changes the composition, camera, depth, or world state continuously;
- the scene retains subtle life when input stops where appropriate;
- the strongest frames remain composed;
- desktop and mobile feel art-directed;
- source artwork remains visually stable.
