# Approve and Proceed

When the project state is `AWAITING_FIRST_SLICE_APPROVAL` and the owner clearly approves the full audited direction with **“Approved. Proceed.”** or equivalent:

1. change `docs/PROJECT_STATE.md` mode to `AUTOPILOT`;
2. preserve the approved first-slice orchestration packet as the creative/technical baseline;
3. read `PRODUCTION_AUTOPILOT.md`;
4. if this checkout is a benchmark experiment, ensure its run manifest is filled and execute `npm run experiment:lock -- <run-id>` before major implementation;
5. continue autonomously using process-tier routing: lightweight handling for trivial/normal work and the full audited loop for major/architectural milestones.

## Required routing after approval

Use `docs/PROCESS_TIER_POLICY.md`. Major/architectural work follows `experience-orchestrator → orchestration-auditor → production-implementer → implementation-reviewer → controller closeout`; normal work uses implementation + independent review; trivial work remains bounded and direct.

The plan auditor and implementation reviewer independently activate applicable skills/MCPs. They do not merely inspect usage claims.

## Owner revisions

If the owner asks for a change mid-production, treat it as a bounded interrupt. Checkpoint the current resume target, route substantive changes through the same audited loop, verify the affected states, then resume automatically.

Only stop on explicit hold/wait, genuine owner-only blocker, consequential unresolved creative/rights fork, or final verified completion.
