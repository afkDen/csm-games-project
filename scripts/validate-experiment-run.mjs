import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = process.argv[2];
if (!arg) {
  console.error('Usage: npm run experiment:validate -- <run-id|path-to-RUN_MANIFEST.json>');
  process.exit(2);
}
const manifestPath = arg.endsWith('.json')
  ? path.resolve(root, arg)
  : path.join(root, 'docs', 'experiments', 'runs', arg, 'RUN_MANIFEST.json');
if (!fs.existsSync(manifestPath)) {
  console.error(`Experiment manifest not found: ${path.relative(root, manifestPath)}`);
  process.exit(2);
}
let m;
try { m = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); }
catch { console.error('Experiment manifest is invalid JSON.'); process.exit(2); }

let failures = 0;
const fail = (x) => { console.error(`Experiment validation: ${x}`); failures++; };
const roles = ['controller','experience-orchestrator','orchestration-auditor','production-implementer','implementation-reviewer'];
if (m.bootstrap_version !== '7.0.0') fail('bootstrap_version must be 7.0.0');
if (m.process_tier_policy_version !== 1) fail('process_tier_policy_version must be 1');
if (m.project_state_schema_version !== 2) fail('project_state_schema_version must be 2');
if (!['trivial','normal','major','architectural'].includes(m.starting_process_tier)) fail('starting_process_tier is invalid');
if (!['best-capability','controlled-budget','custom'].includes(m.experiment_mode)) fail('experiment_mode must be best-capability, controlled-budget, or custom');
if (!m.bootstrap_hash_or_commit || /replace-me/i.test(m.bootstrap_hash_or_commit)) fail('bootstrap_hash_or_commit is not recorded');
for (const key of ['source_assets_fingerprint','owner_instruction_fingerprint','external_skills_fingerprint']) {
  if (!String(m[key] || '').includes('sha256:')) fail(`${key} is not recorded`);
}
if (m.lock_status !== 'LOCKED') fail('run is not experiment-locked; execute experiment:lock before validation');


const runId = m.run_id || path.basename(path.dirname(manifestPath));
const lockResult = spawnSync(process.execPath, [path.join(root, 'scripts', 'verify-experiment-lock.mjs'), runId], { encoding: 'utf8' });
if (lockResult.status !== 0) {
  process.stderr.write(lockResult.stderr || '');
  fail('experiment lock verification failed');
}

for (const role of roles) {
  const d = m.roles?.[role];
  if (!d) { fail(`missing role ${role}`); continue; }
  if (!d.provider) fail(`${role}: provider is blank`);
  if (!d.model) fail(`${role}: model is blank`);
  const r = d.reasoning;
  if (!r) { fail(`${role}: missing reasoning block`); continue; }
  const fixedHigh = role !== 'production-implementer';
  if (fixedHigh && r.requested_profile !== 'high') fail(`${role}: requested profile must be high`);
  if (fixedHigh && r.resolved_profile !== 'high') fail(`${role}: resolved profile must be high`);
  if (role === 'production-implementer') {
    if (r.requested_profile !== 'adaptive') fail('production-implementer: requested profile must be adaptive');
    if (!['routine','substantial','critical'].includes(r.milestone_complexity)) fail('production-implementer: milestone_complexity must be routine/substantial/critical');
    if (!['execution','high'].includes(r.resolved_profile)) fail('production-implementer: resolved profile must be execution/high');
    if (r.milestone_complexity === 'critical' && r.resolved_profile !== 'high') fail('production-implementer: critical milestone must resolve to high');
    if ((r.forced_high_triggers || []).length && r.resolved_profile !== 'high') fail('production-implementer: forced-high trigger requires high');
  }
  const c = r.provider_control || {};
  const allowed = ['effort','budget','model-variant','none','other'];
  if (!allowed.includes(c.type)) fail(`${role}: provider_control.type must be one of ${allowed.join(', ')}`);
  if (c.type !== 'none' && !String(c.value || '').trim()) fail(`${role}: exact provider_control.value is blank`);
  if (c.type === 'none' && !String(r.notes || '').trim()) fail(`${role}: provider exposes no reasoning control; explain in notes`);
  if (c.budget !== null && c.budget !== undefined && !String(c.units || '').trim()) fail(`${role}: reasoning budget supplied without units`);
}

if (failures) process.exit(1);
console.log(`Experiment reasoning configuration is reproducible: ${path.relative(root, manifestPath)}`);
