# Capability Routing — github-ci-baseline

The census considered all 22 canonical project skills and their mirrors, visible runtime/global skills, MCP/connector capabilities, local scripts, and optional API presence without reading secret values. This table plans use; reading a skill does not count as material use.

| Capability | Considered | Status | Task-specific reason | Trigger/phase | Expected evidence | Fallback |
| --- | --- | --- | --- | --- | --- | --- |
| `process-tier-routing`, `reasoning-routing`, `capability-routing` | yes | REQUIRED | Classify architectural tier, resolve implementer to high, route actual tools. | orchestration | Packet decision and this table. | Canonical policy docs. |
| `filesystem.read/write`, `command.exec` | yes | REQUIRED | Inspect scripts/index, write workflow, run validation/Git. | all phases | Files, commands, exit codes, SHA. | PowerShell/Node and patch tools. |
| Independent context, `orchestration-audit`, `implementation-evidence-review` | yes | REQUIRED | Preserve separate plan/review gates. | audit/review | Independent audit/review artifacts. | Fresh session/process. |
| `implementation-execution`, `milestone-closeout` | yes | REQUIRED | Execute approved packet, reconcile evidence; controller owns state. | implement/close | Report/review/closeout. | Canonical role/protocol docs. |
| Git CLI and GitHub remote/Actions API or CLI | yes | REQUIRED | Initial commit/push and observed CI are the outcome. | implement/review | Local/remote matching SHA and run URL/conclusion. | GitHub connector/browser; if all unavailable, blocked. |
| Existing bootstrap/build/secret scripts and `git ls-files` | yes | REQUIRED | Audit actual candidate tree and reproducible build. | precommit/CI/review | Non-secret path report and audit/build exits. | Explicit equivalent checks if environment differs. |
| `current_docs.lookup`, web search/fetch | yes | REQUIRED | Action and runner syntax/version can change. | plan/implementation | Official action docs and chosen tags. | Official GitHub pages in browser. |
| `browser.inspect/automate` | yes | CONDITIONAL | Inspect remote Actions UI if CLI/API cannot observe run. | remote verification | Head SHA, steps, conclusion. | CLI/API; otherwise remote gate blocked. |
| Creative, still, scroll, spatial, transition, uniqueness, asset, chibi, game, audio, motion and Theatre skills | yes | DEFERRED | CI has no route/visual/game/audio changes; Denji packet owns them. | after production approval | Denji implementation evidence. | None needed now. |
| `media.ffmpeg`, `image.generate`, external asset search | yes | NOT APPLICABLE | No media derivative or supporting asset selected for CI; FFmpeg unavailable locally. | none | No new media/asset. | None. |
| `revision-resume` | yes | NOT APPLICABLE | Active preproduction milestone, not an autopilot owner interrupt. | none | Approval state preserved. | Controller protocol if revised. |
| Graphify, visualization, office/PDF/Sites/spreadsheet/plugin skills | yes | NOT APPLICABLE | No graph, hosted site, visual or office artifact needed for one workflow. | none | Direct repository evidence. | None. |
| Optional account connectors/APIs (Pexels, 21st, Context7, image/asset services) | yes | NOT APPLICABLE | Asset/account access cannot improve CI correctness; values remain unread. | none | No account mutation. | Official GitHub docs. |

## Current documentation and remote condition

Official [checkout](https://github.com/actions/checkout) and [setup-node](https://github.com/actions/setup-node) repositories were inspected during planning. Implementer confirms compatible maintained tags and Node 24 support before editing the workflow. A planning `git ls-remote` failed due network access, which is an unresolved remote verification condition rather than proof the origin is empty. `rg` was unavailable through its WinGet link; PowerShell/Node served file discovery.
