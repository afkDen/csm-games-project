import { execFileSync } from 'node:child_process';

const paths = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' })
  .split('\0')
  .filter(Boolean)
  .map((path) => path.replaceAll('\\', '/'));

const required = 'assets/source/official-anime-stills/character-holding-glasses/.gitkeep';
const violations = paths.filter((path) => {
  if (path.startsWith('assets/source/')) {
    return !/(?:^|\/)(?:\.gitkeep|README\.md)$/.test(path);
  }
  if (/^\.env(?:\.|$)/.test(path) && path !== '.env.example') return true;
  return /(?:^|\/)(?:node_modules|\.next|\.npm-cache|\.cache|dist|coverage|test-results|playwright-report)(?:\/|$)/.test(path);
});

if (!paths.includes(required)) violations.push(`missing required placeholder: ${required}`);

if (violations.length) {
  console.error('Tracked-source boundary failed:');
  for (const path of violations) console.error(`- ${path}`);
  process.exit(1);
}

console.log(`Tracked-source boundary passed (${paths.length} indexed paths).`);
