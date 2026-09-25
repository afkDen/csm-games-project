# New Runtime / Provider Adapter Template

Copy `adapter.example.json` to a runtime-specific folder when you want a repeatable integration.

A conforming adapter must document:

1. how each canonical role in `portable/roles/` is launched;
2. which concrete model and reasoning control map to each resolved logical profile/role;
3. how orchestration-auditor and implementation-reviewer get isolated contexts;
4. how repository read/write and command execution work;
5. how browser/rendered evidence is captured;
6. how optional external skills under `.agents/skills/` are exposed, translated, or marked unavailable;
7. how FFmpeg/FFprobe is invoked when available;
8. how secrets remain outside prompts/repository artifacts;
9. how repair/replan loops are bounded;
10. how run artifacts are persisted under `docs/agent-runs/`;
11. how `adaptive` implementation reasoning is resolved and how the exact provider effort/budget/model-variant setting is recorded.

Run `npm run runtime:validate` after editing packaged adapters.
