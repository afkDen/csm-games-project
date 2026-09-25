import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const runId = process.argv[2];
if (!runId || !/^[a-zA-Z0-9._-]+$/.test(runId)) {
  console.error('Usage: npm run experiment:lock:verify -- <run-id>');
  process.exit(2);
}
const runDir = path.join(root, 'docs', 'experiments', 'runs', runId);
const manifestPath = path.join(runDir, 'RUN_MANIFEST.json');
const lockPath = path.join(runDir, 'RUN_LOCK.json');
if (!fs.existsSync(manifestPath) || !fs.existsSync(lockPath)) {
  console.error('Experiment manifest/lock missing. Run experiment:lock first.');
  process.exit(2);
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
let failures = 0;
const fail = (m) => { console.error(`Experiment lock: ${m}`); failures++; };

function runJson(script) {
  const result = spawnSync(process.execPath, [path.join(root, 'scripts', script)], { encoding: 'utf8' });
  if (result.status !== 0) { fail(`could not compute ${script}`); return {}; }
  try { return JSON.parse(result.stdout); } catch { fail(`invalid JSON from ${script}`); return {}; }
}
const bootstrap = runJson('bootstrap-fingerprint.mjs');
const assets = runJson('source-assets-fingerprint.mjs');
const owner = runJson('owner-instructions-fingerprint.mjs');
const skills = runJson('external-skill-snapshot.mjs');

if (bootstrap.bootstrap_sha256 !== lock.fingerprints?.bootstrap_sha256) fail('bootstrap fingerprint changed');
if (assets.aggregate_sha256 !== lock.fingerprints?.source_assets_sha256) fail('source assets changed');
if (assets.source_asset_file_count !== lock.fingerprints?.source_asset_file_count) fail('source asset file count changed');
if (owner.owner_instruction_sha256 !== lock.fingerprints?.owner_instruction_sha256) fail('owner instructions changed');
if (skills.aggregate_sha256 !== lock.fingerprints?.external_skills_sha256) fail('external skill set changed');
if (skills.external_skill_count !== lock.fingerprints?.external_skill_count) fail('external skill count changed');

const currentImmutable = {
  bootstrap_version: manifest.bootstrap_version,
  runtime: manifest.runtime,
  provider_mode: manifest.provider_mode,
  experiment_mode: manifest.experiment_mode,
  process_tier_policy_version: manifest.process_tier_policy_version,
  project_state_schema_version: manifest.project_state_schema_version,
  starting_process_tier: manifest.starting_process_tier,
  reasoning_policy_version: manifest.reasoning_policy_version,
  roles: manifest.roles,
  capabilities: manifest.capabilities,
  external_skills_or_connectors: manifest.external_skills_or_connectors,
  permission_profile: manifest.permission_profile,
  constraints: manifest.constraints,
};
const currentHash = crypto.createHash('sha256').update(JSON.stringify(currentImmutable)).digest('hex');
if (currentHash !== lock.immutable_inputs_sha256) fail('locked runtime/model/capability/budget inputs changed');
if (manifest.lock_status !== 'LOCKED') fail('manifest lock_status is not LOCKED');

if (failures) process.exit(1);
console.log(`Experiment lock verified: ${path.relative(root, lockPath)}`);
