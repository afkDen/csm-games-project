import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const envPath = path.join(root, '.env.local');

function parseEnv(text) {
  const out = [];
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const idx = line.indexOf('=');
    if (idx < 1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    if (value.length >= 6) out.push([key, value]);
  }
  return out;
}

const configuredSecrets = fs.existsSync(envPath) ? parseEnv(fs.readFileSync(envPath, 'utf8')) : [];
const ignoredDirs = new Set(['.git', 'node_modules', '.next', 'out', 'dist', 'coverage', 'playwright-report', 'test-results', 'assets']);
const textExts = new Set(['.md', '.txt', '.json', '.js', '.mjs', '.cjs', '.ts', '.tsx', '.jsx', '.css', '.scss', '.html', '.yml', '.yaml', '.toml', '.sh', '.ps1']);

const highConfidencePatterns = [
  ['private key block', /-----BEGIN (?:RSA |EC |OPENSSH |DSA |PGP )?PRIVATE KEY-----/g],
  ['AWS access key', /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/g],
  ['GitHub token', /\bgh(?:p|o|u|s|r)_[A-Za-z0-9]{30,}\b/g],
  ['Google API key', /\bAIza[0-9A-Za-z_-]{35}\b/g],
  ['OpenAI-style secret key', /\bsk-[A-Za-z0-9_-]{20,}\b/g],
];

const exactHits = new Map();
const patternHits = [];
const stack = [root];

while (stack.length) {
  const dir = stack.pop();
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(root, full).replaceAll('\\', '/');
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name) && !entry.name.startsWith('.tmp-')) stack.push(full);
      continue;
    }
    if (rel === '.env.local' || rel === '.env') continue;
    if (!textExts.has(path.extname(entry.name).toLowerCase())) continue;
    let stat;
    try { stat = fs.statSync(full); } catch { continue; }
    if (stat.size > 2_000_000) continue;
    const text = fs.readFileSync(full, 'utf8');

    for (const [key, value] of configuredSecrets) {
      if (text.includes(value)) {
        if (!exactHits.has(key)) exactHits.set(key, []);
        exactHits.get(key).push(rel);
      }
    }

    // Skip the scanner source itself so its literal detection regexes do not self-trigger.
    if (rel === 'scripts/scan-secrets.mjs') continue;
    for (const [label, pattern] of highConfidencePatterns) {
      pattern.lastIndex = 0;
      if (pattern.test(text)) patternHits.push([label, rel]);
    }
  }
}

if (exactHits.size || patternHits.length) {
  for (const [key, files] of exactHits) {
    console.error(`Secret scan: configured value for ${key} appears in ${files.length} tracked/text candidate file(s): ${files.join(', ')}`);
  }
  for (const [label, rel] of patternHits) console.error(`Secret scan: high-confidence ${label} pattern found in ${rel}`);
  process.exit(1);
}

if (configuredSecrets.length) {
  console.log(`Secret scan passed: checked ${configuredSecrets.length} configured credential value(s) plus high-confidence token/key patterns; values were not printed.`);
} else {
  console.log('Secret scan passed: no configured credential values; high-confidence token/key patterns also clear.');
}
