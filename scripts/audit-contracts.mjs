import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
let failures = 0;

function requireFile(rel) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) {
    console.error(`Contract audit: missing ${rel}`);
    failures++;
    return '';
  }
  return fs.readFileSync(full, 'utf8');
}

function requireText(rel, needles) {
  const text = requireFile(rel);
  for (const needle of needles) {
    if (!text.includes(needle)) {
      console.error(`Contract audit: ${rel} missing required concept: ${needle}`);
      failures++;
    }
  }
}

requireText('AGENTS.md', ['PRODUCTION_AUTOPILOT.md', 'WORLD_UNIQUENESS_CONTRACT.md', 'TRANSITION_CONTINUITY_CONTRACT.md', 'MEDIA_PIPELINE_FFMPEG.md', 'Process-tier routing', 'Capability discipline', 'Revision interrupt / resume']);
requireText('ONE_SHOT_INIT_PROMPT.md', ['Approved. Proceed.', 'AWAITING_FIRST_SLICE_APPROVAL', 'experience-orchestrator', 'orchestration-auditor', 'PROCESS_TIER_POLICY.md', 'sole mutable resume authority']);
requireText('PRODUCTION_AUTOPILOT.md', ['Process-tier routing', 'Mandatory audited loop', 'Revision interrupt / resume', 'orchestration-auditor', 'implementation-reviewer', 'transition grammar', 'FFmpeg']);
requireText('docs/CREATIVE_DIRECTION_CONTRACT.md', ['stills define visual truth', 'Pastel reinterpretation', 'Character-authentic, not mood-literal']);
requireText('docs/SCROLL_EXPERIENCE_CONTRACT.md', ['Scroll is an authored continuous input', 'No accidental dead scroll', 'Transition grammar + signature move', 'Engineered peak']);
requireText('docs/TRANSITION_CONTINUITY_CONTRACT.md', ['Important visual transitions are state, not one-way event chains', 'Retargeting and cancellation', 'Transition uniqueness', 'Required transition tests']);
requireText('docs/MEDIA_PIPELINE_FFMPEG.md', ['preferred development-time media production tool', 'npm run media:doctor', 'Scroll-sequence contract', 'not a browser/runtime dependency']);
requireText('docs/SPATIAL_DEPTH_CONTRACT.md', ['Do Not Let the Experience Feel Flat', 'Camera must cross relationships', 'Flatness review']);
requireText('docs/PERFORMANCE_AND_QUALITY.md', ['Experience first', 'Optimization order', 'Adaptive quality']);
requireText('docs/ASSET_SOURCING.md', ['asset set is **not assumed to be sufficient**', 'Asset discovery can reopen', 'Acquisition ladder']);
requireText('docs/WORLD_UNIQUENESS_CONTRACT.md', ['Differentiation gate', 'No repeated skeleton rule', 'Game uniqueness gate', 'fifteen', 'Transition grammar / continuity']);
requireText('docs/BOOTSTRAP_PLAN.md', ['Production green light', 'remaining worlds one at a time']);
requireText('docs/FINAL_RELEASE_GATE.md', ['World uniqueness', 'Scroll / motion-site experience', 'Media pipeline / FFmpeg derivatives', 'Spatial depth / still treatment', 'Experience-first performance', 'bootstrap:audit']);


