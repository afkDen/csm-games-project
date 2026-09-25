# Orchestration Packet — github-ci-baseline

- **Revision:** 1 (2026-09-25)
- **Status:** READY FOR INDEPENDENT PLAN AUDIT
- **Tier:** `architectural`. The first Git history and remote CI gate establish a shared, security-sensitive baseline for every later milestone.
- **Area:** repository bootstrap and GitHub Actions, with no character production.
- **Objective:** commit/push the validated bootstrap and independently audited Denji plan to the empty `afkDen/csm-games-project` origin and verify CI on the exact pushed head.
- **State:** `docs/PROJECT_STATE.md` remains `AWAITING_FIRST_SLICE_APPROVAL`, active milestone `github-ci-baseline`. Denji packet revision 2 is audited; implementation waits for owner “Approved. Proceed.” Only controller writes canonical state.

## Scope and existing evidence

The visitor experience does not change. This creates a reproducible starting point for the still-led pastel, spatial, scroll-driven project without claiming any Denji visual/game/audio proof.

Git reports `No commits yet on master`; origin is configured. Planning `git ls-remote` could not connect from this sandbox, so remote branch/permission and Actions results are unverified until implementation. The lockfile is present. `npm run bootstrap:audit` runs existing portability, runtime, reasoning, process, state, agent, capability, media, setup, asset, contract, docs and secret checks; `npm run build` runs Next 16.3.5. Both passed at the last canonical checkpoint, but must pass from the actual candidate commit in CI.

`.gitignore` excludes `.env.local`, raw `assets/source/` files, dependencies, Next output and caches. A local `.env.local` exists and must never be printed. Ten owner PNGs remain private. The current secret scanner checks patterns and configured values, but does not prove excluded paths are absent from tracked Git history. Add a staged/tracked-path audit.

## Implementation sequence

1. Fresh independent auditor approves this plan before implementation.
2. Add one minimal workflow under `.github/workflows/` on push and pull request, `ubuntu-latest`, `permissions: contents: read`, compatible maintained checkout/setup-node actions, explicit Node 24 with npm cache, then `npm ci`, tracked-tree exclusion check, `npm run bootstrap:audit` and `npm run build`. Avoid path filters that skip contract/script/lockfile changes. No secrets, deployment, write token, source upload or Denji production trigger.
3. Before first commit inspect the complete staged path list and diff. Reject `.env*` except `.env.example`, raw `assets/source/` except README/.gitkeep, `node_modules`, `.next`, caches, credentials and generated artifacts. Run existing secret scan without exposing values. Repair any finding before committing.
4. Run `npm ci`, bootstrap audit and build locally on the candidate tree when feasible; capture versions, commands, exit status and non-secret evidence in `IMPLEMENTATION_REPORT.md`.
5. Commit the intended bootstrap, workflow and audited Denji plan. Verify clean local status and commit SHA. Push the intended initial/default branch; document any branch-name choice needed for an empty remote. Verify remote ref resolves to exactly that SHA.
6. Observe the Actions run on the pushed SHA. Verify workflow, head SHA, conclusion and audit/build steps. If remote access/permission remains unavailable, report the precise blocker and leave remote success unclaimed.

## Reasoning, compatibility and failure handling

- **Complexity:** critical. Initial public history crosses secret/source boundaries and local/remote state.
- **Implementer:** requested `adaptive`, resolved `high`; architectural tier forces high. Record actual model and provider effort in execution evidence, not an invented equivalent benchmark setting.
- CI validates repository reproducibility and build, not rendered Denji experience. All still, pastel, scroll, depth, continuity, game and audio gates remain assigned to Denji production/review.
- If Linux `npm ci` fails, fix reproducibility and rerun; do not replace it with `npm install` or suppress checks. If CI fails, repair in a follow-up commit and verify the new head. No force push is assumed for an ordinary failure.
- If a credential/raw source is staged, remove it before commit and recheck the index. If pushed, treat it as an incident needing rotation/history remediation before completion.

## Independent reviewer contract

Reviewer uses a fresh context and independently verifies: intended bootstrap/plan/workflow files only in initial history; no local env, owner PNG, secret, dependency/build output or cache tracked; appropriate action versions, Node version, triggers and read-only permission; `npm ci`, bootstrap audit and build pass in CI; remote ref and green run match claimed final SHA; Denji approval state remains unchanged. Report exact SHA/run URL and PASS or findings in `IMPLEMENTATION_REVIEW.md`. A local green build alone does not pass this milestone.

## Experience-template fields outside this milestone

Still aesthetic, fifteen-axis uniqueness, 0–100 scroll score, spatial depth, transition ownership, asset/media map, mobile, game, audio and rendered intermediate states belong to the approved Denji packet. Their absence here is intentional because no route code is changed.
