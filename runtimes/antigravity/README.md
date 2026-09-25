# Antigravity Adapter

This preserves the original workspace-native Antigravity flow while consuming the same portable core used by other providers.

- runtime compatibility files: `.agents/agents/` and `.agents/skills/`
- canonical role logic: `portable/roles/`
- canonical project-local skills: `portable/skills/`
- Antigravity setup details: `docs/ANTIGRAVITY_SETUP.md`

Run `npm run adapters:sync` after intentionally editing portable skills. It refreshes only the bundled canonical skill names and leaves unrelated optional external skill directories in `.agents/skills/` untouched.

Run `npm run portability:audit` and `npm run runtime:validate` before packaging.

The Antigravity adapter may declare runtime-specific tool names and model selectors. Those declarations must not leak back into provider-neutral core contracts.

Optional external project skills may also live directly under `.agents/skills/`. Record them with `npm run skills:snapshot` for comparable provider experiments.
