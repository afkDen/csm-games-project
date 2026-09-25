import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = [];
const skipDirs = new Set(['.git','node_modules','.next','dist','out','coverage','test-results','playwright-report','.cache']);

function excluded(rel, entry) {
  const p = rel.replaceAll(path.sep, '/');
  if (skipDirs.has(entry)) return true;
  if (p === 'assets/source' || p.startsWith('assets/source/')) return true;
  if (p === 'public/assets/derived' || p.startsWith('public/assets/derived/')) return true;
  if (p === 'docs/agent-runs' || p.startsWith('docs/agent-runs/')) return true;
  if (p === 'docs/experiments/runs' || p.startsWith('docs/experiments/runs/')) return true;
  if (p === '.agents/skills' || p.startsWith('.agents/skills/')) return true; // canonical copy is hashed under portable/; external skills have their own fingerprint.
  if (p === '.env.local' || (p.startsWith('.env.') && p !== '.env.example')) return true;
  return false;
}

function walk(abs, rel = '') {
  for (const entry of fs.readdirSync(abs, { withFileTypes: true }).sort((a,b) => a.name.localeCompare(b.name))) {
    const nextRel = rel ? path.join(rel, entry.name) : entry.name;
    if (excluded(nextRel, entry.name)) continue;
    const full = path.join(abs, entry.name);
    if (entry.isSymbolicLink()) continue;
    if (entry.isDirectory()) walk(full, nextRel);
    else if (entry.isFile()) files.push({ full, rel: nextRel.replaceAll(path.sep, '/') });
  }
}

walk(root);
const hash = crypto.createHash('sha256');
for (const f of files) {
  hash.update(f.rel); hash.update('\0'); hash.update(fs.readFileSync(f.full)); hash.update('\0');
}
console.log(JSON.stringify({
  bootstrap_sha256: hash.digest('hex'),
  file_count: files.length,
  excludes: ['owner source assets','derived build assets','agent-run outputs','experiment run outputs','runtime-local external skill directory','local secret env files']
}, null, 2));
