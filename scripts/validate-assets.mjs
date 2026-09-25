import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const targets = [
  ['ASSET_MANIFEST.json', 'assets'],
  ['AUDIO_MANIFEST.json', 'assets'],
];

let failures = 0;
for (const [file, key] of targets) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) {
    console.error(`Missing ${file}`);
    failures++;
    continue;
  }
  let json;
  try { json = JSON.parse(fs.readFileSync(full, 'utf8')); }
  catch { console.error(`${file}: invalid JSON`); failures++; continue; }
  if (!Array.isArray(json[key])) {
    console.error(`${file}: ${key} must be an array`);
    failures++;
    continue;
  }
  const ids = new Set();
  for (const [i, item] of json[key].entries()) {
    const required = ['id', 'kind', 'source', 'license_or_terms', 'status'];
    for (const field of required) {
      if (!item?.[field]) {
        console.error(`${file}[${i}]: missing ${field}`);
        failures++;
      }
    }
    if (item?.id) {
      if (ids.has(item.id)) {
        console.error(`${file}[${i}]: duplicate id ${item.id}`);
        failures++;
      }
      ids.add(item.id);
    }
    if (item?.status === 'production' && !item?.output_path) {
      console.error(`${file}[${i}]: production asset must declare output_path`);
      failures++;
    }
    if (item?.status === 'production' && item?.output_path) {
      const output = path.resolve(root, item.output_path);
      if (!output.startsWith(path.resolve(root, 'public') + path.sep)) {
        console.error(`${file}[${i}]: production output must be under public/: ${item.output_path}`);
        failures++;
      } else if (!fs.existsSync(output)) {
        console.error(`${file}[${i}]: production output missing: ${item.output_path}`);
        failures++;
      }
    }
  }
}

if (failures) process.exit(1);
console.log('Asset/audio manifests structurally valid.');
