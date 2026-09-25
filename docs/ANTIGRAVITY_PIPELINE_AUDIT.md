# Antigravity Adapter Audit

## Scope

This document audits the bundled Antigravity adapter only. The provider-neutral project truth lives in `portable/` and the shared contracts under `docs/`.

## Preserved adapter behavior

- `lens-autopilot` remains the primary Antigravity controller wrapper.
- Four role-isolated Antigravity subagents wrap the canonical orchestrator, plan auditor, implementer, and implementation reviewer roles.
- `.agents/skills/` contains synchronized mirrors of the twenty-one canonical project skills and may also contain optional reviewed third-party project skills.
- The adapter keeps capability census/routing, bounded three-round plan/review loops, durable revision/resume state, rendered evidence review, transition continuity, world uniqueness, FFmpeg media preparation, reasoning-routing, and final release gates.
- `npm run agents:validate` checks the bundled Antigravity agent definitions and referenced canonical skill mirrors.
- `npm run adapters:sync` refreshes canonical skill mirrors without deleting unrelated optional external skill directories.

## Model/tool boundary

Concrete Antigravity model selectors and tool names are adapter concerns. The packaged agent wrappers currently use inherited high-capability roles for planning/audit/review while the production implementer now inherits the selected model as a safety-first interactive default; adaptive downshifts are performed only in separately pinned contexts where the exact effort/model can be recorded. If the Antigravity schema/model menu changes, update `runtimes/antigravity/` and `.agents/agents/`; do not rewrite the portable creative/quality core.

## Owner workflow

For Antigravity, the owner can continue using the project under the normal scratch project folder, add source assets/optional keys, select the controller wrapper, provide `ONE_SHOT_INIT_PROMPT.md`, then approve the independently audited first-slice plan once. Optional external skills may be installed directly into the project's `.agents/skills/` after explicit trust opt-in.
