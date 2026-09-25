# Experiment Lock Contract

Cross-provider comparisons are only meaningful when the starting conditions are frozen and auditable.

## What is locked

Before major implementation in a benchmark run, create `docs/experiments/runs/<run-id>/RUN_LOCK.json` with:

- bootstrap fingerprint;
- source-asset fingerprint;
- owner-instruction fingerprint;
- external-skill fingerprint;
- runtime identifier and provider mode;
- declared capabilities;
- permission profile;
- experiment mode and declared budget constraints;
- role → provider/model/reasoning configuration as declared at lock time;
- process-tier and reasoning-policy revisions.

The lock contains hashes and configuration metadata, not secret values or source-asset contents.

## When to lock

Lock after Phase 0 capability discovery and after the first-slice plan has resolved the first implementation tier/reasoning needs, but **before major implementation begins**.

If a clean benchmark requires changing a locked input, create a new run ID or explicitly classify the run as a non-clean transfer/repair experiment. Do not silently rewrite the lock.

## Mutable results are not locked inputs

Review counts, implementation findings, final-gate status, and outcome notes may change during the run. They are intentionally excluded from the immutable input snapshot.

## Verification

Run:

```bash
npm run experiment:lock -- <run-id>
npm run experiment:lock:verify -- <run-id>
```

A lock verification failure means the run no longer matches its recorded starting conditions. Do not compare it as a clean baseline until the mismatch is explained or the run is restarted.

## Privacy

Fingerprints may hash private owner assets locally, but lock files must not embed the asset bytes, secret values, connector tokens, or `.env.local` contents.
