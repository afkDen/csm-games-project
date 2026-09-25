import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let failures = 0;
const fail = (m) => { console.error(`Runtime adapter audit: ${m}`); failures++; };

const requiredRoles = ['controller','experience-orchestrator','orchestration-auditor','production-implementer','implementation-reviewer'];
const requiredCaps = ['filesystem.read','filesystem.write','command.exec','subagent.spawn_or_isolated_context','browser.inspect'];

function parse(rel) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) { fail(`missing ${rel}`); return null; }
  try { return JSON.parse(fs.readFileSync(full, 'utf8')); }
  catch { fail(`invalid JSON: ${rel}`); return null; }
}

function validateAdapter(rel, adapter, { template = false } = {}) {
  if (!adapter) return;
  if (adapter.adapter_schema_version !== 2) fail(`${rel}: adapter_schema_version must be 2`);
  if (!adapter.runtime_id) fail(`${rel}: missing runtime_id`);
  if (!adapter.provider) fail(`${rel}: missing provider`);
  if (!adapter.execution_mode) fail(`${rel}: missing execution_mode`);
  const caps = adapter.capability_mapping || {};
  for (const cap of requiredCaps) if (!caps[cap]) fail(`${rel}: missing capability mapping ${cap}`);
  if (adapter.role_model_mapping) {
    for (const role of requiredRoles) if (!adapter.role_model_mapping[role]) fail(`${rel}: missing role model mapping ${role}`);
  }
  if (!adapter.reasoning_mapping) fail(`${rel}: missing reasoning_mapping`);
  for (const profile of ['high','execution','fast','adaptive']) {
    if (!adapter.reasoning_mapping?.[profile]) fail(`${rel}: missing reasoning mapping ${profile}`);
  }
  const serialized = JSON.stringify(adapter);
  if (/(api[_-]?key|secret|token|password)\s*[:=]\s*["'][^"']{8,}/i.test(serialized)) {
    fail(`${rel}: appears to contain a credential value`);
  }
}

const antigravity = parse('runtimes/antigravity/adapter.json');
validateAdapter('runtimes/antigravity/adapter.json', antigravity);
const template = parse('runtimes/provider-template/adapter.example.json');
validateAdapter('runtimes/provider-template/adapter.example.json', template, { template: true });

for (const rel of ['runtimes/README.md','runtimes/generic/README.md','runtimes/provider-template/README.md','docs/PORTABLE_RUNBOOK.md','docs/PROVIDER_BENCHMARK_RUBRIC.md']) {
  if (!fs.existsSync(path.join(root, rel))) fail(`missing ${rel}`);
}

if (failures) process.exit(1);
console.log('Runtime adapter audit passed.');
