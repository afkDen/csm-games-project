import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const roots = [root, path.join(root, 'docs'), path.join(root, '.agents', 'skills')];
const markdown = [];
const seen = new Set();

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git'].includes(entry.name)) continue;
      walk(full);
    } else if (entry.isFile() && entry.name.endsWith('.md') && !seen.has(full)) {
      seen.add(full);
      markdown.push(full);
    }
  }
}
for (const dir of roots) walk(dir);

const dynamicRunArtifacts = new Set(['ORCHESTRATION_PACKET.md','CAPABILITY_ROUTING.md','ORCHESTRATION_AUDIT.md','IMPLEMENTATION_REPORT.md','IMPLEMENTATION_REVIEW.md','MILESTONE_CLOSEOUT.md']);

let failures = 0;
for (const file of markdown) {
  const text = fs.readFileSync(file, 'utf8');
  const refs = new Set();
  for (const match of text.matchAll(/`([^`\n]+\.md)`/g)) refs.add(match[1]);
  for (const match of text.matchAll(/\[[^\]]*\]\((?!https?:|#|mailto:)([^)]+\.md)(?:#[^)]+)?\)/g)) refs.add(match[1]);
  for (const ref of refs) {
    if (ref === 'SKILL.md' || dynamicRunArtifacts.has(ref) || /^https?:\/\//i.test(ref) || ref.includes('*') || ref.includes('<') || ref.includes('>')) continue;
    const candidates = [
      path.resolve(path.dirname(file), ref),
      path.resolve(root, ref),
      path.resolve(root, 'docs', ref),
    ];
    if (!candidates.some(fs.existsSync)) {
      console.error(`Doc ref check: ${path.relative(root, file)} -> missing ${ref}`);
      failures++;
    }
  }
}

if (failures) process.exit(1);
console.log(`Documentation references OK across ${markdown.length} Markdown files.`);
