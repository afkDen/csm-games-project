---
name: process-tier-routing
description: "Classify work as trivial, normal, major, or architectural so the pipeline uses the lightest safe agent/review path without weakening high-risk creative or architectural gates."
---

# Process Tier Routing

Use this skill whenever work is being admitted into the production loop.

Read `docs/PROCESS_TIER_POLICY.md` and classify the task as `trivial`, `normal`, `major`, or `architectural` before choosing the agent path.

## Required behavior

1. Prefer the lightest tier that safely covers the work.
2. Apply forced-escalation triggers before starting implementation.
3. Record the chosen tier in `docs/PROJECT_STATE.md`.
4. If new ambiguity/risk appears, escalate immediately; never preserve a lower tier just because work has already started.
5. Do not create full orchestration paperwork for trivial work.
6. Do not bypass independent review for normal/major/architectural work.
7. Treat every new character experience and first vertical slice as at least `major`.
8. Treat portable-pipeline, state-ownership, benchmark, or shared cross-system architecture changes as `architectural`.

The process tier controls the **workflow depth**. Use `reasoning-routing` separately to control **reasoning depth**.
