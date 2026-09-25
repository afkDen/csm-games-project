import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const statePath = path.join(root, 'docs', 'PROJECT_STATE.md');
if (!fs.existsSync(statePath)) {
  console.error('Project state validation: docs/PROJECT_STATE.md is missing.');
  process.exit(1);
}
const text = fs.readFileSync(statePath, 'utf8');
let failures = 0;
const fail = (m) => { console.error(`Project state validation: ${m}`); failures++; };
const field = (name) => {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const m = text.match(new RegExp(`- \\*\\*${escaped}:\\*\\*\\s*(?:\\x60([^\\x60]+)\\x60|(.+))`));
  return m ? (m[1] || m[2] || '').trim() : null;
};

const required = ['State schema version','Mode','Phase','Process tier','Active world','Active milestone','Active agent-loop stage','Plan audit round','Implementation review round','Approved plan artifact','Latest implementation review artifact','Active goal','Last verified checkpoint','Pending owner blocker','Resume target','Latest owner directive'];
for (const key of required) if (field(key) === null) fail(`missing required field: ${key}`);
if (field('State schema version') !== '2') fail('State schema version must be 2');
if (!new Set(['BOOTSTRAP','AWAITING_FIRST_SLICE_APPROVAL','AUTOPILOT','HOLD','COMPLETE']).has(field('Mode'))) fail(`invalid Mode: ${field('Mode')}`);
if (!new Set(['trivial','normal','major','architectural']).has(field('Process tier'))) fail(`invalid Process tier: ${field('Process tier')}`);
if (!new Set(['controller','orchestrating','auditing-plan','implementing','reviewing','repairing','closing']).has(field('Active agent-loop stage'))) fail(`invalid agent-loop stage: ${field('Active agent-loop stage')}`);
for (const key of ['Plan audit round','Implementation review round']) {
  const v = Number(field(key));
  if (!Number.isInteger(v) || v < 0) fail(`${key} must be a non-negative integer`);
}
if (!text.includes('sole mutable source of truth for current project/resume state')) fail('canonical authority statement missing');
if (!text.includes('Only the controller/state-owner updates this file')) fail('controller-only mutation rule missing');
if (failures) process.exit(1);
console.log(`Canonical project state OK: mode=${field('Mode')}, tier=${field('Process tier')}, stage=${field('Active agent-loop stage')}.`);
