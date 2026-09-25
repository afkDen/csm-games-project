# Repository Instructions for Agent Runtimes

## Primary operating mode

This repository uses the provider-neutral audited multi-agent system defined by:

- `portable/pipeline.manifest.json`
- `portable/roles/`
- `portable/skills/`
- `docs/AGENT_LOOP_PROTOCOL.md`
- `docs/RUNTIME_PORTABILITY_CONTRACT.md`

Concrete provider/model/tool syntax belongs under `runtimes/`.

## Read order

Before production changes, read:

1. `MASTER_PROMPT.md`
2. `PRODUCT.md`
3. `DESIGN.md`
4. `docs/CREATIVE_DIRECTION_CONTRACT.md`
5. `docs/CHARACTER_FIDELITY_MATRIX.md`
6. `docs/SCROLL_EXPERIENCE_CONTRACT.md`
7. `docs/TRANSITION_CONTINUITY_CONTRACT.md`
8. `docs/SPATIAL_DEPTH_CONTRACT.md`
9. `docs/EXPERIENCE_AMBITION.md`
10. `docs/WORLD_UNIQUENESS_CONTRACT.md`
11. `docs/PERFORMANCE_AND_QUALITY.md`
12. `docs/ASSET_SOURCING.md`
13. `docs/MEDIA_PIPELINE_FFMPEG.md`
14. `docs/PROCESS_TIER_POLICY.md`
15. `docs/REASONING_POLICY.md`
16. `docs/RUNTIME_PORTABILITY_CONTRACT.md`
17. `docs/AGENT_LOOP_PROTOCOL.md`
18. `docs/CAPABILITY_ROUTING_POLICY.md`
19. `docs/PORTABLE_RUNBOOK.md` when running/comparing another provider
20. `docs/DECISIONS.md`
21. `docs/PROJECT_STATE.md` — sole mutable resume authority
22. full canonical `portable/skills/*/SKILL.md` instructions materially applicable to the current role/task

## Runtime selection

The active runtime must map canonical roles and logical capabilities to its own models/tools. Use `runtimes/provider-template/adapter.example.json` for a new provider.

The Antigravity compatibility path remains under `.agents/` and `runtimes/antigravity/`. It is an adapter, not the source of project truth.

## Process-tier routing

Classify work before spawning roles:

- `trivial` → bounded implementation + relevant deterministic checks;
- `normal` → implementation + fresh independent implementation review;
- `major` → full orchestrator → auditor → implementer → reviewer loop;
- `architectural` → full loop with high-reasoning implementation and architectural safeguards.

The first vertical slice and new character experiences are at least `major`. Shared pipeline/state/benchmark/cross-system architecture changes are `architectural`. Escalate when risk expands; do not create full orchestration paperwork for safe trivial edits.

For the full audited loop, the auditor runs in a fresh independent context from the orchestrator and the reviewer runs in a fresh independent context from the implementer. Maximum three plan-audit rounds and three implementation-review rounds before returning to orchestration for a deeper rethink. Do not let the implementer self-approve or the reviewer fix its own findings by default.

## Capability discipline

For `normal`/`major`/`architectural` work, explicitly evaluate the actual available canonical skills, optional project-local/external skills, runtime-native/global skills, connectors/MCPs, APIs, browser/research capabilities, scripts, and project systems. Follow `docs/CAPABILITY_ROUTING_POLICY.md`.

Use logical capability names rather than assuming another runtime's vendor-specific tools. `NOT APPLICABLE`, `CONDITIONAL`, `DEFERRED`, and `BLOCKED` are legitimate when justified.

A capability counts as `USED` only when it materially informs a decision, artifact, implementation, verification result, or issue fix.

## Production approval shortcut

When state is `AWAITING_FIRST_SLICE_APPROVAL` and the owner clearly approves the full direction with **“Approved. Proceed.”** or equivalent:

1. read `APPROVE_AND_PROCEED.md` and `PRODUCTION_AUTOPILOT.md`;
2. set mode to `AUTOPILOT`;
3. execute process-tier routing through the first slice, remaining unique worlds, integration, hardening, and final release gate; major/architectural work uses the full audited loop;
4. do not invent routine owner approval gates.

## Core behavior

- Preserve the project's still-led, pastel/colorful, spatial, animated, scroll-driven, playable ambition.
- Translate character truth into behavior; do not use dark/gritty styling or palette alone as shorthand.
- Treat scroll as an authored timeline and reject stacked reveal-section substitutes.
- Treat transitions as reversible/retargetable state and stress direction changes, eligible mid-transition controls, duplicate activation, and route/game ownership.
- Diagnose and correct flatness with meaningful depth rather than generic particles.
- Reuse shared mechanisms without producing repeated character-page skeletons or repeated major-transition choreography.
- Follow the world uniqueness contract before and after every character implementation.
- Verify real browser/rendered intermediate states, not only endpoints.
- Never expose `.env.local`, tokens, credentials, or raw private source assets.

## Asset/media boundary

`assets/source/` is local/raw input and never public-serving. Only intentional derivatives belong under `public/assets/derived/` after provenance is recorded. FFmpeg/FFprobe are preferred development-time media tools when a selected beat materially benefits from transcoding, sequence extraction, posters/proxies, inspection, or audio preparation. They are never visitor runtime dependencies.

## Runtime portability boundary

Provider/runtime adapters may change tool syntax, model assignment, permissions, and subagent launch mechanics. They may not change the creative hierarchy, role independence, review gates, uniqueness requirements, transition continuity, asset/provenance rules, or completion standard.


## Revision interrupt / resume

Owner changes during autopilot are bounded interrupts: checkpoint the current target, run an audited revision plan, implement and independently review the revision, then resume the recorded target unless the owner explicitly says hold/wait.

## Reasoning boundary

Use `docs/REASONING_POLICY.md`. Controller/orchestrator/auditor/reviewer remain logical `high`. The production implementer is `adaptive`: orchestration resolves it to `execution` or `high` before launch, with critical/forced-high work always using `high`. Runtime adapters own the exact provider effort/budget/model variant, and benchmark manifests record what was actually used.

## Canonical state boundary

`docs/PROJECT_STATE.md` is the only mutable current-state/resume record. The controller/state-owner writes it; other roles read it and report proposed updates.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
