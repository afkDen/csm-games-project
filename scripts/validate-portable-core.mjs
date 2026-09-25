import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let failures = 0;
const fail = (m) => { console.error(`Portability audit: ${m}`); failures++; };
const read = (rel) => {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) { fail(`missing ${rel}`); return ''; }
  return fs.readFileSync(p, 'utf8');
};

let manifest;
try { manifest = JSON.parse(read('portable/pipeline.manifest.json')); }
catch { fail('portable/pipeline.manifest.json is not valid JSON'); manifest = null; }

const roleNames = ['controller','experience-orchestrator','orchestration-auditor','production-implementer','implementation-reviewer'];
for (const role of roleNames) {
  const text = read(`portable/roles/${role}.md`);
  if (text.length < 250) fail(`portable role ${role} is unexpectedly thin`);
}

if (manifest) {
  if (manifest.pipeline_version !== '7.0.0') fail('pipeline version must be 7.0.0');
  for (const role of roleNames) if (!manifest.roles?.[role]) fail(`manifest missing role ${role}`);
  for (const cap of ['filesystem.read','filesystem.write','command.exec','subagent.spawn_or_isolated_context','browser.inspect']) {
    if (!manifest.logical_capabilities?.[cap]) fail(`manifest missing logical capability ${cap}`);
  }
  if (manifest.portability?.runbook !== 'docs/PORTABLE_RUNBOOK.md') fail('manifest missing portability runbook');
  if (manifest.portability?.benchmark_rubric !== 'docs/PROVIDER_BENCHMARK_RUBRIC.md') fail('manifest missing benchmark rubric');
  if (manifest.reasoning_policy?.contract !== 'docs/REASONING_POLICY.md') fail('manifest missing reasoning policy contract');
  if (manifest.process_tier_policy?.contract !== 'docs/PROCESS_TIER_POLICY.md') fail('manifest missing process tier policy contract');
  if (manifest.state_authority?.canonical_file !== 'docs/PROJECT_STATE.md') fail('manifest missing canonical project state authority');
  if (manifest.portability?.experiment_lock !== 'docs/EXPERIMENT_LOCK_CONTRACT.md') fail('manifest missing experiment lock contract');
  if (manifest.roles?.['production-implementer']?.reasoning_profile !== 'adaptive') fail('implementer must use adaptive reasoning selector');
}

const portableSkillRoot = path.join(root, 'portable', 'skills');
const agSkillRoot = path.join(root, '.agents', 'skills');
const skillDirs = fs.existsSync(portableSkillRoot) ? fs.readdirSync(portableSkillRoot, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name).sort() : [];
if (skillDirs.length < 22) fail(`expected at least 22 portable skills, found ${skillDirs.length}`);

const digest = (p) => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
for (const skill of skillDirs) {
  const src = path.join(portableSkillRoot, skill, 'SKILL.md');
  const dst = path.join(agSkillRoot, skill, 'SKILL.md');
  if (!fs.existsSync(src)) { fail(`portable skill missing SKILL.md: ${skill}`); continue; }
  if (!fs.existsSync(dst)) { fail(`Antigravity mirror missing skill: ${skill}`); continue; }
  if (digest(src) !== digest(dst)) fail(`Antigravity skill mirror drifted from portable source: ${skill}`);
}

const portableFiles = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p); else portableFiles.push(p);
  }
}
walk(path.join(root, 'portable'));
for (const p of portableFiles) {
  if (!/\.(?:md|json)$/.test(p)) continue;
  const t = fs.readFileSync(p, 'utf8');
  if (/Gemini 3\.8 Flash|\.agents\/skills|Antigravity custom-agent|Antigravity browser/i.test(t)) {
    fail(`provider-specific assumption leaked into portable core: ${path.relative(root,p)}`);
  }
}

for (const rel of ['docs/RUNTIME_PORTABILITY_CONTRACT.md','docs/MULTI_PROVIDER_TESTING.md','docs/PORTABLE_RUNBOOK.md','docs/PROVIDER_BENCHMARK_RUBRIC.md','runtimes/README.md','runtimes/generic/README.md','runtimes/antigravity/adapter.json','runtimes/provider-template/adapter.example.json','runtimes/provider-template/README.md']) read(rel);

const agentRoleMap = {
  'lens-autopilot': 'portable/roles/controller.md',
  'experience-orchestrator': 'portable/roles/experience-orchestrator.md',
  'orchestration-auditor': 'portable/roles/orchestration-auditor.md',
  'production-implementer': 'portable/roles/production-implementer.md',
  'implementation-reviewer': 'portable/roles/implementation-reviewer.md'
};
for (const [agent, rolePath] of Object.entries(agentRoleMap)) {
  const t = read(`.agents/agents/${agent}/agent.md`);
  if (!t.includes(rolePath)) fail(`Antigravity agent ${agent} does not delegate to canonical role ${rolePath}`);
}

if (failures) process.exit(1);
console.log(`Portable core OK: ${roleNames.length} canonical roles, ${skillDirs.length} canonical skills, Antigravity mirror synchronized.`);
