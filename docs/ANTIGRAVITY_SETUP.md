# Antigravity Setup

## Adapter scope

This document is runtime-specific. The provider-neutral source of truth is `portable/` plus `docs/RUNTIME_PORTABILITY_CONTRACT.md`. Antigravity model/tool syntax here must not be copied into the portable core.


Verified against current Google Antigravity documentation on 2026-09-16.

## Workspace locations

- Skills: `.agents/skills/<skill-name>/SKILL.md`
- Custom agents: `.agents/agents/<name>/agent.md` (or `.agents/agents/<name>.md`)

Antigravity discovers both at workspace scope.

## Custom agent schema used here

The included agents use documented fields only:

- `name`
- `description`
- `tools`
- `mainAgent`
- `subagent`
- `model` (`inherit` or `flash` in this project)
- `commandExecutionPolicy`
- `skills`

Do **not** add an undocumented `effort:` frontmatter field. Current Antigravity agent definitions document `model: inherit|flash|pro`, while exact reasoning effort/model slugs are selectable at runtime/headless.

## Recommended owner setup

1. Open the repository as an Antigravity workspace.
2. Select the custom primary agent `lens-autopilot` from `/agents` or the agent manager.
3. Select **Gemini 3.8 Flash High** before the initialization turn.
4. Use a normal/sandboxed permission profile; use `accept-edits` only if you are comfortable with long autonomous file-writing stretches.
5. Paste `ONE_SHOT_INIT_PROMPT.md`.

The selected reasoning model is sticky within a turn, so choose High before starting the long initialization/autopilot turn.

## Reasoning profile

The pipeline is designed for:

| Role | Intended profile |
| --- | --- |
| `lens-autopilot` | Gemini 3.8 Flash High |
| `experience-orchestrator` | inherits High |
| `orchestration-auditor` | inherits High |
| `production-implementer` | adaptive; interactive wrapper inherits the selected model for safety, while isolated/headless runs may resolve routine/substantial work to Medium and critical work to High |
| `implementation-reviewer` | inherits High |

For strict headless pinning, Antigravity CLI currently supports model slugs such as `gemini-3.8-flash-high` and `gemini-3.8-flash-medium`, plus `--effort low|medium|high`. The interactive custom-agent loop uses the documented agent schema and does not pretend an unsupported effort field exists.

Because the custom-agent frontmatter does not expose per-invocation reasoning effort, the bundled `production-implementer` wrapper uses `model: inherit` as the safe interactive default. This means an owner-selected High conversation can execute critical implementation without being silently downshifted. To benchmark lower-cost `execution` settings, run the implementer in a separately pinned/headless context and record the exact model/effort in the experiment manifest. See `docs/REASONING_POLICY.md`.

## Built-in subagents

Antigravity includes `research`, `browser`, and `self`. This project encourages `research` for bounded codebase exploration. The browser capability is used for rendered UX evidence alongside Playwright when available.

## Tools

The custom agent tool lists use names documented by Antigravity (`view_file`, `write_to_file`, `replace_file_content`, `multi_replace_file_content`, `list_dir`, `find_by_name`, `grep_search`, `run_command`, `search_web`, `read_url_content`, and collaboration tools where needed). Antigravity warns that misspelled/unmapped tool names can hang a custom subagent, so do not casually edit these names.

## External setup

Initialization follows `docs/SKILL_INSTALL.md` and `docs/MCP_AND_API_SETUP.md`. If OAuth/browser login is required, the agent should complete all non-blocked work first and ask the owner only for that action.
