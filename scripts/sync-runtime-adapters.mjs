import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const canonical = path.join(root, 'portable', 'skills');
const antigravity = path.join(root, '.agents', 'skills');

if (!fs.existsSync(canonical)) throw new Error('Missing portable/skills canonical root.');
fs.mkdirSync(antigravity, { recursive: true });

for (const entry of fs.readdirSync(canonical, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const src = path.join(canonical, entry.name);
  const dst = path.join(antigravity, entry.name);
  fs.rmSync(dst, { recursive: true, force: true });
  fs.cpSync(src, dst, { recursive: true });
}

console.log('Runtime adapters synchronized: portable/skills -> .agents/skills');
