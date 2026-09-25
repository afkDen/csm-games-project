---
name: revision-resume
description: "Handle owner changes during autonomous production as bounded interrupts: checkpoint current state, orchestrate and audit the revision, implement and review it, update affected contracts, then automatically resume the previously active roadmap unless the owner asked to hold."
---

# Revision Resume

Use `docs/PROJECT_STATE.md` as the durable resume record.

## Protocol

1. Record active phase, world, milestone, and exact resume target before changing direction.
2. Classify revision impact: local visual, local game/audio, shared system, architecture, future-plan, rights/content, or product-scope.
3. Route the revision through `process-tier-routing`: trivial fixes stay bounded, normal changes get implementation + independent review, and major/architectural revisions use orchestrator → orchestration-auditor → implementer → implementation-reviewer. Apply forced escalation instead of relying on subjective “tiny” labels.
4. Rerun affected regressions plus shared-system checks when appropriate.
5. Update locked decisions only when the owner's new direction supersedes them.
6. Resume the checkpointed roadmap automatically.

Do not restart unaffected completed phases. Do not ask “what next?” when the resume target is known.
