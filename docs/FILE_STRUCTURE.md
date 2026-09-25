# File Structure

```text
.
├─ README.md
├─ START_HERE.md
├─ ONE_SHOT_INIT_PROMPT.md
├─ INITIALIZE_PROJECT.md
├─ APPROVE_AND_PROCEED.md
├─ PRODUCTION_AUTOPILOT.md
├─ MASTER_PROMPT.md
├─ AGENTS.md
├─ PRODUCT.md
├─ DESIGN.md
├─ ASSET_MANIFEST.json
├─ AUDIO_MANIFEST.json
├─ portable/                         # canonical provider-neutral pipeline core
│  ├─ pipeline.manifest.json
│  ├─ README.md
│  ├─ roles/
│  │  ├─ controller.md
│  │  ├─ experience-orchestrator.md
│  │  ├─ orchestration-auditor.md
│  │  ├─ production-implementer.md
│  │  └─ implementation-reviewer.md
│  └─ skills/                        # canonical repository-owned project skills
├─ runtimes/
│  ├─ README.md
│  ├─ generic/
│  ├─ provider-template/
│  └─ antigravity/                   # original runtime adapter
├─ .agents/                          # Antigravity wrappers + project-local skill directory
│  ├─ agents/
│  └─ skills/                        # canonical mirrors + optional external skills
├─ assets/
│  └─ source/                        # private/raw owner inputs
├─ public/
│  └─ assets/derived/                # intentional shipping derivatives only
├─ src/
│  ├─ app/
│  ├─ experience/
│  │  ├─ canvas/
│  │  ├─ hub/
│  │  ├─ worlds/
│  │  ├─ portals/
│  │  ├─ cinematic/
│  │  └─ shaders/
│  ├─ games/
│  │  ├─ shared/
│  │  ├─ denji/
│  │  ├─ makima/
│  │  ├─ aki/
│  │  ├─ power/
│  │  └─ reze/
│  ├─ audio/
│  ├─ ui/
│  ├─ content/
│  └─ lib/
├─ docs/
│  ├─ RUNTIME_PORTABILITY_CONTRACT.md
│  ├─ PORTABLE_RUNBOOK.md
│  ├─ MULTI_PROVIDER_TESTING.md
│  ├─ PROVIDER_BENCHMARK_RUBRIC.md
│  ├─ AGENT_LOOP_PROTOCOL.md
│  ├─ CAPABILITY_ROUTING_POLICY.md
│  ├─ CREATIVE_DIRECTION_CONTRACT.md
│  ├─ CHARACTER_FIDELITY_MATRIX.md
│  ├─ SCROLL_EXPERIENCE_CONTRACT.md
│  ├─ TRANSITION_CONTINUITY_CONTRACT.md
│  ├─ SPATIAL_DEPTH_CONTRACT.md
│  ├─ MEDIA_PIPELINE_FFMPEG.md
│  ├─ WORLD_UNIQUENESS_CONTRACT.md
│  ├─ PERFORMANCE_AND_QUALITY.md
│  ├─ ASSET_SOURCING.md
│  ├─ agent-loop/                     # milestone artifact templates
│  ├─ agent-runs/                     # evidence created during production
│  └─ experiments/                    # provider/model run templates/results
└─ scripts/
   ├─ sync-runtime-adapters.mjs
   ├─ validate-portable-core.mjs
   ├─ validate-runtime-adapters.mjs
   ├─ external-skill-snapshot.mjs
   ├─ new-provider-run.mjs
   ├─ bootstrap-skills.ps1
   ├─ bootstrap-skills.sh
   ├─ media-doctor.mjs
   ├─ preflight.mjs
   ├─ capability-census.mjs
   ├─ validate-agent-system.mjs       # bundled Antigravity adapter validation
   ├─ validate-assets.mjs
   ├─ verify-setup.mjs
   ├─ audit-contracts.mjs
   ├─ scan-secrets.mjs
   └─ run-audit.mjs
```

## Source of truth

`portable/roles/` and `portable/skills/` are canonical. Runtime adapters may mirror or wrap them, but they must not independently evolve the product/creative behavior.

`npm run adapters:sync` refreshes only the canonical Antigravity skill mirror names from `portable/skills/`; optional unrelated third-party skill directories already present in `.agents/skills/` are left intact. `npm run portability:audit` detects canonical mirror drift and provider-specific assumptions leaking into the portable core.

The framework/application folders remain placeholders until initialization establishes the minimum app foundation. World folders may share mechanisms but must not collapse into a single config-rendered character template.
