# Initialize Project — Runtime-Neutral Bootstrap Playbook

This file is executed by the active pipeline controller after the owner supplies assets/optional keys and provides `ONE_SHOT_INIT_PROMPT.md`.

## Phase 0A — Portable core and preflight

1. Read `portable/pipeline.manifest.json`, the canonical controller role, root contracts, `docs/PROCESS_TIER_POLICY.md`, canonical `docs/PROJECT_STATE.md`, `docs/RUNTIME_PORTABILITY_CONTRACT.md`, and `docs/AGENT_LOOP_PROTOCOL.md`.
2. Identify the active runtime adapter or create a mapping from `runtimes/provider-template/adapter.example.json`.
3. Run `npm run portability:audit`, `npm run runtime:validate`, `node scripts/preflight.mjs`, and `node scripts/capability-census.mjs`. Never print secret values.
4. If using the Antigravity adapter, also run `npm run agents:validate`. Other runtimes use their own adapter checks.
5. Inventory source assets by category. Do not move raw owner art to `public/`.
6. Record conservative provenance (`OWNER-SUPPLIED / DETAILS UNCONFIRMED`) when details are unknown.

## Phase 0B — Skills and capabilities

1. Verify canonical project-local skills under `portable/skills/`.
2. Discover runtime-native/global skills, connectors/MCPs, browser/research helpers, and provider tools without assuming any specific vendor.
3. Review external-skill trust boundaries in `docs/SKILL_INSTALL.md` before enabling mutable third-party sources. Optional third-party project skills may live directly under `.agents/skills/`; capture `npm run skills:snapshot` when benchmarking providers.
4. Verify Playwright/browser inspection/automation capability for rendered review.
5. Run `npm run media:doctor` and record FFmpeg/FFprobe availability without installing anything or treating availability as usage.
6. Configure/verify optional current-doc, motion/design, asset-provider, or other integrations only where materially useful and available.
7. Update `docs/CAPABILITY_REGISTRY.md` with status only—never credentials.

If interactive auth is required, record `BLOCKED — owner auth required`, complete all other work, then ask only for that external action.

## Phase 0C — Repository technical foundation

If application dependencies/source foundation do not yet exist, initialize only the minimum technical shell necessary for risky prototypes described in `MASTER_PROMPT.md`. Avoid speculative state frameworks, physics engines, CMS/backends, generic world renderers, or complete five-world implementation.

Keep `assets/source/` private/raw and `public/assets/derived/` intentional/shipping only.

## Phase 0D — Validate bootstrap

Run:

```text
npm run portability:audit
npm run runtime:validate
npm run state:validate
npm run process:validate
npm run media:doctor
npm run bootstrap:verify
npm run contracts:audit
npm run docs:check
npm run secrets:scan
npm run assets:validate
```

When using Antigravity, also run `npm run agents:validate`.

Repair structural issues before first-slice orchestration.

## Phase 1 — Audited first vertical-slice orchestration

Default to Denji unless owner inputs establish a different first slice.

1. Create an agent-run folder, e.g. `node scripts/new-agent-run.mjs denji-first-slice`.
2. Confirm the first slice is process tier `major` (or `architectural` if shared architecture risk requires it), record that in `docs/PROJECT_STATE.md`, then set project stage to `orchestrating`.
3. Start the canonical `experience-orchestrator` role from `portable/roles/experience-orchestrator.md` using the runtime's role isolation mechanism. It writes `ORCHESTRATION_PACKET.md` + `CAPABILITY_ROUTING.md`.
4. Set stage to `auditing-plan`.
5. Start the canonical `orchestration-auditor` role from `portable/roles/orchestration-auditor.md` in a fresh independent context. It writes `ORCHESTRATION_AUDIT.md`.
6. If `REVISE`, pass the findings back to the orchestrator, increment packet revision, and audit again. Maximum three rounds.
7. When `APPROVED FOR IMPLEMENTATION`, set state to `AWAITING_FIRST_SLICE_APPROVAL`. Do **not** start major first-slice implementation yet.

The packet must cover the still-aesthetic profile, character-fidelity translation, pastel tonal integration, spatial depth plan, contiguous 0–100 scroll experience score, signature interaction, engineered peak, dead-scroll/reverse behavior, character-owned transition grammar, interruption/retarget model, asset-gap map, FFmpeg/media derivative plan when applicable, lens portal, chibi strategy/prototypes, substantive minigame, audio strategy/verification, desktop/mobile/reduced/quality behavior, experience-first performance protections, risky proofs, acceptance criteria, and fifteen-axis world signature/uniqueness comparison.

## Initialization report

Report only:

- successful setup;
- detected asset categories;
- runtime/provider/model/capability configuration and genuine owner blockers;
- independently audited first-slice plan;
- reminder that `Approved. Proceed.` is the one project-wide production green light.
