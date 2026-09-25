import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const canonicalSkillRoot = path.join(root, 'portable', 'skills');
const portableRoleRoot = path.join(root, 'portable', 'roles');
const antigravityAgentRoot = path.join(root, '.agents', 'agents');

function dirsWithFile(base, filename) {
  if (!fs.existsSync(base)) return [];
  return fs.readdirSync(base, { withFileTypes: true })
    .filter(d => d.isDirectory() && fs.existsSync(path.join(base, d.name, filename)))
    .map(d => d.name).sort();
}

function mdStems(base) {
  if (!fs.existsSync(base)) return [];
  return fs.readdirSync(base, { withFileTypes: true })
    .filter(d => d.isFile() && d.name.endsWith('.md'))
    .map(d => d.name.replace(/\.md$/, '')).sort();
}

function parseEnvPresence(file) {
  const result = {};
  if (!fs.existsSync(file)) return result;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (!m) continue;
    result[m[1]] = m[2].trim().length > 0 ? 'configured' : 'empty';
  }
  return result;
}

const localSkills = dirsWithFile(canonicalSkillRoot, 'SKILL.md');
const roles = mdStems(portableRoleRoot);
const antigravityAgents = dirsWithFile(antigravityAgentRoot, 'agent.md');
const env = parseEnvPresence(path.join(root, '.env.local'));
const interestingKeys = ['PEXELS_API_KEY', 'API_KEY_21ST', 'CONTEXT7_API_KEY'];

console.log('# Portable Capability Census');
console.log(`Canonical skills (${localSkills.length}): ${localSkills.join(', ') || 'none'}`);
console.log(`Canonical roles (${roles.length}): ${roles.join(', ') || 'none'}`);
console.log(`Bundled Antigravity adapter agents (${antigravityAgents.length}): ${antigravityAgents.join(', ') || 'none'}`);
console.log('Optional API key presence (values never printed):');
for (const key of interestingKeys) console.log(`- ${key}: ${env[key] === 'configured' ? 'configured' : 'not configured'}`);
console.log('- FFmpeg/FFprobe: discover via npm run media:doctor when media work is relevant');
console.log('- Runtime-native subagent/browser/research/connectors: must be discovered by the active runtime during initialization');
console.log('- Logical capability mapping: see portable/pipeline.manifest.json and the active adapter under runtimes/');
