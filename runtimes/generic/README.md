# Generic Multi-Agent Runtime

Use this adapter when the provider/runtime is not explicitly packaged.

## Required setup

1. Give each role access to the same isolated project checkout.
2. Load the relevant canonical prompt from `portable/roles/`.
3. Make `portable/skills/` and project `docs/` readable.
4. If optional external skills in `.agents/skills/` are enabled for the experiment, expose the same set where the runtime can consume them or record the difference.
5. Map runtime tools to the logical capabilities in `portable/pipeline.manifest.json`.
6. Treat `docs/PROJECT_STATE.md` as the only mutable resume state and let only the controller/state-owner edit it.
7. Apply `docs/PROCESS_TIER_POLICY.md`; do not spawn the full role chain for safe trivial work.
8. Persist full role outputs in `docs/agent-runs/<milestone>/` for major/architectural work.
9. Use fresh contexts for the orchestration auditor and implementation reviewer.

## Execution

Follow `docs/PROCESS_TIER_POLICY.md`, `docs/AGENT_LOOP_PROTOCOL.md`, `docs/RUNTIME_PORTABILITY_CONTRACT.md`, and `docs/PORTABLE_RUNBOOK.md`.

If the runtime can spawn subagents, the controller launches each role. If it cannot, the human or an external script starts each role in a clean session and passes only the repository plus required artifacts/instructions.

## Model selection

Map logical profiles rather than copying another provider's model names:

- `high`: strongest practical reasoning configuration within the declared run budget; mandatory for controller/orchestration/audit/review;
- `adaptive`: implementation selector resolved using `docs/REASONING_POLICY.md`;
- `execution`: capable implementation setting for routine/substantial work after adaptive resolution;
- `fast`: bounded helper/research setting only.

Record concrete model IDs **and the exact reasoning control actually used** in the experiment run manifest. `adaptive` itself is never a provider setting.
