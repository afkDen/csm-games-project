import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slug = process.argv[2];
if (!slug || !/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
  console.error('Usage: node scripts/new-agent-run.mjs <lowercase-kebab-milestone>');
  process.exit(1);
}
const out = path.join(root, 'docs', 'agent-runs', slug);
if (fs.existsSync(out) && fs.readdirSync(out).length) {
  console.error(`Agent run already exists and is non-empty: ${path.relative(root, out)}`);
  process.exit(1);
}
fs.mkdirSync(out, { recursive: true });
const files = [
  ['ORCHESTRATION_PACKET.md', 'ORCHESTRATION_PACKET_TEMPLATE.md'],
  ['CAPABILITY_ROUTING.md', 'CAPABILITY_ROUTING_TEMPLATE.md'],
  ['ORCHESTRATION_AUDIT.md', 'ORCHESTRATION_AUDIT_TEMPLATE.md'],
  ['IMPLEMENTATION_REPORT.md', 'IMPLEMENTATION_REPORT_TEMPLATE.md'],
  ['IMPLEMENTATION_REVIEW.md', 'IMPLEMENTATION_REVIEW_TEMPLATE.md'],
  ['MILESTONE_CLOSEOUT.md', 'MILESTONE_CLOSEOUT_TEMPLATE.md'],
];
for (const [dest, src] of files) {
  const text = fs.readFileSync(path.join(root, 'docs', 'agent-loop', src), 'utf8').replaceAll('<milestone>', slug);
  fs.writeFileSync(path.join(out, dest), text);
}
console.log(`Created agent-run packet: ${path.relative(root, out)}`);
