# Process Tier Policy

This policy prevents the multi-agent pipeline from becoming bureaucracy. Use the **lightest process that still protects the risk of the change**.

Process tier and reasoning level are related but not identical. Process tier decides **how many independent decision gates are needed**. Reasoning policy decides **how deeply each participating role should reason**.

## Tier 1 — `trivial`

Use for bounded, low-risk edits with obvious acceptance criteria, such as typo fixes, path corrections, small copy adjustments, asset-manifest bookkeeping, or a narrowly scoped style tweak that does not alter character identity, scroll grammar, transition ownership, architecture, rights, security, or shared behavior.

Default path:

`controller/state-owner → production implementation → relevant deterministic checks → state closeout`

Independent review is optional unless a forced-escalation trigger fires.

Do **not** create a full orchestration packet just to rename a variable or change a safe constant.

## Tier 2 — `normal`

Use for well-specified feature work whose desired behavior is already settled and whose impact is local, such as implementing a previously approved component, isolated game rule, contained audio behavior, or ordinary integration work.

Default path:

`controller → production-implementer → independent implementation-reviewer → controller`

A fresh orchestration pass is optional when the approved architecture and creative direction already answer the material design questions. If the implementer discovers ambiguity that could alter experience architecture, escalate before silently deciding it.

## Tier 3 — `major`

Use for meaningful user-visible milestones, new character beats, significant scroll/interaction work, asset/media strategy decisions, game milestones, major visual changes, or anything where a poor plan could create expensive rework.

Default path:

`controller → experience-orchestrator → independent orchestration-auditor → production-implementer → independent implementation-reviewer → controller`

The first vertical slice and each new authored character experience are at least `major`.

## Tier 4 — `architectural`

Use when the change affects shared architecture, cross-system state ownership, transition topology, renderer/input/audio lifecycle, portable pipeline behavior, benchmark methodology, security/rights boundaries, or another decision whose failure can contaminate multiple worlds or later milestones.

Default path is the full audited loop, with the implementer resolved to **high reasoning** regardless of ordinary complexity classification.

Architectural work should include explicit risky proofs and rollback/compatibility notes where relevant.

## Forced escalation triggers

Escalate to at least `major` when work:

- changes a character's route identity, scroll grammar, signature interaction, transition grammar, portal staging, or game fantasy;
- changes still-led creative direction, pastel/colorful tonal rules, spatial-depth strategy, or world-uniqueness criteria;
- changes how user input behaves during active transitions;
- changes asset sourcing/provenance assumptions or introduces a materially new media pipeline;
- changes shared renderer, routing, input, audio, progression, or quality systems;
- produces repeated review failure or exposes ambiguity not covered by the approved plan.

Escalate to `architectural` when work:

- changes canonical state ownership or cross-system property ownership;
- changes the portable pipeline, runtime-adapter contract, process/reasoning policies, benchmark/experiment rules, or security boundaries;
- introduces a shared abstraction that multiple character worlds will depend on;
- changes a public contract relied on by multiple subsystems;
- requires resolving a race, interruption, lifecycle, or ownership problem spanning multiple systems.

## De-escalation rule

Do not de-escalate merely to reduce token/tool usage. De-escalation is valid only when the scope is demonstrably bounded, requirements are already settled, and no forced-escalation trigger applies.

## State and artifact recording

The controller records the active tier in `docs/PROJECT_STATE.md` before work begins.

- `trivial`: no full agent-run folder required unless evidence is useful.
- `normal`: retain implementation/review evidence appropriate to the change.
- `major` / `architectural`: use the full `docs/agent-runs/<milestone>/` artifact set.

If a task escalates mid-flight, update `docs/PROJECT_STATE.md`, record why, and switch to the stronger path without discarding useful prior evidence.
