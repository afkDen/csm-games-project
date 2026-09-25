import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let fail = 0;
const requiredAgents = ['lens-autopilot','experience-orchestrator','orchestration-auditor','production-implementer','implementation-reviewer'];
const requiredCoreSkills = ['capability-routing','orchestration-audit','implementation-execution','implementation-evidence-review','revision-resume','world-uniqueness-audit','milestone-closeout','creative-direction-guardian','scroll-experience-director','transition-continuity','spatial-depth-director','media-pipeline-ffmpeg','reasoning-routing','process-tier-routing'];
const documentedTools = new Set(['view_file','write_to_file','replace_file_content','multi_replace_file_content','list_dir','find_by_name','grep_search','run_command','search_web','read_url_content','invoke_subagent','send_message','manage_subagents','ask_question']);

for (const name of requiredAgents) {
  const file = path.join(root,'.agents','agents',name,'agent.md');
  if (!fs.existsSync(file)) { console.error(`Missing agent: ${name}`); fail++; continue; }
  const t = fs.readFileSync(file,'utf8');
  if (!t.startsWith('---\n') || !t.includes(`name: ${name}`)) { console.error(`Invalid agent frontmatter: ${name}`); fail++; }
  const toolBlock = t.match(/\ntools:\n([\s\S]*?)\n(?:mainAgent|subagent|model|commandExecutionPolicy|skills):/);
  if (toolBlock) {
    for (const m of toolBlock[1].matchAll(/^\s*-\s+([^\s#]+)\s*$/gm)) {
      if (!documentedTools.has(m[1])) { console.error(`Unknown/unreviewed Antigravity tool in ${name}: ${m[1]}`); fail++; }
    }
  }
  if (/^\s*effort:/m.test(t)) { console.error(`Unsupported custom-agent effort field in ${name}`); fail++; }

  for (const m of t.matchAll(/^\s*-\s+skills\/([a-z0-9-]+)\s*$/gm)) {
    const skillFile = path.join(root,'.agents','skills',m[1],'SKILL.md');
    if (!fs.existsSync(skillFile)) { console.error(`Missing referenced skill in ${name}: ${m[1]}`); fail++; }
  }
}

for (const name of requiredCoreSkills) {
  const file = path.join(root,'.agents','skills',name,'SKILL.md');
  if (!fs.existsSync(file)) { console.error(`Missing meta skill: ${name}`); fail++; }
}
for (const rel of ['docs/AGENT_LOOP_PROTOCOL.md','docs/CAPABILITY_ROUTING_POLICY.md','docs/CAPABILITY_REGISTRY.md','docs/ANTIGRAVITY_SETUP.md']) {
  if (!fs.existsSync(path.join(root,rel))) { console.error(`Missing protocol doc: ${rel}`); fail++; }
}
if (fail) process.exit(1);
console.log(`Antigravity agent system OK: ${requiredAgents.length} agents, ${requiredCoreSkills.length} required core skills.`);
