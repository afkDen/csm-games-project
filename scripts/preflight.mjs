import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const envPath = path.join(root, '.env.local');
const envExamplePath = path.join(root, '.env.example');
const sourceRoot = path.join(root, 'assets', 'source');

function parseEnv(text) {
  const out = new Map();
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const idx = line.indexOf('=');
    if (idx < 0) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    out.set(key, value);
  }
  return out;
}

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const stack = [dir];
  const files = [];
  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (entry.isFile() && !entry.name.startsWith('.')) files.push(full);
    }
  }
  return files;
}

if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
  console.log('.env.local is absent; optional integrations remain unconfigured. Copy .env.example to .env.local explicitly if needed.');
}

const env = fs.existsSync(envPath) ? parseEnv(fs.readFileSync(envPath, 'utf8')) : new Map();
const supportedKeys = ['PEXELS_API_KEY', 'API_KEY_21ST', 'CONTEXT7_API_KEY', 'KIE_AI_API_KEY'];

console.log('\nCredential configuration (values never printed):');
for (const key of supportedKeys) {
  const configured = Boolean(env.get(key));
  console.log(`- ${key}: ${configured ? 'configured' : 'not configured'}`);
}
console.log('- POLY_HAVEN_API_KEY: not required by this scaffold');

const files = walkFiles(sourceRoot).filter((file) => !/README\.md$/i.test(file));
const categoryCounts = new Map();
for (const file of files) {
  const rel = path.relative(sourceRoot, file).replaceAll('\\', '/');
  const category = rel.includes('/') ? rel.split('/')[0] : '(root)';
  categoryCounts.set(category, (categoryCounts.get(category) ?? 0) + 1);
}

console.log('\nOwner source assets:');
console.log(`- total files: ${files.length}`);
if (categoryCounts.size === 0) {
  console.log('- no owner source assets detected yet');
} else {
  for (const [category, count] of [...categoryCounts.entries()].sort()) {
    console.log(`- ${category}: ${count}`);
  }
}

const rawPublicPath = path.join(root, 'public', 'assets', 'source');
if (fs.existsSync(rawPublicPath)) {
  console.error('\nERROR: public/assets/source exists. Raw source assets must not be public.');
  process.exitCode = 1;
}

console.log('\nPreflight complete.');
