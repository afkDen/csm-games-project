# Independent Orchestration Audit — github-ci-baseline

**Verdict: REVISE**

- Audited: `ORCHESTRATION_PACKET.md` revision 1 and `CAPABILITY_ROUTING.md`, 2026-09-25.
- Role: fresh independent orchestration auditor. No production code or canonical state was changed.
- Tier and reasoning: `architectural` is justified by the first remote history and private-source boundary. The packet's critical complexity and implementer `adaptive` → `high` resolution satisfy the process and reasoning policies.

## Blocking finding

The packet assumes `.gitignore` permits `assets/source/**/.gitkeep` and `assets/source/**/README.md`, but the current pattern `assets/source/**/*` also ignores their parent directories. `git check-ignore -v` reports that pattern for the required `assets/source/official-anime-stills/character-holding-glasses/.gitkeep`, a private PNG, and `assets/source/chibi/README.md`; `git ls-files --others --exclude-standard assets/source` returns no paths. `scripts/verify-setup.mjs`, which runs within `npm run bootstrap:audit`, requires that `.gitkeep` path. An ordinary initial `git add -A` therefore omits it, and CI fails even though the local workspace audit passes.

**Required packet revision:** include a bounded `.gitignore` correction or an explicit safe staging method for the required placeholder/readme files. Make the precommit proof check the actual index after staging: the required `.gitkeep` is present, only permitted placeholder/readme paths exist beneath `assets/source/`, every owner PNG is absent, and local environment/dependency/build/cache paths are absent. Demonstrate the private PNGs remain ignored. Repeat the tracked-path check in CI before the bootstrap audit. Do not rely on a local workspace audit to prove what the first commit contains.

## Other assessed gates

- The proposed push and `pull_request` workflow, read-only `contents: read` permission, `npm ci`, bootstrap audit and build cover this repository's current scripts without adding a Denji production trigger. Current official [checkout](https://github.com/actions/checkout) and [setup-node](https://github.com/actions/setup-node) documentation show maintained v7 usage, Node 24 and npm caching; the implementer should confirm exact tags at edit time as the packet says.
- The current tree has no commits or tracked files and no workflow. The lockfile is present. The private owner PNGs are under `assets/source/`; `public/assets/derived/` contains placeholders only. The existing secret scanner checks configured values and high-confidence text patterns, but does not substitute for an index/path audit. If the first commit is pushed with a sensitive file, the packet correctly treats it as an incident rather than a routine CI repair.
- Controller-supplied remote verification supersedes the packet's stale planning `git ls-remote` uncertainty: origin is empty, the controller has ADMIN access, Actions are enabled, there is no default branch and no run yet. This is a nonblocking evidence update. The implementer must still verify the actual pushed ref, SHA and completed run.
- Preserve `docs/PROJECT_STATE.md` in `AWAITING_FIRST_SLICE_APPROVAL` through this CI milestone. The approved Denji revision 2 packet remains an audited plan; this CI push grants no character production authority. Only the controller changes canonical state and handles the later owner “Approved. Proceed.” gate.
- The capability routing is proportionate: Git/GitHub observation, official version-sensitive docs, local scripts, isolated review and command/filesystem access are material. Browser UI is conditional on CLI/API failure. Character, media, game and audio capabilities are correctly deferred or inapplicable because this milestone changes no experience code. The fifteen-axis world uniqueness check is inapplicable here.

After the index/ignore correction is explicit in the packet, the plan can return for a focused audit. This verdict makes no claim about a green remote CI run or implementation outcome.
