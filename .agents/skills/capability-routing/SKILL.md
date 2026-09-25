---
name: capability-routing
description: "Build an explicit task-by-task capability census and routing matrix across installed skills, MCP servers, APIs, runtime-native subagents/research helpers, scripts, and existing project systems. Use for normal/major/architectural work (and trivial work only when capability uncertainty is itself relevant) so relevant capabilities are deliberately evaluated instead of silently omitted or performatively invoked."
---

# Capability Routing

Use `docs/CAPABILITY_ROUTING_POLICY.md` as the authoritative contract.

## Mission

For the current milestone, determine **what is actually available, what is materially applicable, and what evidence would prove useful use**. The goal is neither minimal-tool laziness nor maximal-tool theater.

## Required census

For major/architectural work, perform the full census below. For normal work, scope it to materially plausible capabilities. Trivial work may skip exhaustive census when the change is fully bounded. Before planning implementation:

1. Inspect every canonical project skill under `portable/skills/*/SKILL.md`, any vendored/external skills enabled for the run, and any external/global skills visible to the runtime.
2. Inspect `docs/CAPABILITY_REGISTRY.md` and current runtime MCP/tool availability. Do not assume a configured MCP from memory.
3. Check which optional APIs are configured without exposing secret values.
4. Consider built-in `research` and browser capabilities, Playwright, local scripts, and existing project infrastructure.
5. Classify each materially plausible capability as `REQUIRED`, `CONDITIONAL`, `DEFERRED`, `NOT APPLICABLE`, or `BLOCKED`.
6. Give a concrete reason for every non-obvious decision. `NOT APPLICABLE` means the capability was considered and has a technical/design reason not to be used.

## Routing standard

A capability is `REQUIRED` only if it should materially influence design, implementation, research, or verification. A capability is not `USED` because its file was read.

For each `REQUIRED` capability, define:

- what question or decision it owns;
- when in the milestone it should be invoked;
- what artifact/result/evidence should exist afterward;
- what fallback exists if it is unavailable.

For each `CONDITIONAL` capability, define the trigger that activates it.

## Version-sensitive APIs

If the implementation depends on a current or version-sensitive framework/library API and an authoritative documentation connector such as Context7 is available, route that lookup before code. Do not rely on remembered APIs when current documentation is available.

## Output

Write the milestone routing table to `docs/agent-runs/<milestone>/CAPABILITY_ROUTING.md` using the repository template.

The routing table is a plan, not usage evidence. Actual use is audited after implementation.
