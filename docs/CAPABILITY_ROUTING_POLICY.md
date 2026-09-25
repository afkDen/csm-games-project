# Capability Routing Policy

## Purpose

Make skill/connector/API/tool selection explicit and reviewable without turning the project into checklist theater or tying the project to one provider.

## Census sources

For `normal`, `major`, and `architectural` work, inspect the applicable capability surface. `trivial` work does not require an exhaustive census unless a capability/permission uncertainty itself creates risk. Inspect:

- `portable/skills/*/SKILL.md` as the canonical local skill set;
- any enabled external/project-local/global skills visible to the active runtime, including optional `.agents/skills/` entries where relevant;
- runtime-native subagent/research/browser capabilities;
- configured connectors/MCP servers and APIs;
- `.env.local` **presence only** for optional integrations; never print values;
- local scripts and production infrastructure;
- current authoritative library documentation sources where available.

`docs/CAPABILITY_REGISTRY.md` records last-known setup state, but runtime discovery wins if it differs.

## Logical capability names

Route by function, not provider naming. Typical logical capabilities include:

- `filesystem.read`
- `filesystem.write`
- `command.exec`
- `subagent.spawn_or_isolated_context`
- `web.search`
- `web.fetch`
- `browser.inspect`
- `browser.automate`
- `media.ffmpeg`
- `current_docs.lookup`
- `image.generate`
- `external_asset.search`

The runtime adapter maps these to concrete tools.

## Minimum routing table columns

| Capability | Considered | Status | Task-specific reason | Trigger/phase | Expected evidence | Fallback |
| --- | --- | --- | --- | --- | --- | --- |

For major/architectural work, every materially plausible capability must be considered. For normal work, scope the census to capabilities plausibly relevant to the bounded task. Rows may be grouped when clearly unrelated, but the reason must remain concrete.

Allowed statuses include `REQUIRED`, `CONDITIONAL`, `DEFERRED`, `NOT APPLICABLE`, and `BLOCKED`.

## Good routing

`still-to-cinematic — REQUIRED — owner supplied character still must become a 2.5D route intro; evidence: depth plan + derived layers + entry/mid/peak captures.`

`Asset Scout — REQUIRED FOR GAP PASS / CONDITIONAL FOR ACQUISITION — inventory missing material after still profile + experience score; acquire only when a concrete gap survives existing/derive/procedural/generated comparison.`

`media.ffmpeg — CONDITIONAL, normally REQUIRED when a selected beat needs video/audio inspection, browser derivatives, frame extraction, or scrub-sequence preparation and FFmpeg is available. Evidence: media doctor + transform recipe + verified derivative.`

`reasoning-routing — REQUIRED FOR ORCHESTRATION — classify implementation complexity, resolve `adaptive` to `execution` or `high`, record forced-high triggers/rationale, and ensure benchmark runs capture the exact provider-side reasoning control.`

## Bad routing

- `Use Provider X tool because it exists.`
- omitting an installed motion/game/audio skill because the model “already knows how.”
- marking a capability `USED` after merely reading its instructions.
- claiming browser visual review when only DOM/test output was inspected.

## Usage reconciliation

After implementation, the reviewer reconciles routing with reality:

- required + material evidence → pass;
- required + no evidence → fail;
- conditional + trigger did not occur → pass, not used;
- conditional + trigger occurred but capability was skipped without reason → finding;
- not applicable but implementation clearly needed it → routing/review finding.

## Cross-provider comparisons

When benchmarking models/providers, capability differences must be recorded rather than hidden. A run with browser automation or image generation is not capability-equivalent to one without it; compare the result with that limitation visible in the run manifest.
