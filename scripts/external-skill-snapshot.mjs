import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const portableRoot = path.join(root, 'portable', 'skills');
const localRoot = path.join(root, '.agents', 'skills');

const canonical = new Set(
  fs.existsSync(portableRoot)
    ? fs.readdirSync(portableRoot, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)
    : []
);

function hashTree(dir) {
  const hash = crypto.createHash('sha256');
  const files = [];
  function walk(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true }).sort((a,b) => a.name.localeCompare(b.name))) {
      const full = path.join(current, entry.name);
      if (entry.isSymbolicLink()) continue;
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile()) files.push(full);
    }
  }
  walk(dir);
  for (const full of files) {
    hash.update(path.relative(dir, full).replaceAll(path.sep, '/'));
    hash.update('\0');
    hash.update(fs.readFileSync(full));
    hash.update('\0');
  }
  return hash.digest('hex');
}

const external = [];
if (fs.existsSync(localRoot)) {
  for (const entry of fs.readdirSync(localRoot, { withFileTypes: true }).filter((e) => e.isDirectory()).sort((a,b) => a.name.localeCompare(b.name))) {
    if (canonical.has(entry.name)) continue;
    const dir = path.join(localRoot, entry.name);
    external.push({ name: entry.name, sha256: hashTree(dir) });
  }
}

const aggregate = crypto.createHash('sha256')
  .update(JSON.stringify(external))
  .digest('hex');

console.log(JSON.stringify({
  external_skill_count: external.length,
  aggregate_sha256: aggregate,
  skills: external
}, null, 2));
