# Start Here — Any Provider / Any Capable Agent Runtime

## 1. Add source assets

Put the highest-quality originals you have into:

```text
assets/source/
  official-anime-stills/
    character-holding-glasses/
      denji.png
      makima.png
      aki.png
      power.png
      reze.png
  chibi/
      denji/...
      makima/...
      aki/...
      power/...
      reze/...
  audio/             # optional source/reference audio
  3d-reference/      # optional object/product reference images
```

Do not preprocess them manually unless you want to. The pipeline creates only the derivatives it actually needs.

## 2. Add optional API keys

Copy `.env.example` to `.env.local` and fill only integrations you intend to use. Never put secret values into prompts or Markdown.

## 3. Choose a runtime

Read `runtimes/README.md` and `docs/PORTABLE_RUNBOOK.md`.

- **Antigravity:** use `runtimes/antigravity/` and `docs/ANTIGRAVITY_SETUP.md`.
- **Other native multi-agent provider/runtime:** start from `runtimes/provider-template/adapter.example.json`.
- **No native subagents:** use `runtimes/generic/` with separate fresh sessions/contexts for each role.

The runtime should be able to read/write the project, execute commands, and provide independent contexts for plan audit and implementation review. Browser/rendered inspection is required for complete visual review.

## 4. Paste one initialization prompt

Give the runtime/controller `ONE_SHOT_INIT_PROMPT.md` with the repository root available.

The creative direction is already locked: supplied stills lead the visuals; character truth leads behavior; the global tone is pastel/colorful rather than dark-by-default; scroll is a continuous timeline; major routes must feel spatial rather than flat; transition choreography must be reversible, retargetable, interruption-safe, and materially different across characters.

## 5. Give one production green light

When the independently audited first-slice plan is convincing, reply:

> Approved. Proceed.

From then on, the controller uses `docs/PROCESS_TIER_POLICY.md`: trivial work stays lightweight, normal work gets implementation + independent review, and major/architectural milestones use `orchestrator → plan auditor → implementer → implementation reviewer → closeout`.

## 6. To compare providers/models

Use **separate fresh copies/worktrees** and follow `docs/MULTI_PROVIDER_TESTING.md`. If optional project-local external skills are enabled, record `npm run skills:snapshot` for every run. Before benchmark implementation, freeze the run with `npm run experiment:lock -- <run-id>`. Do not let later runs inherit code, generated assets, or review findings from earlier runs unless transfer is the thing you are intentionally testing.

## 7. Interrupt whenever you want

Owner revisions are bounded interrupts, not resets. The controller should checkpoint, plan/audit the revision, implement/review it, then resume the prior target. Say **hold** or **wait for my review** when you want production to stop.
