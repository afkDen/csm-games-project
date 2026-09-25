---
name: chibi-character-pipeline
description: "Decide and build the lightest convincing chibi-character representation for each minigame, comparing sprite sheets, 2D cutout rigs, billboards in 3D, and lightweight stylized 3D/procedural models. Use when chibi assets, animation requirements, hitboxes, camera readability, or character production cost need a concrete pipeline decision."
---

# Chibi Character Pipeline

## Goal

Choose representation based on gameplay/readability, not novelty.

## Candidate formats

- sprite sheet
- layered 2D cutout rig
- billboard/sprite in 3D world
- lightweight stylized 3D model
- procedural/code-built 3D for specific simple forms
- img2threejs-assisted stylized procedural reconstruction when an approved reference and the game camera justify it

## Decision criteria

- silhouette readability at game camera distance
- animation count and transition needs
- hitbox/collision needs
- directional facing requirements
- mobile performance
- asset rights/provenance
- production time
- consistency with the surrounding world

## Prototype requirement

Before locking the first production pipeline, prototype at least two plausible representations in the first minigame. Do not assume the same representation must be used by all five games; consistency is useful, but a world may justify a different technique if it materially improves its unique gameplay/readability and remains maintainable.

## Rigging rule

Do not over-rig. Build only the joints/states needed by actual game verbs and reactions.

## Provenance

Every shipped chibi source/derivative must be categorized in `ASSET_MANIFEST.json` and `docs/RIGHTS_AND_PROVENANCE.md`.
