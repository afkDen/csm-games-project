# Portable Pipeline Core

This directory is the provider-neutral source of truth for the Chainsaw Lens production pipeline.

Use it when running the project with any model/provider/runtime. Runtime-specific files may map these roles, skills, and capabilities to a particular agent system, but they must not redefine the creative or quality contracts.

## Canonical components

- `pipeline.manifest.json` — machine-readable role loop, gates, artifacts, logical capabilities, and required contracts.
- `roles/` — provider-neutral role prompts.
- `skills/` — canonical repository-owned project skills. Runtime mirrors must remain byte-equivalent unless an adapter explicitly documents a wrapper-only transformation.
- root `docs/` contracts — product/creative/engineering truth shared by every runtime.

Optional third-party skills exposed by a runtime are experiment inputs, not part of this canonical portable core.

## Runtime rule

Concrete model IDs, provider names, tool names, subagent APIs, MCP syntax, permission flags, and reasoning-effort controls belong under `runtimes/`, not in the portable core.

A conforming runtime must preserve:

1. controller state ownership;
2. independent plan audit;
3. implementation from an approved packet;
4. independent running-result review;
5. bounded repair/replan loops;
6. evidence-backed capability routing;
7. all creative, transition, uniqueness, asset, media, and quality gates.

If native subagents are unavailable, use isolated fresh contexts manually or through an external orchestrator. Do not collapse the auditor/reviewer into self-approval merely for convenience.

## Reasoning

Reasoning intent is provider-neutral. Use `docs/REASONING_POLICY.md`: fixed `high` for controller/orchestration/audit/review; adaptive implementation resolved per milestone. Runtime adapters own exact effort/budget/model-variant controls and benchmark manifests record what was actually used.
