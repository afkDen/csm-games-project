# Bootstrap Audit — Frozen Multi-Provider Revision v7 (2026-09-17)

## Scope

This audit reviews the bootstrap as a production-control system, not as a finished website. v7 focuses on eliminating the remaining process-overhead and benchmark-reproducibility gaps without weakening the creative/interaction requirements established in v4–v6.

## v7 findings and fixes

### 1. Full multi-agent orchestration was still effectively the default for small changes — FIXED

Added `docs/PROCESS_TIER_POLICY.md` and canonical `process-tier-routing` skill. Work now routes through four tiers:

- `trivial` — direct bounded implementation + relevant checks;
- `normal` — implementation + fresh independent implementation review;
- `major` — full orchestrator/auditor/implementer/reviewer loop;
- `architectural` — full loop with high-reasoning implementation and architectural safeguards.

Forced-escalation rules prevent creative, transition, shared-system, benchmark, state-ownership, and cross-system architecture work from being down-tiered merely to save tokens.

### 2. Project state existed but its authority was not strict enough — FIXED

`docs/PROJECT_STATE.md` is now explicitly the sole mutable current-state/resume authority. The controller/state-owner is the only normal writer. Agent-run reports, decisions, experiment manifests, runtime memory, and chat/session metadata are evidence/history rather than competing state stores.

Added `npm run state:validate` to machine-check required state fields, schema, mode, process tier, and loop stage.

### 3. Cross-provider runs recorded fingerprints but did not freeze a complete starting configuration — FIXED

Added `docs/EXPERIMENT_LOCK_CONTRACT.md` plus:

- `npm run source-assets:fingerprint`;
- `npm run owner-instructions:fingerprint`;
- `npm run experiment:lock -- <run-id>`;
- `npm run experiment:lock:verify -- <run-id>`.

`RUN_LOCK.json` freezes bootstrap, source assets, owner instruction, external skills, runtime/provider mode, role provider/model/reasoning baseline, logical capabilities, permission profile, budget constraints, process policy revision, and state schema revision before major benchmark implementation.

The lock stores hashes/configuration metadata, not private asset contents or secret values.

### 4. Experiment lock could have become ceremonial if under-specified — FIXED

The lock command refuses to run until provider/model mapping, capability discovery, permission profile, and concrete reasoning controls are filled. A drift test confirmed that changing a locked permission/runtime input makes verification fail.

### 5. Process tier and reasoning level risked being conflated — FIXED

v7 explicitly separates:

- **process tier** — how much independent workflow/review is needed;
- **reasoning profile** — how much reasoning depth participating roles use.

Architectural process-tier work forces high-reasoning implementation, but otherwise the two policies remain independently routed.

## Retained protections

v7 preserves all previous creative/engineering protections:

- stills define visual truth;
- characters define behavioral identity;
- pastel/colorful global tone rather than dark-by-default styling;
- anti-flat spatial depth;
- continuous scroll-as-timeline choreography;
- character-specific transition topology/signature interactions/games/audio;
- reversible, retargetable, interruption-safe transitions;
- adaptive asset-gap discovery;
- FFmpeg/FFprobe as preferred development-time media tooling when useful;
- experience-first performance optimization;
- provider-neutral role/reasoning mapping;
- independent plan audit and implementation review for high-risk work.

## Validation target

The frozen baseline requires:

- 5 canonical roles;
- at least 22 canonical skills;
- process-tier validation;
- canonical-state validation;
- reasoning-policy validation;
- runtime-adapter validation;
- portable-core drift validation;
- experiment creation/lock/verification support;
- external-skill/source-asset/owner-instruction/bootstrap fingerprinting;
- transition/media/creative/scroll/depth/asset/performance contracts;
- read-only scaffold audit and secret scanning.
