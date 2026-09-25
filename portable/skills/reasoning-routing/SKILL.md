---
name: reasoning-routing
description: "Classify milestone complexity, resolve provider-neutral reasoning profiles, trigger escalation for critical interaction/state work, and record exact runtime reasoning settings for reproducible cross-provider experiments."
---

# Reasoning Routing

Use with `docs/REASONING_POLICY.md`.

## Inputs

- current milestone orchestration packet;
- implementation ownership/state complexity;
- runtime adapter reasoning mapping;
- experiment mode/budget constraints;
- previous audit/review findings.

## Procedure

1. Keep controller, orchestrator, auditor, and reviewer on logical `high`.
2. For implementation, classify the milestone as `routine`, `substantial`, or `critical`.
3. Check every forced-high trigger in `docs/REASONING_POLICY.md`.
4. Resolve `adaptive` to `execution` or `high` **before** implementation begins.
5. Record the complexity, resolved profile, triggers, and rationale in the orchestration packet/run manifest.
6. Let the runtime adapter map the resolved profile to its concrete effort/budget/model-variant control.
7. Record the exact provider-side setting actually used. If none exists, record `type: none` rather than inventing an equivalent.
8. Escalate repair work to `high` when a substantive finding survives a repair attempt or when debugging crosses system ownership boundaries.

## Guardrails

- `adaptive` is a policy selector, never a provider setting.
- `execution` is not shorthand for lowest-cost/no-reasoning mode.
- `fast` never owns audit/review or critical implementation.
- Provider controls are not assumed numerically equivalent.
- Do not lower reasoning to compensate for an over-ambitious plan; fix the plan or optimize the implementation.
