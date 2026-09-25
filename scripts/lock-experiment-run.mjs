import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const runId = process.argv[2];
if (!runId || !/^[a-zA-Z0-9._-]+$/.test(runId)) {
  console.error('Usage: npm run experiment:lock -- <run-id>');
  process.exit(2);
}
const runDir = path.join(root, 'docs', 'experiments', 'runs', runId);
const manifestPath = path.join(runDir, 'RUN_MANIFEST.json');
const lockPath = path.join(runDir, 'RUN_LOCK.json');
if (!fs.existsSync(manifestPath)) {
  console.error(`Run manifest not found: ${path.relative(root, manifestPath)}`);
  process.exit(2);
}
if (fs.existsSync(lockPath)) {
  console.error(`Run is already locked: ${path.relative(root, lockPath)}. Create a new run ID rather than silently rewriting a clean benchmark lock.`);
  process.exit(2);
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
if (!manifest.runtime || /replace-me/i.test(manifest.runtime)) {
  console.error('Fill runtime before locking the experiment.');
  process.exit(2);
}
if (!manifest.permission_profile || !String(manifest.permission_profile).trim()) {
  console.error('Fill permission_profile before locking the experiment.');
  process.exit(2);
}
if (!manifest.capabilities || Object.keys(manifest.capabilities).length === 0) {
  console.error('Record the discovered logical capabilities before locking the experiment.');
  process.exit(2);
}
const allowedControls = new Set(['effort','budget','model-variant','none','other']);
for (const [role, cfg] of Object.entries(manifest.roles || {})) {
  if (!cfg.provider || !cfg.model) {
    console.error(`Fill provider/model for ${role} before locking.`);
    process.exit(2);
  }
  const r = cfg.reasoning || {};
  if (!r.requested_profile || !r.resolved_profile) {
    console.error(`Resolve reasoning for ${role} before locking.`);
    process.exit(2);
  }
  if (role === 'production-implementer' && !['routine','substantial','critical'].includes(r.milestone_complexity)) {
    console.error('Resolve production-implementer milestone_complexity before locking.');
    process.exit(2);
  }
  const control = r.provider_control || {};
  if (!allowedControls.has(control.type)) {
    console.error(`Set a concrete provider_control.type for ${role} before locking.`);
    process.exit(2);
  }
  if (control.type !== 'none' && !String(control.value || '').trim()) {
    console.error(`Set provider_control.value for ${role} before locking.`);
    process.exit(2);
  }
  if (control.type === 'none' && !String(r.notes || '').trim()) {
    console.error(`Explain the lack of provider reasoning control for ${role} before locking.`);
    process.exit(2);
  }
}

function runJson(script) {
  const result = spawnSync(process.execPath, [path.join(root, 'scripts', script)], { encoding: 'utf8' });
  if (result.status !== 0) {
    process.stderr.write(result.stderr || '');
    console.error(`Could not compute ${script}.`);
    process.exit(result.status ?? 1);
  }
  return JSON.parse(result.stdout);
}

const bootstrap = runJson('bootstrap-fingerprint.mjs');
const assets = runJson('source-assets-fingerprint.mjs');
const owner = runJson('owner-instructions-fingerprint.mjs');
const skills = runJson('external-skill-snapshot.mjs');

const immutableInputs = {
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
const configHash = crypto.createHash('sha256').update(JSON.stringify(immutableInputs)).digest('hex');
const lock = {
  lock_schema_version: 1,
  run_id: manifest.run_id,
  locked_at: new Date().toISOString(),
  immutable_inputs_sha256: configHash,
  fingerprints: {
    bootstrap_sha256: bootstrap.bootstrap_sha256,
    source_assets_sha256: assets.aggregate_sha256,
    source_asset_file_count: assets.source_asset_file_count,
    owner_instruction_sha256: owner.owner_instruction_sha256,
    external_skills_sha256: skills.aggregate_sha256,
    external_skill_count: skills.external_skill_count,
  },
  immutable_inputs: immutableInputs,
};
fs.writeFileSync(lockPath, JSON.stringify(lock, null, 2) + '\n');
manifest.bootstrap_hash_or_commit = `bootstrap-sha256:${bootstrap.bootstrap_sha256}`;
manifest.source_assets_fingerprint = `source-assets-sha256:${assets.aggregate_sha256}`;
manifest.owner_instruction_fingerprint = `owner-instructions-sha256:${owner.owner_instruction_sha256}`;
manifest.external_skills_fingerprint = `external-skills-sha256:${skills.aggregate_sha256}`;
manifest.lock_status = 'LOCKED';
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Locked experiment inputs: ${path.relative(root, lockPath)}`);
