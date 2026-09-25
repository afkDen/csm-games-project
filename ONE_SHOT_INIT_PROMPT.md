# One-Shot Initialization Prompt — Provider-Neutral

Give everything below to the runtime's **controller/state-owner role** with the repository root available. The runtime adapter maps that logical role to its concrete agent/model.

---

Initialize this repository from the owner inputs already present and use the provider-neutral audited multi-agent pipeline.

First read:

- `portable/pipeline.manifest.json`
- `portable/roles/controller.md`
- `AGENTS.md`
- `INITIALIZE_PROJECT.md`
- `MASTER_PROMPT.md`
- `PRODUCT.md`
- `DESIGN.md`
- `START_HERE.md`
- `docs/RUNTIME_PORTABILITY_CONTRACT.md`
- `docs/PORTABLE_RUNBOOK.md`
- `docs/EXPERIMENT_LOCK_CONTRACT.md` when this checkout is being used for a provider/model benchmark
- `docs/PROCESS_TIER_POLICY.md`
- `docs/AGENT_LOOP_PROTOCOL.md`
- `docs/CAPABILITY_ROUTING_POLICY.md`
- `docs/BOOTSTRAP_PLAN.md`
- `docs/EXPERIENCE_AMBITION.md`
- `docs/CREATIVE_DIRECTION_CONTRACT.md`
- `docs/CHARACTER_FIDELITY_MATRIX.md`
- `docs/SCROLL_EXPERIENCE_CONTRACT.md`
- `docs/TRANSITION_CONTINUITY_CONTRACT.md`
- `docs/SPATIAL_DEPTH_CONTRACT.md`
- `docs/PERFORMANCE_AND_QUALITY.md`
- `docs/ASSET_SOURCING.md`
- `docs/MEDIA_PIPELINE_FFMPEG.md`
- `docs/WORLD_UNIQUENESS_CONTRACT.md`
- `docs/PROJECT_STATE.md` (sole mutable resume authority)
- `docs/DECISIONS.md`

Then execute `INITIALIZE_PROJECT.md` end to end using the active runtime adapter.

Operating rules:

- Treat `assets/source/` and `.env.local` as private owner inputs. Never print/copy/expose secret values.
- Keep raw copyrighted/source art outside public-serving directories.
- Do not ask me to manually run routine commands or preprocess media you can handle.
- Discover the active runtime's real logical capabilities; do not assume another provider's tool names exist.
- Treat external third-party skills/connectors as a trust boundary and do not silently install mutable/unreviewed sources.
- Do not invoke skills/tools/APIs merely to populate a usage log.
- Inventory owner inputs conservatively and update provenance without inventing rights.
- Initialize only the minimum technical foundation needed for the approved architecture/prototypes; do not build all five worlds during initialization.

Most importantly, after Phase 0 setup, do **not** let the same uninterrupted context author and self-approve the first-slice plan. Run the independent planning gate:

1. Classify the first vertical slice as at least `major` under `docs/PROCESS_TIER_POLICY.md`, record it in canonical state, and create the first-slice milestone folder under `docs/agent-runs/`.
2. Run the canonical `experience-orchestrator` role in an appropriate isolated context. It writes `ORCHESTRATION_PACKET.md` and `CAPABILITY_ROUTING.md`.
3. Run the canonical `orchestration-auditor` role in a **fresh independent context**. It writes `ORCHESTRATION_AUDIT.md` and either says `APPROVED FOR IMPLEMENTATION` or `REVISE`.
4. Repeat at most three plan-audit rounds. Do not begin major production until the audit passes.
5. Set `docs/PROJECT_STATE.md` to `AWAITING_FIRST_SLICE_APPROVAL` when the audited plan is coherent.

The plan must cover still-aesthetic profiling, character fidelity, pastel tonal translation, spatial depth, contiguous 0–100 scroll score, character-owned transition grammar, reversibility/retargeting/interruption ownership, signature interaction, engineered peak, asset-gap/media map, FFmpeg use when materially helpful, game/audio systems, mobile/reduced-motion strategy, experience-first performance protections, risky proofs, and uniqueness acceptance criteria.

Before reporting, run the repository validators, including `npm run portability:audit`, `npm run runtime:validate`, `npm run state:validate`, `npm run process:validate`, and any active runtime-specific checks.

At the end give me only:

1. what initialized successfully;
2. owner assets detected by category;
3. runtime/model/capability setup and genuine blockers;
4. the **independently audited** first vertical-slice plan and key creative/technical decisions;
5. confirmation that replying **“Approved. Proceed.”** activates the orchestrator → auditor → implementer → reviewer production loop.

Proceed autonomously until the initialization + audited first-slice planning boundary or a genuine owner-only blocker.

---
