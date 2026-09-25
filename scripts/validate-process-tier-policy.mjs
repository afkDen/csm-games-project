import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let failures = 0;
const fail = (m) => { console.error(`Process policy validation: ${m}`); failures++; };
const read = (rel) => {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) { fail(`missing ${rel}`); return ''; }
  return fs.readFileSync(p, 'utf8');
};
let manifest = {};
try { manifest = JSON.parse(read('portable/pipeline.manifest.json')); } catch { fail('portable manifest invalid JSON'); }
const policy = read('docs/PROCESS_TIER_POLICY.md');
const skill = read('portable/skills/process-tier-routing/SKILL.md');
for (const tier of ['trivial','normal','major','architectural']) {
  if (!policy.includes(`\`${tier}\``)) fail(`policy missing tier ${tier}`);
  if (!manifest.process_tier_policy?.tiers?.[tier]) fail(`manifest missing tier ${tier}`);
}
for (const phrase of ['first vertical slice','shared architecture','cross-system state ownership','Do not de-escalate']) {
  if (!policy.toLowerCase().includes(phrase.toLowerCase())) fail(`policy missing safeguard phrase: ${phrase}`);
}
if (!skill.includes('process tier controls the **workflow depth**'.replace('process','The process'))) {
  // tolerate exact skill wording below through direct check
  if (!skill.includes('process tier controls the **workflow depth**') && !skill.includes('The process tier controls the **workflow depth**')) fail('process-tier skill does not distinguish workflow depth');
}
const controller = read('portable/roles/controller.md');
const implementer = read('portable/roles/production-implementer.md');
if (!controller.includes('Classify every incoming task with `process-tier-routing`')) fail('controller does not route every incoming task');
if (!implementer.includes('For `normal` work') || !implementer.includes('For `trivial` work')) fail('implementer does not support lighter process tiers');
if (failures) process.exit(1);
console.log('Process tier policy OK: trivial/normal/major/architectural paths are explicit and escalation-protected.');
