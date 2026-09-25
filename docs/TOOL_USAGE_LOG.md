# Tool / Skill / MCP Usage Ledger

This ledger records **material use**, not availability or consideration. Capability consideration belongs in each milestone's `CAPABILITY_ROUTING.md`.

## Truth rules

- `USED` only when a capability materially changes a decision, artifact, implementation, verification result, or issue fix.
- Reading a skill file, detecting an MCP, or listing a tool is not usage.
- `CONDITIONAL` capabilities whose trigger never fires remain not used; that is acceptable.
- A blocked applicable capability records the blocker and fallback; never silently skip it.
- The implementation reviewer reconciles planned routing with actual evidence before milestone closeout.
- Do not print secrets, private values, or raw credential-bearing configuration as evidence.

## Entry template

```md
### YYYY-MM-DD — <milestone>

**<capability> — USED:** <what materially changed>; evidence: <artifact/test/result>; affected area: <scope>.
```

## Current project state

No production capability is claimed as used solely by this bootstrap package. Initialization and later milestone runs append truthful entries as work occurs.
