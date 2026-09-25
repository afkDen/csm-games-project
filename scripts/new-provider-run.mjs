import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [runIdArg, runtimeArg = 'replace-me'] = process.argv.slice(2);
if (!runIdArg || !/^[a-zA-Z0-9._-]+$/.test(runIdArg)) {
  console.error('Usage: npm run experiment:new -- <run-id> [runtime-id]');
  process.exit(2);
}

const outDir = path.join(root, 'docs', 'experiments', 'runs', runIdArg);
if (fs.existsSync(outDir)) {
  console.error(`Run directory already exists: ${path.relative(root, outDir)}`);
  process.exit(2);
}
fs.mkdirSync(outDir, { recursive: true });

const template = JSON.parse(fs.readFileSync(path.join(root, 'docs', 'experiments', 'RUN_MANIFEST_TEMPLATE.json'), 'utf8'));
template.run_id = runIdArg;
template.date = new Date().toISOString().slice(0, 10);
template.runtime = runtimeArg;

const adapterPath = path.join(root, 'runtimes', runtimeArg, 'adapter.json');
if (fs.existsSync(adapterPath)) {
  try {
    const adapter = JSON.parse(fs.readFileSync(adapterPath, 'utf8'));
    for (const role of Object.keys(template.roles || {})) {
      if (template.roles[role] && !template.roles[role].provider) template.roles[role].provider = adapter.provider || '';
      const mapped = adapter.role_model_mapping?.[role];
      if (mapped?.model) template.roles[role].model = mapped.model;
    }
  } catch {
    console.warn(`Warning: could not parse runtime adapter ${path.relative(root, adapterPath)}; run manifest remains unfilled.`);
  }
}

function runJson(script) {
  const result = spawnSync(process.execPath, [path.join(root, 'scripts', script)], { encoding: 'utf8' });
  if (result.status !== 0) {
    console.error(`Could not compute ${script}.`);
    process.exit(result.status ?? 1);
  }
  return JSON.parse(result.stdout);
}
const fingerprint = runJson('bootstrap-fingerprint.mjs');
const assets = runJson('source-assets-fingerprint.mjs');
const owner = runJson('owner-instructions-fingerprint.mjs');
const skills = runJson('external-skill-snapshot.mjs');
template.bootstrap_hash_or_commit = `bootstrap-sha256:${fingerprint.bootstrap_sha256}`;
template.source_assets_fingerprint = `source-assets-sha256:${assets.aggregate_sha256}`;
template.owner_instruction_fingerprint = `owner-instructions-sha256:${owner.owner_instruction_sha256}`;
template.external_skills_fingerprint = `external-skills-sha256:${skills.aggregate_sha256}`;

fs.writeFileSync(path.join(outDir, 'RUN_MANIFEST.json'), JSON.stringify(template, null, 2) + '\n');
fs.copyFileSync(path.join(root, 'docs', 'experiments', 'RUN_RESULT_TEMPLATE.md'), path.join(outDir, 'RUN_RESULT.md'));
console.log(`Created experiment run scaffold: ${path.relative(root, outDir)}`);
