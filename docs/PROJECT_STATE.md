# Project State — Canonical Resume Authority

This file is the **sole mutable source of truth for current project/resume state**. Detailed agent-run artifacts, reports, decisions, and experiment records are evidence/history; they must not become competing state stores.

Only the controller/state-owner updates this file during normal operation. Other roles read it and report proposed changes back to the controller.

- **State schema version:** `2`
- **Mode:** `AWAITING_FIRST_SLICE_APPROVAL`
- **Phase:** `1 — independently audited first-slice plan complete`
- **Process tier:** `architectural`
- **Active world:** `none — Denji plan approved, production awaiting owner green light`
- **Active milestone:** `denji-first-slice`
- **Active agent-loop stage:** `controller`
- **Plan audit round:** `1`
- **Implementation review round:** `0`
- **Approved plan artifact:** `docs/agent-runs/denji-first-slice/ORCHESTRATION_PACKET.md` (revision 2); audit: `docs/agent-runs/denji-first-slice/ORCHESTRATION_AUDIT.md`
- **Latest implementation review artifact:** `none`
- **Active goal:** obtain the existing owner green light for the independently audited Denji first-slice plan
- **Last verified checkpoint:** `2026-09-25: CI source-boundary finding repaired; bootstrap audit and production build passed locally; initial commit ea41afd2fcf9ca92ac7cd9c3e085fa3c9e98c6c1 pushed to origin/main; GitHub CI run 36117062983 passed`
- **Pending owner blocker:** `Denji production awaits “Approved. Proceed.” or equivalent; public-use rights details remain unconfirmed for the release gate`
- **Resume target:** after owner approval, read `APPROVE_AND_PROCEED.md` and `PRODUCTION_AUTOPILOT.md`, switch to `AUTOPILOT`, and execute the approved Denji packet through the audited production loop
- **Latest owner directive:** use the lowest necessary process overhead on recovery; Controller handles routine Git/CI/repair tasks directly and reserves subagents for genuine major creative or architectural judgment; preserve the approved Denji production gate and creative contracts

## Authority rules

1. Resume from this file first; then open the referenced current milestone artifacts for detail.
2. Do not infer current stage from the newest filename, Git timestamp, chat transcript, or stale report when this file says otherwise.
3. `docs/DECISIONS.md` records durable decisions, not live workflow state.
4. `docs/agent-runs/**` records milestone evidence/history, not the canonical current stage.
5. `docs/experiments/runs/**` records benchmark configuration/results, not project production state.
6. Update this file only after a real stage/tier/checkpoint change; keep it compact and factual.
7. If state and evidence conflict, stop the affected transition, reconcile the evidence, and have the controller repair this file before continuing.

## Mode values

- `BOOTSTRAP` — initialization/preproduction before first production approval
- `AWAITING_FIRST_SLICE_APPROVAL` — audited first-slice plan ready for owner approval
- `AUTOPILOT` — production green light given; continue audited loop autonomously
- `HOLD` — owner explicitly asked to stop/wait
- `COMPLETE` — final release gate passed or owner-approved limits explicitly recorded

## Process tier values

- `trivial` — direct bounded implementation + relevant checks
- `normal` — implementation + independent implementation review
- `major` — full orchestrate → audit → implement → independent review loop
- `architectural` — full loop with architectural safeguards and high-reasoning implementation

See `docs/PROCESS_TIER_POLICY.md` for routing/escalation rules.

## Agent-loop stage values

`controller`, `orchestrating`, `auditing-plan`, `implementing`, `reviewing`, `repairing`, `closing`.

## Milestone note template

Append only concise checkpoint notes when useful; do not turn this file into a transcript.

```md
### YYYY-MM-DD — <milestone>
Tier: <trivial|normal|major|architectural>
Verified: <short evidence>
Resume: <next exact target>
```

### 2026-09-25 — GitHub CI baseline
Tier: normal operational recovery under the latest owner directive.
Verified: `.gitignore` source placeholder repair, tracked-source boundary, local bootstrap audit/build, pushed `ea41afd2fcf9ca92ac7cd9c3e085fa3c9e98c6c1` on `main`, and passing GitHub CI run `36117062983`.
Resume: retain the independent Denji plan approval boundary; no production implementation has started.
