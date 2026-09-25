# Runtime Portability Contract

## Purpose

The project must be testable with different model families, providers, and agent runtimes without changing the underlying creative brief or quality bar.

The portable core owns **what must happen**. A runtime adapter owns **how that runtime makes it happen**.

## Canonical boundary

Canonical, provider-neutral sources are:

- `portable/pipeline.manifest.json`
- `portable/roles/`
- `portable/skills/`
- root project/product/design files
- all non-runtime-specific contracts under `docs/`

Runtime adapters under `runtimes/` and compatibility wrappers such as `.agents/agents/` may map those instructions to a provider's syntax, but they must not weaken, reorder, or silently reinterpret the core quality gates.

`.agents/skills/` has a dual practical role for the Antigravity adapter: it contains synchronized copies of canonical project skills and may also contain optional third-party project-local skills. Those optional external skills are **not** canonical portable policy. Other runtime adapters may expose the same files, translate them, or mark them unavailable, but the difference must be recorded for fair comparisons.

## Provider neutrality

Do not place concrete provider/model identifiers, API syntax, vendor tool names, or reasoning-control flags in portable role or skill instructions unless the content is explicitly an example.

Use logical profiles from `docs/REASONING_POLICY.md` instead:

- `high` — strongest practical reasoning configuration within the declared run budget;
- `execution` — strong implementation configuration for well-specified work;
- `fast` — bounded helper/research profile only;
- `adaptive` — implementer-only selector that must resolve to `execution` or `high` before launch.

The runtime adapter maps resolved profiles to concrete models **and reasoning controls**. Provider effort labels, thinking budgets, and model variants are not assumed equivalent. Benchmark runs record both the resolved profile and the exact provider setting actually used.

## Process-tier equivalence

Every runtime must preserve `docs/PROCESS_TIER_POLICY.md`. An adapter may change invocation mechanics, but it may not force all work through the expensive full loop or, conversely, down-tier high-risk work. The first vertical slice/new character experiences are at least `major`; portable-pipeline/state/benchmark/shared cross-system architecture changes are `architectural`.

## Canonical state equivalence

`docs/PROJECT_STATE.md` is the sole mutable current-state/resume authority. The runtime controller/state-owner is the only normal writer. Adapter-specific memory, chat state, task queues, or session metadata may assist execution but must not become a competing source of project truth.

## Role isolation

The following independence is mandatory for a full pipeline run:

- the orchestration auditor must not be the same uninterrupted context that authored the orchestration packet;
- the implementation reviewer must not be the same uninterrupted context that implemented the milestone;
- findings must be passed as artifacts/messages, not by sharing hidden reasoning state;
- the controller may retain project state but must not replace independent review with self-approval.

Native provider subagents are preferred when available. Fresh isolated sessions, processes, or manually started contexts are valid substitutes.

## Capability equivalence

Adapters map provider-specific tools onto logical capabilities such as:

- `filesystem.read`
- `filesystem.write`
- `command.exec`
- `web.search`
- `web.fetch`
- `browser.inspect`
- `browser.automate`
- `subagent.spawn_or_isolated_context`
- `media.ffmpeg`
- `current_docs.lookup`
- `image.generate`
- `external_asset.search`

A capability is judged by what it enables, not by its vendor name.

If a capability is unavailable, record `BLOCKED` or use the documented fallback. Do not pretend that a weaker capability is equivalent when it cannot provide the required evidence.

## External skill equivalence

Optional external project skills are experiment inputs, not hidden defaults.

For a clean comparison:

- use only bundled canonical skills across every run; or
- enable the same external skill set for every run where technically possible;
- capture `npm run skills:snapshot` and record its aggregate fingerprint;
- record any runtime that cannot consume an enabled external skill as a capability variance.

Do not silently copy useful findings from one provider's run into another clean benchmark.

## Fair cross-provider testing

When comparing providers/models, begin each run from the same pristine bootstrap revision and owner-supplied asset set.

Record at minimum:

- pipeline/bootstrap version and source hash/commit;
- provider/runtime;
- concrete model used for each role;
- date;
- permission profile;
- available logical capabilities;
- optional external skills/connectors enabled and external-skill fingerprint;
- owner instruction/approval state and owner-instruction fingerprint;
- source-asset fingerprint;
- process-tier/state-schema policy revisions;
- experiment lock verification status;
- context/token/tool budget constraints if intentionally imposed;
- experiment mode (`best-capability`, `controlled-budget`, or `custom`);
- requested/resolved logical reasoning profile per role and exact provider reasoning control actually used;
- plan-audit rounds;
- implementation-review rounds;
- blockers/fallbacks;
- final release-gate result.

Do not allow one run to inherit generated assets, implementation code, review findings, or orchestration artifacts from another run unless the experiment is explicitly testing repair/transfer learning rather than independent execution.

## Adapter conformance

A runtime adapter is conforming only if it can explain:

1. how each canonical role is launched;
2. how clean-context independence is achieved;
3. how role outputs are persisted;
4. how tools map to logical capabilities;
5. how reasoning profiles map to concrete models and effort/budget/model-variant controls;
6. how the controller performs bounded loops;
7. how browser/rendered evidence is obtained for visual milestones;
8. how secrets and source assets stay private;
9. how optional external skills are exposed or declared unavailable;
10. what fallback is used when native subagents do not exist;
11. how process tiers are routed without weakening forced escalation;
12. how canonical project state remains single-writer;
13. how clean benchmark runs create/verify `RUN_LOCK.json`.

## No provider-shaped creative drift

A runtime may suggest implementation techniques, but it may not replace the project's still-led pastel direction, spatial depth, character-authentic behavior, scroll choreography, transition continuity, world uniqueness, asset-gap strategy, or experience-first performance doctrine simply because another style is easier for that model.

## Operational reference

Use `docs/PORTABLE_RUNBOOK.md` for the execution procedure, `docs/EXPERIMENT_LOCK_CONTRACT.md` for clean-run immutability, and `docs/PROVIDER_BENCHMARK_RUBRIC.md` for cross-run comparison.
