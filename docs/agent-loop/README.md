# Agent Run Artifacts

Each `major`/`architectural` milestone writes a folder under `docs/agent-runs/<milestone>/` containing the audited planning and review artifacts.

Minimum sequence:

1. `ORCHESTRATION_PACKET.md`
2. `CAPABILITY_ROUTING.md`
3. `ORCHESTRATION_AUDIT.md`
4. `IMPLEMENTATION_REPORT.md`
5. `IMPLEMENTATION_REVIEW.md`
6. `MILESTONE_CLOSEOUT.md`

Planning-only bootstrap milestones may stop after step 3 until owner approval. Repair passes update the implementation report/review with pass numbers rather than erasing failed evidence.

`normal` work may retain a lighter implementation/review record; `trivial` work should not manufacture full agent-run paperwork unless it escalates. Canonical live state always resides in `docs/PROJECT_STATE.md`.
