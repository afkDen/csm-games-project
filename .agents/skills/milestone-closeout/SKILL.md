---
name: milestone-closeout
description: "Close a reviewed milestone only after evidence passes, reconcile project state/decisions/manifests/tool usage, extract only proven shared mechanisms, and define the next bounded milestone without inventing new owner approval gates."
---

# Milestone Closeout

A reviewer `PASS` is necessary but not sufficient for closeout.

## Closeout checks

- Approved scope was satisfied.
- No locked owner decision was silently changed.
- Capability routing and actual usage are truthfully reconciled.
- World uniqueness remains intact.
- New shared abstractions are proven mechanisms, not experience templates.
- Asset/audio manifests are current when production assets changed.
- `docs/PROJECT_STATE.md` has a clear next/resume target.
- Relevant decisions are locked/provisional accurately.
- Deferred P3 items are recorded with reason.

For major/architectural agent-run milestones, write `MILESTONE_CLOSEOUT.md`. For lighter tiers, retain only proportional closeout evidence. In every case, only the controller/state-owner advances canonical `docs/PROJECT_STATE.md` and starts the next target automatically when in `AUTOPILOT`.
