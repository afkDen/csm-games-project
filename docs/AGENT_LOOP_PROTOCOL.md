# Provider-Neutral Multi-Agent Loop Protocol

This is the authoritative production-control loop for the project.

## Canonical roles

1. **controller** — primary state owner; called `lens-autopilot` in the Antigravity adapter.
2. **experience-orchestrator** — high-reasoning plan + capability routing.
3. **orchestration-auditor** — independent high-reasoning plan/design/tooling audit.
4. **production-implementer** — execution/repair.
5. **implementation-reviewer** — independent high-reasoning running-result review.

Canonical role prompts live in `portable/roles/`.

## Process-tier router

Before choosing a loop, the controller applies `docs/PROCESS_TIER_POLICY.md`:

- `trivial` → implement/check/close;
- `normal` → implement → independent review → close;
- `major` → full audited loop;
- `architectural` → full audited loop + high-reasoning implementation and architectural safeguards.

New character experiences and the first vertical slice are at least `major`. Pipeline/state/benchmark/shared cross-system architecture changes are `architectural`.

## Full audited loop (`major` / `architectural`)

```text
controller
  ↓
experience-orchestrator
  ↓
orchestration-auditor
  ├─ REVISE → orchestrator → auditor (max 3 rounds)
  ↓ APPROVED FOR IMPLEMENTATION
production-implementer
  ↓
implementation-reviewer
  ├─ FAIL → implementer repair → reviewer (max 3 rounds)
  ↓ PASS
controller milestone closeout
  ↓
next milestone
```

If the same fundamental issue survives three rounds, return to orchestration rather than continuing a repair treadmill.

## Independence rule

The orchestration auditor must use a fresh context from the orchestrator. The implementation reviewer must use a fresh context from the implementer. Native subagents, separate sessions, separate processes, or external orchestration are all acceptable if they preserve this independence.

Do not share hidden reasoning state between author and auditor/reviewer. Pass repository artifacts, explicit messages, test evidence, and findings.

## Why there are two review gates

The project can fail before code begins if the plan is generic, flat, dark-by-default, section-based, weakly tied to supplied stills/character behavior, ignores a relevant capability, repeats another character world, or defines weak acceptance criteria. The plan auditor exists to catch those failures. The implementation reviewer verifies whether the approved plan became a convincing, correct running experience.

## Capability evaluation rule

Every major/architectural milestone gets the full capability census. Normal work gets a scoped census proportional to the task. Trivial work may skip exhaustive census when capability uncertainty is not itself a risk. For the full census, the orchestrator and auditor independently consider:

- all canonical project skills under `portable/skills/`;
- runtime-native/global skills and connectors;
- configured MCP/API resources;
- browser/research/current-documentation capabilities;
- local scripts and production infrastructure;
- FFmpeg/FFprobe when media transformation/inspection is relevant;
- external testing/profiling tools already installed.

No capability is silently omitted. No capability is invoked merely to create usage evidence.

## Runtime/model policy

The portable pipeline uses logical profiles:

- controller/orchestrator/auditor/reviewer: fixed `high` reasoning profile;
- implementer: `adaptive`, resolved per milestone to `execution` or `high`;
- bounded research/helper work may use `fast` only where mistakes are cheap and independently verifiable.

Use `docs/REASONING_POLICY.md` for complexity classification and forced-high triggers. Runtime adapters map the resolved profile to concrete provider/model/reasoning controls. Benchmark runs must record the exact setting actually used, not merely the intended logical profile.

## Skill-active auditing

The auditor/reviewer must read and materially apply applicable canonical skills rather than merely confirm that the plan/implementation mentioned them. For visual milestones, rendered/browser evidence is required; DOM assertions alone do not establish WebGL/canvas quality.

## Artifact protocol

Each `major`/`architectural` milestone writes under `docs/agent-runs/<milestone>/`:

- `ORCHESTRATION_PACKET.md`
- `CAPABILITY_ROUTING.md`
- `ORCHESTRATION_AUDIT.md`
- `IMPLEMENTATION_REPORT.md`
- `IMPLEMENTATION_REVIEW.md`

The controller owns stage/state updates and closeout.

## Approval boundary

Initialization stops after an independently audited first-slice plan reaches `APPROVED FOR IMPLEMENTATION`, then waits for the owner's one project-wide production green light. After approval, production continues through the same loop without routine owner gates.

## Revision interrupt / resume

Owner corrections during autopilot are interrupts, not resets: checkpoint → audited revision plan → implementation → independent review → resume exact prior target. Only stop on explicit hold/wait, genuine owner-only blocker, or verified completion.

## Portability requirement

All providers/runtimes must follow `docs/RUNTIME_PORTABILITY_CONTRACT.md`. An adapter may change invocation mechanics but not role independence, gates, artifacts, or quality standards.

## Canonical state authority

`docs/PROJECT_STATE.md` is the sole mutable resume authority. Only the controller/state-owner updates it during normal operation. Agent-run artifacts and experiment manifests remain evidence/history and must not compete with current state.