requireText('docs/PROCESS_TIER_POLICY.md', ['Tier 1 — `trivial`', 'Tier 2 — `normal`', 'Tier 3 — `major`', 'Tier 4 — `architectural`', 'Forced escalation triggers']);
requireText('docs/EXPERIMENT_LOCK_CONTRACT.md', ['RUN_LOCK.json', 'bootstrap fingerprint', 'source-asset fingerprint', 'owner-instruction fingerprint', 'external-skill fingerprint']);
requireText('docs/REASONING_POLICY.md', ['Forced-high triggers', 'Best-capability', 'Controlled-budget', 'Repair-round escalation', '`adaptive` is never mapped directly']);
requireText('docs/AGENT_LOOP_PROTOCOL.md', ['orchestration-auditor', 'production-implementer', 'implementation-reviewer', 'Skill-active auditing']);
requireText('docs/RUNTIME_PORTABILITY_CONTRACT.md', ['portable core owns **what must happen**', 'Role isolation', 'External skill equivalence', 'Adapter conformance', 'reasoning controls']);
requireText('docs/MULTI_PROVIDER_TESTING.md', ['Freeze optional skill capability', 'skills:snapshot', 'PROVIDER_BENCHMARK_RUBRIC.md', 'experiment:lock']);
requireText('docs/PORTABLE_RUNBOOK.md', ['Same Bootstrap, Different Models / Providers', 'experiment:new', 'skills:snapshot', 'experiment:lock']);
requireText('docs/PROVIDER_BENCHMARK_RUBRIC.md', ['Still-led visual fidelity', 'Transition uniqueness', 'Agent-loop discipline', 'Process / reasoning / experiment fidelity', 'Hard-gate findings']);
requireText('docs/SKILL_INSTALL.md', ['Project-local runtime skills', '.agents/skills/', 'external-skill fingerprint']);
requireText('docs/CAPABILITY_ROUTING_POLICY.md', ['REQUIRED', 'CONDITIONAL', 'NOT APPLICABLE', 'Usage reconciliation']);
requireText('docs/ANTIGRAVITY_SETUP.md', ['Gemini 3.8 Flash High', 'effort:']);
requireText('scripts/bootstrap-skills.sh', ['ALLOW_UNPINNED_EXTERNAL_SKILLS', 'Refusing to install mutable third-party skill sources by default']);
requireText('scripts/bootstrap-skills.ps1', ['ALLOW_UNPINNED_EXTERNAL_SKILLS', 'Refusing to install mutable third-party skill sources by default']);

const state = requireFile('docs/PROJECT_STATE.md');
const modeMatch = state.match(/\*\*Mode:\*\*\s*`([^`]+)`/);
const validModes = new Set(['BOOTSTRAP', 'AWAITING_FIRST_SLICE_APPROVAL', 'AUTOPILOT', 'HOLD', 'COMPLETE']);
if (!modeMatch || !validModes.has(modeMatch[1])) {
  console.error('Contract audit: docs/PROJECT_STATE.md has missing/invalid Mode.');
  failures++;
}
const tierMatch = state.match(/\*\*Process tier:\*\*\s*`([^`]+)`/);
const validTiers = new Set(['trivial','normal','major','architectural']);
if (!tierMatch || !validTiers.has(tierMatch[1])) {
  console.error('Contract audit: docs/PROJECT_STATE.md has missing/invalid Process tier.');
  failures++;
}
if (!state.includes('sole mutable source of truth for current project/resume state')) {
  console.error('Contract audit: docs/PROJECT_STATE.md is not declared canonical.');
  failures++;
}

const gitignore = requireFile('.gitignore');
if (!gitignore.includes('assets/source/**/*')) {
  console.error('Contract audit: raw source assets are not ignored by .gitignore.');
  failures++;
}
if (!gitignore.includes('.env.*') || !gitignore.includes('!.env.example')) {
  console.error('Contract audit: env ignore policy is incomplete.');
  failures++;
}

const rawPublic = path.join(root, 'public', 'assets', 'source');
if (fs.existsSync(rawPublic)) {
  console.error('Contract audit: public/assets/source must not exist.');
  failures++;
}

// Fail only on production source, not on documentation that intentionally shows the anti-pattern.
const srcRoot = path.join(root, 'src');
if (fs.existsSync(srcRoot)) {
  const stack = [srcRoot];
  while (stack.length) {
    const dir = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (/\.(?:ts|tsx|js|jsx)$/.test(entry.name)) {
        const text = fs.readFileSync(full, 'utf8');
        if (/<CharacterWorld\s+config=/.test(text)) {
          console.error(`Contract audit: possible generic CharacterWorld config renderer in ${path.relative(root, full)}`);
          failures++;
        }
      }
    }
  }
}

if (failures) process.exit(1);
console.log('Project contracts audit passed.');
