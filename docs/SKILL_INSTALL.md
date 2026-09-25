# Skill Installation — Portable Core + Project Skill Directory

## Skill layers

The bootstrap uses two deliberate skill layers:

1. **Canonical project skills** — `portable/skills/`. These ship with the bootstrap and define the provider-neutral Chainsaw Lens production behavior.
2. **Project-local runtime skills** — `.agents/skills/`. For Antigravity this is the native project skill directory. It contains synchronized copies of the canonical skills and may also contain optional reviewed third-party skills installed for this project.

The canonical skill source is always `portable/skills/`. Running `npm run adapters:sync` refreshes only the canonical skill names in `.agents/skills/`; it does not delete unrelated third-party skill directories.

## Why optional external skills may stay in `.agents/skills/`

The intended workspace layout places each project under the owner's shared Antigravity scratch tree, so `.agents/skills/` is already project-local. There is no requirement to duplicate third-party skills into a separate vendor directory merely for portability.

For another provider/runtime:

- consume `.agents/skills/<external-skill>/SKILL.md` directly if its adapter can use the same format;
- translate or expose the skill through that runtime's adapter if necessary; or
- mark it unavailable and record the capability variance in the run manifest.

Do **not** copy third-party content into `portable/skills/`. Portable skills are repository-owned canonical policy; external skills remain optional inputs with separate provenance.

## External skill trust boundary

External skills are third-party instructions/code and may change independently of this repository. Inspect the source/ref you intend to install, prefer pinned/reviewed revisions when practical, and record the installed revision/hash for serious experiments. Do not execute unknown helper scripts merely because a skill was installed.

The included installer scripts require explicit `ALLOW_UNPINNED_EXTERNAL_SKILLS=1` opt-in for mutable upstream sources. This makes accidental installation fail closed; it does not make unpinned content reproducible or trusted.

## Fair provider/model comparisons

For a clean benchmark, either:

- start every run with only the bundled canonical skills; or
- give every run the same project-local external skill set.

Run `npm run skills:snapshot` and copy its aggregate **external-skill fingerprint** into the experiment run manifest. A provider that cannot consume an enabled external skill must record that difference rather than silently pretending the runs are equivalent.

## Optional external candidates

The installer knows about optional candidates such as Scroll Craft, Design Taste, Karpathy-inspired engineering guidance, img2threejs, Web Interface Guidelines, and Trail of Bits defensive review. They are **not automatically trusted or required merely because they are listed**.

Emil and Impeccable remain opt-in late-stage review tools. Follow `docs/EMIL_POLICY.md` and `docs/IMPECCABLE_POLICY.md` before use.

## Bootstrap scripts

- Bash/macOS/Linux: `scripts/bootstrap-skills.sh`
- Windows: `scripts/bootstrap-skills.ps1`

Both install optional external skills directly into `.agents/skills/` after explicit opt-in.
