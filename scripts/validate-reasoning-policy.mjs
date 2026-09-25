import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let failures = 0;
const fail = (m) => { console.error(`Reasoning policy audit: ${m}`); failures++; };
const parse = (rel) => {
  try { return JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8')); }
  catch { fail(`missing/invalid JSON: ${rel}`); return null; }
};
const read = (rel) => {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) { fail(`missing ${rel}`); return ''; }
  return fs.readFileSync(p, 'utf8');
};

const manifest = parse('portable/pipeline.manifest.json');
const requiredRoles = ['controller','experience-orchestrator','orchestration-auditor','production-implementer','implementation-reviewer'];
if (manifest) {
  const policy = manifest.reasoning_policy;
  if (!policy) fail('portable manifest missing reasoning_policy');
  for (const profile of ['high','execution','fast','adaptive']) if (!policy?.profiles?.[profile]) fail(`missing logical profile ${profile}`);
  for (const role of requiredRoles) if (!policy?.role_defaults?.[role]) fail(`missing role default ${role}`);
  if (policy?.role_defaults?.['production-implementer'] !== 'adaptive') fail('production implementer must default to adaptive');
  for (const role of ['controller','experience-orchestrator','orchestration-auditor','implementation-reviewer']) {
    if (policy?.role_defaults?.[role] !== 'high') fail(`${role} must default to high`);
  }
  if (policy?.implementation_complexity?.critical !== 'high') fail('critical implementation must resolve to high');
  if (manifest.process_tier_policy?.tiers?.architectural?.path !== 'full-loop-high-reasoning-implementation') fail('architectural process tier must force high-reasoning implementation');
  if (!Array.isArray(policy?.forced_high_triggers) || policy.forced_high_triggers.length < 6) fail('forced-high trigger set is unexpectedly thin');
}

const reasoningDoc = read('docs/REASONING_POLICY.md');
for (const concept of ['Forced-high triggers','Best-capability','Controlled-budget','Repair-round escalation','`adaptive` is never mapped directly','Process tier interaction']) {
  if (!reasoningDoc.includes(concept)) fail(`REASONING_POLICY.md missing ${concept}`);
}

const template = parse('docs/experiments/RUN_MANIFEST_TEMPLATE.json');
if (template) {
  if (!template.experiment_mode) fail('experiment manifest missing experiment_mode');
  for (const role of requiredRoles) {
    const r = template.roles?.[role]?.reasoning;
    if (!r) { fail(`experiment template missing reasoning block for ${role}`); continue; }
    for (const k of ['requested_profile','milestone_complexity','resolved_profile','provider_control','forced_high_triggers','notes']) if (!(k in r)) fail(`${role} reasoning block missing ${k}`);
    for (const k of ['type','value','budget','units']) if (!(k in (r.provider_control || {}))) fail(`${role} provider_control missing ${k}`);
  }
}

for (const rel of ['runtimes/antigravity/adapter.json','runtimes/provider-template/adapter.example.json']) {
  const adapter = parse(rel);
  if (!adapter) continue;
  if (adapter.adapter_schema_version !== 2) fail(`${rel} must use adapter schema v2`);
  for (const p of ['high','execution','fast','adaptive']) if (!adapter.reasoning_mapping?.[p]) fail(`${rel} missing reasoning mapping ${p}`);
}

const implementer = read('portable/roles/production-implementer.md');
if (!implementer.includes('This role is `adaptive`')) fail('implementer role does not enforce adaptive reasoning');

if (failures) process.exit(1);
console.log('Reasoning policy audit passed: adaptive implementation + exact provider-setting recording are enforced.');
