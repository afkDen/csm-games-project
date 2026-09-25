import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const scripts = [
  'preflight.mjs',
  'validate-portable-core.mjs',
  'validate-runtime-adapters.mjs',
  'validate-reasoning-policy.mjs',
  'validate-process-tier-policy.mjs',
  'validate-project-state.mjs',
  'validate-agent-system.mjs',
  'capability-census.mjs',
  'media-doctor.mjs',
  'verify-setup.mjs',
  'validate-assets.mjs',
  'audit-contracts.mjs',
  'check-doc-refs.mjs',
  'scan-secrets.mjs',
];

for (const script of scripts) {
  console.log(`\n=== ${script} ===`);
  const result = spawnSync(process.execPath, [path.join(scriptDir, script)], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log('\nBootstrap audit passed.');
