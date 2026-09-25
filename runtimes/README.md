# Runtime Adapters

The project is provider-neutral at its core. Runtime adapters map the portable pipeline onto a concrete agent environment.

Included:

- `antigravity/` — compatibility adapter for the original Antigravity custom-agent workflow.
- `generic/` — provider-neutral instructions for any runtime that can start isolated roles and operate on the project filesystem.
- `provider-template/` — adapter template for a new provider/runtime.

Canonical creative/engineering behavior lives in `portable/` and the root `docs/` contracts. Do not edit those contracts merely to satisfy a provider's syntax; adapt the runtime around the core.

## Project-local external skills

`.agents/skills/` is allowed to contain optional third-party skills alongside the synchronized canonical Antigravity mirrors. This is convenient for the owner's project layout and does not make those external skills part of the portable core.

Another runtime may read those external `SKILL.md` files directly, translate them through its adapter, or mark them unavailable. For provider comparisons, record the external-skill fingerprint with `npm run skills:snapshot` so capability differences are visible.

See `docs/PORTABLE_RUNBOOK.md` for the complete run procedure.

All adapters must preserve process-tier routing, canonical single-writer `docs/PROJECT_STATE.md`, and clean-run experiment locking when benchmarking.
