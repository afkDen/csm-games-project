# Bootstrap Finalization Report — v7 Frozen Multi-Provider Baseline

Date: 2026-09-17

## Purpose of v7

v7 is the intentionally **frozen architectural baseline** for Chainsaw Lens. It keeps the v6 provider-neutral reasoning and multi-provider system, but removes the main remaining risk of overengineering by making workflow depth proportional to task risk, establishing one canonical state authority, and making clean provider benchmarks immutable at the input boundary.

The intended operating principle is now:

> **few authority agents, many reusable skills, proportional process, one state owner, reproducible experiments.**

## Final process architecture

Incoming work is classified before roles are spawned:

- `trivial` → bounded implementation + deterministic checks;
- `normal` → implementation + independent implementation review;
- `major` → full orchestration + independent plan audit + implementation + independent result review;
- `architectural` → full loop plus high-reasoning implementation and architectural safeguards.

The first vertical slice and every new authored character route are at least `major`. Pipeline/state/benchmark/shared cross-system architecture changes are `architectural`.

This preserves the value of subagents at real decision boundaries without paying multi-agent overhead for harmless edits.

## Canonical state

`docs/PROJECT_STATE.md` is the sole mutable source of current production/resume truth.

Only the controller/state-owner edits it during normal operation. Other roles read it and propose state changes through their reports. `docs/DECISIONS.md`, agent-run artifacts, experiment records, runtime task state, and chat history do not override it.

`npm run state:validate` verifies the state schema and required routing fields.

## Reasoning architecture

Process tier controls **workflow depth**; `docs/REASONING_POLICY.md` controls **reasoning depth**.

- controller/orchestrator/auditor/reviewer remain logical `high`;
- implementer remains `adaptive`;
- routine/substantial implementation normally resolves to `execution`;
- critical or forced-high work resolves to `high`;
- architectural process-tier work always forces high-reasoning implementation;
- repeated repair failure escalates reasoning and ultimately returns to orchestration when the plan itself appears wrong.

Runtime adapters record the actual provider-side effort, reasoning budget, or model variant rather than pretending provider labels are equivalent.

## Experiment locking

Clean cross-provider runs now use an immutable `RUN_LOCK.json` created after capability discovery/first-slice planning and before major implementation.

The lock covers:

- bootstrap fingerprint;
- source-asset fingerprint;
- owner-instruction fingerprint;
- external-skill fingerprint;
- runtime/provider mode;
- role provider/model/reasoning baseline;
- logical capabilities;
- permission profile;
- budget constraints;
- process/reasoning/state policy revisions.

The lock intentionally excludes mutable result fields such as review counts and final-gate notes.

Commands:

```bash
npm run experiment:new -- <run-id> <runtime-id>
npm run experiment:lock -- <run-id>
npm run experiment:lock:verify -- <run-id>
npm run experiment:validate -- <run-id>
```

The end-to-end lock flow was tested with a valid synthetic run. A deliberate permission-profile mutation was then introduced; lock verification correctly failed and detected the drift.

## Portable architecture retained

Canonical project behavior remains under:

- `portable/pipeline.manifest.json`;
- `portable/roles/`;
- `portable/skills/`;
- shared project/design/contracts under `docs/`.

Runtime-specific mechanics remain under `runtimes/` and compatibility wrappers such as `.agents/agents/`.

Optional third-party project skills may remain directly under `.agents/skills/`; canonical adapter sync preserves unrelated external skill directories, and benchmark runs fingerprint the enabled external set.

## Creative/interaction hierarchy retained

1. supplied stills define visual truth;
2. character truth defines behavioral/motion identity;
3. the project translates both into a pastel, colorful, luminous motion-site family;
4. spatial depth prevents flat composition;
5. scroll acts as an authored continuous timeline;
6. every route owns materially different transition grammar, animation behavior, signature interaction, game fantasy, and audio identity;
7. transitions remain reversible/retargetable and safe under interruption or rapid input changes;
8. asset/media discovery supplies missing material rather than accepting sparse placeholders;
9. FFmpeg/FFprobe prepare reproducible media derivatives when useful;
10. performance optimization preserves the authored experience before simplifying it.

## Validation performed

The finalization pass includes:

- provider-neutral portable-core validation;
- synchronized Antigravity compatibility mirrors;
- runtime-adapter validation;
- process-tier policy validation;
- canonical-state validation;
- reasoning-policy validation;
- agent-system validation;
- capability census;
- FFmpeg/FFprobe doctor;
- structure/asset/contract/document-reference validation;
- secret scanning;
- Node syntax validation for local `.mjs` scripts;
- JSON parsing checks;
- Bash installer syntax check;
- end-to-end experiment creation/lock/verify/validate test;
- negative experiment-lock drift test;
- archive safety/integrity checks during final packaging.

## Final scaffold shape

At finalization the repository contains:

- 5 canonical pipeline roles;
- 5 bundled Antigravity wrappers;
- 22 canonical project skills plus synchronized Antigravity mirrors;
- 28 local scripts (26 Node `.mjs` utilities plus shell/PowerShell installers);
- 125 Markdown files;
- no bundled external third-party skill packages;
- no experiment-run test residue;
- no `.env.local` or owner credentials;
- no owner anime/chibi source assets;
- no finished website/application implementation.

## Freeze recommendation

Do not add more authority agents, review layers, or architectural contracts speculatively. Treat v7 as the stable baseline and let actual first-slice implementation expose any future need for change. Small operational refinements should stay small; only revise the bootstrap architecture when repeated real-world evidence shows a systemic gap.
