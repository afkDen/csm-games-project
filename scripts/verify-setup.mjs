import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const required = [
  'portable/pipeline.manifest.json',
  'portable/roles/controller.md',
  'portable/roles/experience-orchestrator.md',
  'portable/roles/orchestration-auditor.md',
  'portable/roles/production-implementer.md',
  'portable/roles/implementation-reviewer.md',
  'docs/RUNTIME_PORTABILITY_CONTRACT.md',
  'docs/MULTI_PROVIDER_TESTING.md',
  'docs/PORTABLE_RUNBOOK.md',
  'docs/PROVIDER_BENCHMARK_RUBRIC.md',
  'docs/experiments/RUN_MANIFEST_TEMPLATE.json',
  'docs/experiments/RUN_RESULT_TEMPLATE.md',
  'runtimes/README.md',
  'runtimes/generic/README.md',
  'runtimes/antigravity/adapter.json',
  'runtimes/provider-template/adapter.example.json',
  'runtimes/provider-template/README.md',
  'scripts/validate-runtime-adapters.mjs',
  'scripts/external-skill-snapshot.mjs',
  'scripts/new-provider-run.mjs',
  'scripts/bootstrap-fingerprint.mjs',
  'MASTER_PROMPT.md',
  'AGENTS.md',
  'START_HERE.md',
  'INITIALIZE_PROJECT.md',
  'ONE_SHOT_INIT_PROMPT.md',
  'APPROVE_AND_PROCEED.md',
  'PRODUCTION_AUTOPILOT.md',
  'PRODUCT.md',
  'DESIGN.md',
  'ASSET_MANIFEST.json',
  'AUDIO_MANIFEST.json',
  'scripts/media-doctor.mjs',
  'docs/EXPERIENCE_AMBITION.md',
  'docs/CREATIVE_DIRECTION_CONTRACT.md',
  'docs/CHARACTER_FIDELITY_MATRIX.md',
  'docs/SCROLL_EXPERIENCE_CONTRACT.md',
  'docs/TRANSITION_CONTINUITY_CONTRACT.md',
  'docs/SPATIAL_DEPTH_CONTRACT.md',
  'docs/MEDIA_PIPELINE_FFMPEG.md',
  'docs/PERFORMANCE_AND_QUALITY.md',
  'docs/WORLD_UNIQUENESS_CONTRACT.md',
  'docs/PROJECT_STATE.md',
  'docs/FINAL_RELEASE_GATE.md',
  'docs/ASSET_SOURCING.md',
  'docs/TOOL_USAGE_LOG.md',
  'assets/source/official-anime-stills/character-holding-glasses/.gitkeep',
  '.agents/skills/asset-scout/SKILL.md',
  '.agents/skills/creative-direction-guardian/SKILL.md',
  '.agents/skills/scroll-experience-director/SKILL.md',
  '.agents/skills/transition-continuity/SKILL.md',
  '.agents/skills/spatial-depth-director/SKILL.md',
  '.agents/skills/media-pipeline-ffmpeg/SKILL.md',
  '.agents/skills/still-to-cinematic/SKILL.md',
  '.agents/skills/motion-crafting-runtime/SKILL.md',
  '.agents/skills/theatre-sequencer/SKILL.md',
  '.agents/skills/chibi-character-pipeline/SKILL.md',
  '.agents/skills/minigame-systems/SKILL.md',
  '.agents/skills/game-audio-systems/SKILL.md',
  '.agents/skills/audio-verification/SKILL.md',
  '.agents/skills/capability-routing/SKILL.md',
  '.agents/skills/orchestration-audit/SKILL.md',
  '.agents/skills/implementation-execution/SKILL.md',
  '.agents/skills/implementation-evidence-review/SKILL.md',
  '.agents/skills/revision-resume/SKILL.md',
  '.agents/skills/world-uniqueness-audit/SKILL.md',
  '.agents/skills/milestone-closeout/SKILL.md',
  '.agents/agents/lens-autopilot/agent.md',
  '.agents/agents/experience-orchestrator/agent.md',
  '.agents/agents/orchestration-auditor/agent.md',
  '.agents/agents/production-implementer/agent.md',
  '.agents/agents/implementation-reviewer/agent.md',
  'docs/AGENT_LOOP_PROTOCOL.md',
  'docs/CAPABILITY_ROUTING_POLICY.md',
  'docs/ANTIGRAVITY_SETUP.md',
];

let failed = false;
for (const rel of required) {
  if (!fs.existsSync(path.join(root, rel))) {
    console.error(`Missing: ${rel}`);
    failed = true;
  }
}

const skillRoot = path.join(root, 'portable', 'skills');
const skills = fs.existsSync(skillRoot)
  ? fs.readdirSync(skillRoot, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => path.join(skillRoot, d.name, 'SKILL.md'))
      .filter(fs.existsSync)
  : [];

for (const skill of skills) {
  const text = fs.readFileSync(skill, 'utf8');
  if (!text.startsWith('---\n') || !/\nname:\s*[^\n]+/.test(text) || !/\ndescription:\s*[^\n]+/.test(text)) {
    console.error(`Invalid skill frontmatter: ${path.relative(root, skill)}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log(`Bootstrap structure OK. Found ${skills.length} canonical portable skill definitions.`);
console.log('External skills/MCPs are intentionally not required by this structural check.');
