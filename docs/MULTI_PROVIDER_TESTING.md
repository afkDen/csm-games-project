# Multi-Provider Testing Protocol

Use this protocol to run the same bootstrap through different models/providers while keeping the comparison meaningful.

## 1. Freeze the input

For each independent run, use the same:

- bootstrap v7 archive or same source commit;
- owner-supplied stills/source assets;
- `ASSET_MANIFEST.json` starting state;
- project contracts, including `docs/REASONING_POLICY.md`;
- first owner instruction;
- first-slice approval wording;
- rights/provenance assumptions;
- external skill set when you intend those skills to be part of the comparison.

Create a fresh copy/worktree per run. Never point two autonomous implementations at the same writable checkout.

## 2. Configure an adapter

Start from `runtimes/provider-template/adapter.example.json` and map logical capabilities to the provider/runtime's real tools.

Use the same logical role topology even when concrete models differ:

`controller → orchestrator → independent plan auditor → implementer → independent implementation reviewer → controller`

A single provider may use multiple model tiers. Different providers may also be mixed within one experimental run, but record that as a mixed-provider run rather than attributing the outcome to one model.

## 3. Freeze optional skill capability

If external project skills are present under `.agents/skills/`, run:

```bash
npm run skills:snapshot
```

Record the aggregate fingerprint in the run manifest. If another runtime cannot consume the same external skill, record that capability difference explicitly.

For the cleanest baseline, compare providers first with bundled canonical skills only; then run a second experiment with an identical enabled external-skill set if desired.

## 4. Record a run manifest

Create one with:

```bash
npm run experiment:new -- <run-id> <runtime-id>
```

or manually copy `docs/experiments/RUN_MANIFEST_TEMPLATE.json` into the isolated run and fill it before implementation.

Do not put secrets in the manifest. After Phase 0 capability discovery and the first-slice plan have resolved the starting implementation configuration, freeze the inputs before major implementation:

```bash
npm run experiment:lock -- <run-id>
npm run experiment:lock:verify -- <run-id>
```

The lock freezes bootstrap, source assets, owner instruction, external skills, runtime/model/capability/permission/budget inputs, and policy revisions without embedding private asset contents or secrets. Before comparing completed runs, execute `npm run experiment:validate -- <run-id>`; it also verifies the experiment lock.

## 5. Keep evidence comparable

For the first vertical slice, capture the same evidence classes:

- orchestration packet + audit;
- capability routing;
- route captures at opening / 25 / 50 / 75 / peak / portal / game;
- reverse-scroll captures around 25 / 50 / 75;
- mid-transition control/retarget test result;
- duplicate activation and rapid direction-change result;
- mobile state;
- reduced-motion/quality state;
- game loop evidence;
- audio lifecycle evidence;
- performance/quality notes;
- uniqueness matrix against any completed siblings.

## 6. Measure without changing the brief

Useful run-level metrics include:

- audit rounds before implementation approval;
- implementation review rounds before pass;
- number/severity of contract findings;
- transition continuity failures found/repaired;
- dead-scroll findings;
- character-uniqueness findings;
- asset provenance issues;
- runtime/tool blockers;
- final release-gate pass/fail;
- human notes about visual/interaction quality using the same review rubric.

Use `docs/PROVIDER_BENCHMARK_RUBRIC.md` for consistent qualitative scoring/evidence notes.

Do not optimize one provider's prompt or contracts mid-comparison unless you restart the other runs from the same revised bootstrap.

## 7. Preserve independence

Do not show Provider B Provider A's implementation or review findings in a clean benchmark. If you intentionally do so, label it as a transfer/repair experiment.

## 8. Runtime limitations

A provider without native subagents can still run the pipeline with separate fresh sessions. A provider without browser/rendered inspection cannot fully satisfy visual implementation review by itself; pair it with an external browser/test harness or mark the relevant evidence capability blocked.

## 9. Interpret results narrowly

The result describes the tested configuration: bootstrap revision, provider, role/model mapping, tools, permissions, external skills, and budgets. Do not treat one project run as a universal ranking of model intelligence.

## Freeze reasoning configuration

Use the same reasoning policy revision for every clean run. Record whether the experiment is `best-capability`, `controlled-budget`, or `custom`. Fixed-high roles stay high; implementation resolves adaptively from milestone complexity. Record exact effort/budget/model-variant controls because identically named provider settings are not assumed equivalent. If one provider exposes no separate reasoning control, record that as a configuration variance rather than inventing a mapping.
