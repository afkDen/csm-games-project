import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const instructionFiles = [
  'ONE_SHOT_INIT_PROMPT.md',
  'MASTER_PROMPT.md',
  'PRODUCT.md',
  'DESIGN.md',
  'START_HERE.md',
  'APPROVE_AND_PROCEED.md',
];
const hash = crypto.createHash('sha256');
for (const rel of instructionFiles) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) {
    console.error(`Missing owner-instruction source: ${rel}`);
    process.exit(1);
  }
  hash.update(rel); hash.update('\0'); hash.update(fs.readFileSync(full)); hash.update('\0');
}
console.log(JSON.stringify({
  owner_instruction_sha256: hash.digest('hex'),
  files: instructionFiles
}, null, 2));
