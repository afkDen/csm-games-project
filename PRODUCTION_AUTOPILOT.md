# Production Autopilot Contract

Active after the owner gives full first-slice approval.

## Autopilot intent

Continue autonomously from the audited approved direction to a verified complete experience. The owner should not need to keep telling the system what comes next.

## Process-tier routing

Before each change, classify it with `docs/PROCESS_TIER_POLICY.md` and record the tier in canonical `docs/PROJECT_STATE.md`. Trivial work uses direct implementation/checks; normal work uses implementation + independent review; major and architectural work use the full audited loop below. Escalate when forced triggers appear.

## Mandatory audited loop for major / architectural work

Major/architectural milestones use:

1. **Orchestrate (High):** `experience-orchestrator` builds/revises plan + capability routing.
2. **Audit orchestration (High):** `orchestration-auditor` independently uses applicable skills/MCPs to critique/improve the plan. `REVISE` loops back; only `APPROVED FOR IMPLEMENTATION` advances.
3. **Implement (Adaptive reasoning):** architectural work resolves to `high`; otherwise `production-implementer` executes the approved packet using the reasoning decision recorded by orchestration: routine/substantial work normally resolves to `execution`; critical or forced-high work resolves to `high`. The exact provider-side setting must be recorded for benchmark runs.
4. **Review implementation (High):** `implementation-reviewer` independently evaluates actual running result, skill-defined quality bars, browser/playtest/audio evidence, uniqueness, and capability compliance.
5. **Repair loop:** confirmed findings return to implementer; reviewer reruns. Maximum three review rounds before escalating to orchestration.
6. **Closeout (High controller):** reconcile state/decisions/manifests/usage and advance automatically.

## Production roadmap

### A. Approved first slice

Use audited milestones to prove and integrate:

- persistent visual stage / Canvas shell where proven;
- still-aesthetic profile + pastel integration;
- still-to-cinematic spatial sequence;
- contiguous scroll score with no accidental dead-scroll;
- character-specific signature interaction and engineered peak;
- forward/back scrub coherence, interruption-safe retargeting, representative direction-flip/button stress, and idle life;
- character-owned transition grammar that materially differs from sibling worlds;
- adaptive asset-gap discovery and FFmpeg/media preparation when a selected beat needs it;
- lens portal ownership handoff;
- selected chibi pipeline;
- substantive minigame;
- audio runtime/verification;
- complete hub → route → game → result → return progression;
- desktop/mobile/reduced/quality behavior.

Do not treat isolated proof success as integrated slice success.

### B. Extract only proven shared mechanisms

May share:

- persistent renderer/canvas lifecycle;
- route/world registry/load boundaries;
- portal lifecycle primitives;
- global input/pause/visibility;
- audio buses/mute;
- completion/progression;
- quality/performance instrumentation;
- game lifecycle shell;
- accessibility/recovery surfaces.

Do not generalize still-aesthetic interpretation, scene composition, scroll score, camera grammar, transition grammar, signature interaction, typography staging, route-specific VFX, game mechanics/balance, character sound palette, mobile translation, or dramatic portal staging.

### C. Remaining character worlds

For each world, before implementation:

- orchestrator creates world/game signature and routing;
- auditor independently uses creative-direction/scroll/depth/still/asset/game/audio skills to improve it;
- uniqueness gate compares it to every completed sibling;
- implementation/review runs independently;
- only reviewed shared regressions may advance the project.

No routine owner approval gate exists between worlds.

### D. Whole-experience integration

Audit hub progression, order independence, unlock/finale payoff, route contrast, transitions, audio crossfades, deep links/history, memory cleanup, mobile continuity, and recovery.

### E. Hardening / release

Run `docs/FINAL_RELEASE_GATE.md` through the same loop. Optional Emil/Impeccable may become applicable here under their bounded policies. Do not claim final completion until required gates pass or owner explicitly accepts a documented limit.

## Revision interrupt / resume

Use `revision-resume` for owner changes:

checkpoint → classify impact → orchestrate/audit revision → implement → independent review → update only affected contracts → resume recorded target.

Do not restart unaffected phases.

## Owner-only boundaries

Autopilot does not authorize deployment/publication, paid purchases, account creation, destructive external actions, or new rights assumptions.
