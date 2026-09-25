import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(root, 'assets', 'source');
const files = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a,b) => a.name.localeCompare(b.name))) {
    const full = path.join(dir, entry.name);
    if (entry.isSymbolicLink()) continue;
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile()) files.push(full);
  }
}
walk(sourceRoot);

const aggregate = crypto.createHash('sha256');
for (const full of files) {
  const rel = path.relative(sourceRoot, full).replaceAll(path.sep, '/');
  aggregate.update(rel); aggregate.update('\0');
  aggregate.update(fs.readFileSync(full)); aggregate.update('\0');
}

console.log(JSON.stringify({
  source_asset_file_count: files.length,
  aggregate_sha256: aggregate.digest('hex'),
  note: 'Hashes local source-asset paths and bytes; does not print asset contents.'
}, null, 2));
