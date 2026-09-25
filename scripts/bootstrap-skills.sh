#!/usr/bin/env bash
set -euo pipefail

INCLUDE_OPTIONAL_REVIEW="${INCLUDE_OPTIONAL_REVIEW:-0}"
ALLOW_UNPINNED_EXTERNAL_SKILLS="${ALLOW_UNPINNED_EXTERNAL_SKILLS:-0}"

if [[ "$ALLOW_UNPINNED_EXTERNAL_SKILLS" != "1" ]]; then
  echo "Refusing to install mutable third-party skill sources by default." >&2
  echo "Review docs/SKILL_INSTALL.md, then set ALLOW_UNPINNED_EXTERNAL_SKILLS=1 only if you accept the current upstream revisions." >&2
  exit 2
fi

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKILLS="$ROOT/.agents/skills"
mkdir -p "$SKILLS"
cd "$ROOT"

echo "Installing explicitly authorized external skills into project-local .agents/skills/..."

install_via_skills_cli() {
  local repo="$1"
  local skill="$2"
  npx --yes skills@latest add "$repo" --skill "$skill" --agent antigravity --copy --yes
  if [[ ! -d "$SKILLS/$skill" ]]; then
    echo "Expected installed skill not found at .agents/skills/$skill" >&2
    return 1
  fi
}

install_via_skills_cli https://github.com/Leonxlnx/taste-skill design-taste-frontend
install_via_skills_cli https://github.com/duolahypercho/andrej-karpathy-skills andrej-karpathy-skill
install_via_skills_cli https://github.com/vercel-labs/agent-skills web-design-guidelines
install_via_skills_cli https://github.com/trailofbits/skills insecure-defaults
install_via_skills_cli https://github.com/trailofbits/skills differential-review

TMP="$ROOT/.tmp-scroll-craft"
rm -rf "$TMP"
git clone --depth 1 https://github.com/nateherkai/scroll-craft "$TMP"
rm -rf "$SKILLS/scroll-craft"
cp -R "$TMP/plugins/nateherk-design/skills/scroll-craft" "$SKILLS/scroll-craft"
rm -rf "$TMP"

TMP_IMG="$ROOT/.tmp-img2threejs"
rm -rf "$TMP_IMG"
git clone --depth 1 https://github.com/img2threejs/img2threejs "$TMP_IMG"
rm -rf "$SKILLS/img2threejs"
cp -R "$TMP_IMG" "$SKILLS/img2threejs"
rm -rf "$TMP_IMG"

if [[ "$INCLUDE_OPTIONAL_REVIEW" == "1" ]]; then
  install_via_skills_cli https://github.com/emilkowalski/skills emil-design-eng
  echo "Impeccable remains manual/opt-in. Review docs/EMIL_POLICY.md and docs/IMPECCABLE_POLICY.md before use."
fi

echo "External skill bootstrap complete: $SKILLS"
echo "Run 'npm run skills:snapshot' and record the fingerprint for cross-provider experiments."
