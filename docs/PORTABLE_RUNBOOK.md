# Portable Runbook — Same Bootstrap, Different Models / Providers

Use this runbook when you want to test the Chainsaw Lens pipeline with another model family, provider, or orchestration runtime without changing the creative brief.

## 1. Start from a clean copy

Each independent provider/model test gets its own writable project copy or worktree. Do not let two autonomous runs modify the same checkout.

Keep identical across clean comparisons:

- bootstrap revision;
- owner-provided source assets;
- project contracts;
- first initialization instruction;
- first-slice approval wording;
- optional third-party skill set when possible;
- intentional budget/permission limits.

## 2. Choose the runtime adapter

- Antigravity: `runtimes/antigravity/`
- Any runtime with native subagents: start from `runtimes/provider-template/`
- Runtime without native subagents: `runtimes/generic/` and launch each audited role in a fresh context/session.

The adapter maps concrete provider tools/models onto the logical roles and capabilities in `portable/pipeline.manifest.json`.

## 3. Validate the project before the run

```bash
npm run adapters:sync
npm run portability:audit
npm run runtime:validate
npm run bootstrap:audit
```

If optional external skills are enabled, capture:

```bash
npm run skills:snapshot
npm run bootstrap:fingerprint
```

and record the aggregate fingerprint in the run manifest. `experiment:new` also pre-populates bootstrap/source-asset/owner-instruction/external-skill fingerprints for the isolated copy.

## 4. Create the run record

```bash
npm run experiment:new -- <run-id> <runtime-id>
```

Then fill `docs/experiments/runs/<run-id>/RUN_MANIFEST.json` after capability discovery and first-slice planning, but before implementation begins. Never place API keys or private connector credentials in the run record.

Freeze the actual benchmark inputs:

```bash
npm run experiment:lock -- <run-id>
npm run experiment:lock:verify -- <run-id>
```

If any locked input changes, start a new clean run or explicitly label the experiment non-clean; do not silently rewrite `RUN_LOCK.json`.

## 5. Launch the same canonical process policy

All providers use the same `docs/PROCESS_TIER_POLICY.md`. The first vertical slice is at least `major`, so its required topology is:

`controller → experience-orchestrator → independent orchestration-auditor → production-implementer → independent implementation-reviewer → controller`

Concrete models may differ by role. The auditor and reviewer must use isolated contexts from the role they judge.

If native subagents do not exist, separate sessions/processes are acceptable. Passing repository artifacts is acceptable. Sharing the author's hidden reasoning state is not.

## 6. Give every role the canonical source

Each runtime should load:

- its relevant role from `portable/roles/`;
- applicable canonical skills from `portable/skills/`;
- project contracts under `docs/`;
- optional external project skills from `.agents/skills/` only when deliberately enabled and supported by that adapter.

Do not rewrite the core brief to make one provider more comfortable.

## 7. Preserve evidence

For visual/interactive milestones capture the same evidence classes across runs, especially:

- opening / 25% / 50% / 75% / peak / portal / game states;
- reverse scroll around representative progress points;
- rapid direction change;
- eligible mid-transition control retargeting;
- duplicate input safety;
- idle life;
- mobile composition;
- reduced-motion/quality path;
- minigame loop;
- audio lifecycle;
- sibling uniqueness comparison.

A provider without rendered/browser inspection cannot independently complete the visual review gate. Pair it with an external browser harness or mark that capability blocked.

## 8. Compare the outputs after the run

Use `docs/PROVIDER_BENCHMARK_RUBRIC.md` and the same human reviewer criteria for every run. Record both measurable failures and qualitative visual/interaction judgment.

Do not declare one model globally superior from a single run. Record what configuration produced what result.

## 9. Mixed-provider runs are valid

You may intentionally mix providers by role, for example one model for orchestration, another for implementation, and another for review. Mark the run as `mixed-provider` so the result is not attributed to a single model.

## 10. Changing the bootstrap resets the benchmark baseline

If you improve a contract, skill, role, or adapter after seeing one provider's result, treat that as a new bootstrap revision. Restart comparison runs from the same revised baseline rather than giving only later providers the improved instructions.

## Reasoning configuration

Use `docs/REASONING_POLICY.md` before each run. Keep controller/orchestrator/auditor/reviewer at logical `high`. For implementation, classify the milestone and resolve `adaptive` before launch. Then map the resolved profile through the runtime adapter.

For a clean comparison, record the exact provider-side control in `RUN_MANIFEST.json`: effort label, thinking budget, model variant, or explicit `none`. `high` by itself is not enough evidence of an equivalent configuration. Choose and record experiment mode: `best-capability`, `controlled-budget`, or `custom`.

After a run manifest is fully populated and locked, validate its reasoning/configuration reproducibility with `npm run experiment:validate -- <run-id>`. This rejects blank model/provider fields, unresolved adaptive implementation, critical work below `high`, and missing exact provider reasoning controls.
