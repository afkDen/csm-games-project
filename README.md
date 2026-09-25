# Chainsaw Lens Experience — Frozen Multi-Provider Bootstrap v7

A production scaffold for an unofficial portfolio interaction study built around five eyewear portals, five distinct still-led pastel character worlds, motion-site/Scrollcraft choreography, spatial depth, adaptive asset discovery, reversible transition systems, FFmpeg-assisted media preparation, and five substantive chibi-led minigames.

This package is **not the finished website**. It is a portable creative/software-production system intended to be run with different model families and agent providers while preserving one canonical brief and evidence standard.

## Why v7 is the frozen baseline

v7 keeps the v6 provider-neutral reasoning system and adds the final anti-overengineering controls:

- **process-tier routing** — trivial work stays light, normal work gets implementation + independent review, major work gets the full audited loop, and architectural work gets the full loop plus high-reasoning implementation;
- **one canonical live state** — `docs/PROJECT_STATE.md` is the sole mutable resume authority and only the controller/state-owner updates it;
- **experiment locks** — clean provider benchmarks freeze bootstrap, source assets, owner instruction, external skills, runtime/model/reasoning settings, capabilities, permissions, budgets, and policy revisions before major implementation.

The intended architecture is therefore **few authority agents, many reusable skills, and proportional process** rather than spawning agents for every small task.

## Owner workflow

1. Put source stills/chibis under `assets/source/` as described in `START_HERE.md`.
2. Copy `.env.example` to `.env.local` only if optional integrations need keys.
3. Choose a runtime/provider adapter under `runtimes/`.
4. Give the runtime the repository root and `ONE_SHOT_INIT_PROMPT.md`.
5. Let it run the independently audited first-slice planning gate.
6. Review that plan and reply **“Approved. Proceed.”** once.
7. Production continues autonomously with process-tier routing.

For clean provider/model comparisons, use a fresh checkout per run and follow `docs/MULTI_PROVIDER_TESTING.md`.

## Production routing

```text
incoming task
    ↓
process-tier-routing
    ├─ trivial       → implement + relevant checks
    ├─ normal        → implement → independent review
    ├─ major         → orchestrate → independent plan audit → implement → independent review
    └─ architectural → full audited loop + high-reasoning implementation
```

The first vertical slice and every new authored character experience are at least `major`. Changes to the portable pipeline, canonical state ownership, benchmark method, or shared cross-system architecture are `architectural`.

## Canonical multi-agent roles

- `controller` — sole state owner and process router
- `experience-orchestrator` — major/architectural planning
- `orchestration-auditor` — independent plan/design/tooling challenge
- `production-implementer` — bounded execution/repair
- `implementation-reviewer` — independent running-result review

Concrete provider/model names are runtime configuration, not project truth.

## Key portability files

- `portable/pipeline.manifest.json` — machine-readable canonical pipeline
- `portable/roles/` — provider-neutral role prompts
- `portable/skills/` — canonical project skills
- `docs/PROCESS_TIER_POLICY.md` — proportional workflow depth
- `docs/REASONING_POLICY.md` — provider-neutral reasoning depth
- `docs/PROJECT_STATE.md` — sole mutable resume authority
- `docs/RUNTIME_PORTABILITY_CONTRACT.md` — adapter conformance
- `docs/EXPERIMENT_LOCK_CONTRACT.md` — immutable benchmark inputs
- `docs/MULTI_PROVIDER_TESTING.md` — fair comparison protocol
- `docs/PROVIDER_BENCHMARK_RUBRIC.md` — evidence-based comparison
- `runtimes/` — provider/runtime adapters
- `.agents/` — Antigravity compatibility adapter/mirror plus optional project-local external skills

## Locked creative/engineering direction

- supplied stills define visual truth;
- character truth defines behavioral identity;
- overall tone is pastel/colorful/luminous rather than dark-by-default;
- major scenes must feel spatial rather than flat;
- scroll is an authored continuous timeline;
- character routes own materially different animations, transition topologies, signature interactions, games, and audio identities;
- transitions are reversible/retargetable and interruption-safe;
- asset discovery remains gap-driven and flexible;
- FFmpeg/FFprobe are preferred development-time media tools when useful, never visitor dependencies;
- performance is a usability floor, not permission to flatten the experience.

## Validation

```bash
npm run adapters:sync
npm run portability:audit
npm run runtime:validate
npm run reasoning:validate
npm run process:validate
npm run state:validate
npm run agents:validate
npm run capabilities:census
npm run skills:snapshot
npm run media:doctor
npm run bootstrap:verify
npm run contracts:audit
npm run docs:check
npm run secrets:scan
npm run assets:validate
npm run bootstrap:audit
```

For a benchmark run:

```bash
npm run experiment:new -- <run-id> <runtime-id>
# fill the run manifest after capability discovery/first-slice planning
npm run experiment:lock -- <run-id>
npm run experiment:lock:verify -- <run-id>
npm run experiment:validate -- <run-id>
```
