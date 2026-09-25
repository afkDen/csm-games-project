# Project State — Canonical Resume Authority

This file is the **sole mutable source of truth for current project/resume state**. Detailed agent-run artifacts, reports, decisions, and experiment records are evidence/history; they must not become competing state stores.

Only the controller/state-owner updates this file during normal operation. Other roles read it and report proposed changes back to the controller.

- **State schema version:** `2`
- **Mode:** `AUTOPILOT`
- **Phase:** `2 — approved Denji first-slice production`
- **Process tier:** `architectural`
- **Active world:** `Denji`
- **Active milestone:** `denji-first-slice`
- **Active agent-loop stage:** `implementing`
- **Plan audit round:** `1`
- **Implementation review round:** `0`
- **Approved plan artifact:** `docs/agent-runs/denji-first-slice/ORCHESTRATION_PACKET.md` (revision 2); audit: `docs/agent-runs/denji-first-slice/ORCHESTRATION_AUDIT.md`
- **Latest implementation review artifact:** `none`
- **Active goal:** implement and independently review the approved Denji first slice, then close it with validated GitHub CI evidence
- **Last verified checkpoint:** `2026-09-25: owner said “approved. proceed.”; approved Denji packet revision 2 and independent audit are production-authorized; origin/main at 410fe7bec681bc9992c1730ca5d2a757acc6c6e7 and GitHub CI run 36117198620 passed`
- **Pending owner blocker:** `none for local production; public-use rights details remain unconfirmed for the release gate`
- **Resume target:** production implementer executes the approved Denji packet at architectural/high reasoning and writes implementation evidence; controller then launches fresh independent implementation review
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

### 2026-09-25 — Denji production authorization
Tier: architectural.
Verified: owner gave the required first-slice green light; approved packet revision 2 and independent plan audit remain the baseline.
Resume: implement Denji under `AUTOPILOT`, then commission a fresh independent implementation review.
