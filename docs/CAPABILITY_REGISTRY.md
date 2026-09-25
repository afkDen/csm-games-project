# Capability Registry

This is a **last-known setup inventory**, not proof of milestone usage. Initialization updates it without exposing secrets.

## Portable baseline

- Canonical project-local skills: discover dynamically from `portable/skills/`.
- Canonical roles: `portable/roles/`.
- Runtime adapter: `runtimes/codex-desktop/adapter.json` for this run; controller is Codex desktop GPT-6, exact desktop-selected variant/effort not exposed.
- Runtime-native/global skills: canonical project skill mirrors visible; additional bundled skills visible; no optional third-party project skills installed.
- Subagent or isolated-context support: `AVAILABLE — USED` — separate orchestrator and fresh independent auditor contexts produced the approved Denji plan and audit.
- Browser/rendered inspection: `AVAILABLE` — Codex in-app browser displayed the local Next.js foundation at `http://localhost:3000`.
- Browser automation / Playwright: `AVAILABLE` via Codex in-app browser actions and its Playwright API; local Playwright package `NOT CONFIGURED`.
- FFmpeg / FFprobe: `BLOCKED — commands unavailable` per `npm run media:doctor`.
- Current documentation connector/source: `CONFIGURED` — Context7 was used by the independent Denji auditor for R3F documentation; official documentation is also reachable through web search/fetch.
- Optional external asset providers: `CONFIGURED` — Pexels and 21st keys are present; 21st catalog tools are callable. Kie key is absent; Poly Haven key is not required by the scaffold. Provider access is conditional on a real asset gap and provenance review.
- Optional image generation: `AVAILABLE / NOT YET USED` via runtime image generation tool.

## Initialization evidence — 2026-09-25

- `node scripts/preflight.mjs`: zero owner source asset files; `.env.local` absent.
- `node scripts/capability-census.mjs`: 22 canonical skills and five canonical roles.
- `npm run portability:audit` and `npm run runtime:validate`: passed.
- `npm run media:doctor`: FFmpeg and FFprobe unavailable.
- Phase 0C foundation: Next.js 16.3.5, React 19.3.0, React DOM 19.3.0, and TypeScript tooling installed from npm; `npm run build` passed. Three.js, GSAP, R3F, and game/audio packages remain unselected until proof milestones.
- `rg` and WinGet-linked FFmpeg executables were not runnable in this sandbox; PowerShell and Node remained available.
- Runtime tool census also found shadcn, Sites, Gmail, and Roblox connectors. They do not materially serve first-slice preproduction; no connection or account mutation was performed.

## Reinspection — 2026-09-25

- Owner inputs: five character eyewear stills and five transparent chibi PNGs. No audio or 3D reference files.
- Optional key presence only: Pexels, 21st, and Context7 configured; Kie not configured. No values were read or recorded.
- `npm run bootstrap:audit` and `npm run build`: passed after inputs arrived.
- FFmpeg/FFprobe still unavailable; no selected planning beat currently requires media transcode.

## Logical model policy

- Controller: `high` reasoning profile.
- Orchestrator/auditor/reviewer: `high` reasoning profile in independent contexts.
- Implementer: `adaptive`; resolve milestone complexity to `execution` or `high` using `docs/REASONING_POLICY.md`.
- `fast` is reserved for bounded helper work, never independent audit/review or critical implementation.

The active runtime adapter maps resolved profiles to concrete provider/model/reasoning controls. Benchmark runs record the exact provider setting. Do not place credentials here.

## Initialization update format

For external resources, record only one of:

`CONFIGURED`, `AVAILABLE / NOT YET USED`, `BLOCKED — <reason>`, `NOT CONFIGURED`, or `UNKNOWN`.

Do not put credentials, tokens, account identifiers, or private connector headers in this file.
