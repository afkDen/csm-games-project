# Connectors, MCPs, and APIs — Runtime-Neutral Setup

Do not commit live credentials. Use `.env.local`, the active runtime's secure credential/connector handling, or another secure local store. `docs/CAPABILITY_REGISTRY.md` records status only, never secret values.

## General rule

Connectors/MCPs/APIs are capabilities, not requirements by brand name. Use them only when they materially improve a milestone and record their role in `CAPABILITY_ROUTING.md`.

Examples of useful capability classes:

- current library/documentation lookup;
- browser inspection/automation;
- component/UI reference discovery;
- image/video/stock asset sourcing;
- licensed HDRI/material/model sourcing;
- image generation;
- repository/code hosting integration.

A configured connector is not automatically applicable; an applicable capability should not be silently ignored.

## Context7 / current documentation

Use a current documentation source when version-sensitive library/API behavior can materially affect implementation or review. The active runtime adapter owns the concrete setup method. If Context7 is used, keep `CONTEXT7_API_KEY` local and verify its current official setup instructions rather than copying stale commands into the portable core.

## Motion documentation context

When Motion is materially used, prefer its current authoritative AI/agent documentation context rather than relying on recalled APIs. Runtime setup can change independently of this repository.

## 21st.dev / component discovery

Optional and bounded to component/UI discovery, HUD/settings/result surfaces, and comparison. It does not define world art direction. Keep `API_KEY_21ST` local if required.

## Pexels / photo-video sourcing

Optional photo/video sourcing only. `PEXELS_API_KEY` stays local. Use through the asset-gap process only after a concrete scene need exists; do not force stock media into a world because access is configured.

## Poly Haven / HDRI-material-model sourcing

Useful when Asset Scout establishes a real need. Record source/license/terms/credit requirements separately from access-method assumptions.

## Runtime discovery

During initialization, inspect the connectors/MCPs/APIs actually available to the active runtime and update `docs/CAPABILITY_REGISTRY.md` with status only.

For Antigravity-specific connector configuration, see `docs/ANTIGRAVITY_SETUP.md`. Other runtimes should document their mapping in `runtimes/<adapter>/` or the experiment run manifest.
