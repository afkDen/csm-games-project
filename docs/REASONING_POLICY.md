# Reasoning Policy — Provider-Neutral Adaptive Reasoning

## Purpose

Reasoning depth is part of the execution configuration, not part of the creative brief. The bootstrap must preserve the same quality bar across providers while allowing each runtime to express reasoning through its own controls: effort levels, thinking budgets, model variants, separate reasoning models, or no explicit control at all.

The project therefore records **logical intent** separately from the **actual provider setting**.

## Logical profiles

### `high`

Use the strongest practical reasoning configuration available within the declared run budget. Favor depth, verification, ambiguity resolution, and cross-system consistency over latency.

Required by default for:

- controller;
- experience orchestrator;
- orchestration auditor;
- implementation reviewer;
- critical implementation milestones.

### `execution`

A strong implementation configuration for work that is already well specified. It may be faster or cheaper than `high`, but it must still support correct coding, tool use, testing, and evidence collection.

`execution` does **not** mean lowest-cost, no-thinking, or shallow mode.

### `fast`

Optional profile for bounded helper/research tasks where mistakes are cheap, outputs are easy to verify independently, and the result does not own architectural or review authority.

Do not use `fast` for orchestration audit, implementation review, or critical implementation.

### `adaptive`

A selector used only for the production implementer. It is not a provider-side reasoning setting. Resolve it to `execution` or `high` before launching the implementation task.

## Role defaults

| Role | Default logical profile |
| --- | --- |
| controller | `high` |
| experience-orchestrator | `high` |
| orchestration-auditor | `high` |
| production-implementer | `adaptive` |
| implementation-reviewer | `high` |

The auditor/reviewer remain high even when the implementation itself used a cheaper execution profile.

## Process tier interaction

Process tier and reasoning depth are separate controls. `docs/PROCESS_TIER_POLICY.md` decides workflow depth; this file decides reasoning depth. An `architectural` process-tier task always resolves implementation to `high`, even if a narrow subtask might otherwise look routine/substantial.

## Implementation complexity classification

Classify the milestone before the implementer starts.

### Routine → `execution`

Examples:

- deterministic file/config wiring;
- applying an already-proven component pattern without changing interaction ownership;
- test fixture updates;
- narrowly scoped styling/polish that does not alter the experience grammar;
- straightforward asset-manifest or build integration.

### Substantial → `execution` by default

Examples:

- multi-file feature implementation inside an approved architecture;
- a known animation technique with clearly defined states;
- minigame/content work using already-proven systems;
- integration work whose ownership and acceptance criteria are explicit.

Escalate to `high` when any forced-high trigger appears.

### Critical → `high`

Examples:

- new scroll, transition, spatial, or signature-interaction architecture;
- transition/state ownership involving reversals, interruption, retargeting, or multiple input modes;
- novel WebGL/shader/camera choreography;
- portal → game → route handoff architecture;
- complex FFmpeg/media sequence design that changes runtime behavior;
- multi-system audio/visual synchronization;
- architecture changes with broad blast radius;
- hard debugging where visual evidence contradicts the expected state model.

## Forced-high triggers

Use `high` regardless of the original complexity label when any of these are true:

1. the work creates a new character-owned scroll/transition grammar;
2. two or more systems may compete for animation, camera, input, audio, or route ownership;
3. the bug involves race conditions, stale callbacks, cancellation, interruption, reverse scroll, or state corruption;
4. the work introduces novel WebGL, shader, 3D, camera, or media choreography;
5. the approved architecture must materially change;
6. the same fundamental implementation-review finding has survived a previous repair round;
7. browser/rendered evidence contradicts the implementation report or approved plan;
8. ambiguity is high and a wrong implementation would create expensive rework.

Architectural process-tier work is an additional forced-high condition. A runtime may always escalate from `execution` to `high`. It must not silently de-escalate a required-high role or critical milestone.

## Reasoning decision artifact

The orchestration packet must record for implementation:

- milestone complexity: `routine | substantial | critical`;
- requested profile: normally `adaptive`;
- resolved profile: `execution | high`;
- forced-high trigger(s), if any;
- short rationale.

If the milestone changes materially during implementation, re-evaluate the reasoning decision before continuing the affected work.

## Provider mapping

Runtime adapters translate `high`, `execution`, and `fast` into concrete provider controls. Possible mechanisms include:

- reasoning-effort setting;
- thinking/reasoning token budget;
- model variant or reasoning-model selection;
- separate model assignment by role;
- no explicit reasoning control.

Do not pretend these controls are equivalent across providers. Record what was actually used.

`adaptive` is never mapped directly. Resolve it first.

## Experiment recording

For each role, benchmark manifests must preserve:

- provider;
- concrete model/model version or slug where available;
- requested logical profile;
- milestone complexity when relevant;
- resolved logical profile;
- provider control type;
- exact provider control value;
- explicit reasoning/thinking budget and units if exposed;
- notes when the runtime has no separate reasoning control.

A benchmark that records only `high` without the provider-side setting is incomplete for reasoning comparison. The role reasoning block in `RUN_MANIFEST.json` records the locked starting configuration; later repair escalations should be appended to `results.reasoning_events` and milestone implementation/closeout evidence rather than silently rewriting the locked baseline.

## Benchmark modes

### Best-capability

Question: **What is the strongest result this provider/runtime can produce with this bootstrap?**

- fixed high roles use the strongest practical reasoning configuration;
- critical implementation uses `high`;
- routine/substantial implementation may use `execution` when that is part of the provider's intended high-quality workflow;
- cost/latency may differ across providers, but exact settings must be recorded.

### Controlled-budget

Question: **How do configurations compare under approximately matched resource constraints?**

Record and hold as constant as practical:

- reasoning/thinking budget;
- token/context limits;
- tool access;
- number of plan/review rounds;
- external skills/connectors;
- permission profile.

Do not claim exact computational equivalence when providers expose different controls. Describe the approximation.

### Custom

Any other experiment is valid if its differences are explicit in the run manifest.

## Repair-round escalation

If a substantive implementation-review failure survives one repair attempt, the next repair should normally use `high` reasoning even if the original implementation used `execution`.

If the same architectural failure survives the configured review-round ceiling, return to orchestration rather than spending more reasoning on an incorrect plan.

## Quality rule

Reasoning optimization exists to reduce unnecessary cost/latency without lowering the project bar. Never trade away character uniqueness, still fidelity, scroll choreography, transition continuity, spatial depth, evidence quality, or reviewer independence merely to use a cheaper reasoning setting.
