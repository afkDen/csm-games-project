param(
  [switch]$IncludeOptionalReview
)

$ErrorActionPreference = 'Stop'

if ($env:ALLOW_UNPINNED_EXTERNAL_SKILLS -ne '1') {
  Write-Error "Refusing to install mutable third-party skill sources by default. Review docs/SKILL_INSTALL.md, then set ALLOW_UNPINNED_EXTERNAL_SKILLS=1 only if you accept the current upstream revisions."
}

$root = Split-Path -Parent $PSScriptRoot
$skills = Join-Path $root '.agents/skills'
New-Item -ItemType Directory -Force -Path $skills | Out-Null
Set-Location $root

Write-Host "Installing explicitly authorized external skills into project-local .agents/skills/..."

function Install-ViaSkillsCli([string]$repo, [string]$skill) {
  npx --yes skills@latest add $repo --skill $skill --agent antigravity --copy --yes
  $source = Join-Path $skills $skill
  if (-not (Test-Path $source)) { throw "Expected installed skill not found at .agents/skills/$skill" }
}

Install-ViaSkillsCli 'https://github.com/Leonxlnx/taste-skill' 'design-taste-frontend'
Install-ViaSkillsCli 'https://github.com/duolahypercho/andrej-karpathy-skills' 'andrej-karpathy-skill'
Install-ViaSkillsCli 'https://github.com/vercel-labs/agent-skills' 'web-design-guidelines'
Install-ViaSkillsCli 'https://github.com/trailofbits/skills' 'insecure-defaults'
Install-ViaSkillsCli 'https://github.com/trailofbits/skills' 'differential-review'

$tmp = Join-Path $root '.tmp-scroll-craft'
if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force }
git clone --depth 1 https://github.com/nateherkai/scroll-craft $tmp
$src = Join-Path $tmp 'plugins/nateherk-design/skills/scroll-craft'
$dst = Join-Path $skills 'scroll-craft'
if (Test-Path $dst) { Remove-Item $dst -Recurse -Force }
Copy-Item $src $dst -Recurse -Force
Remove-Item $tmp -Recurse -Force

$tmpImg = Join-Path $root '.tmp-img2threejs'
if (Test-Path $tmpImg) { Remove-Item $tmpImg -Recurse -Force }
git clone --depth 1 https://github.com/img2threejs/img2threejs $tmpImg
$imgDst = Join-Path $skills 'img2threejs'
if (Test-Path $imgDst) { Remove-Item $imgDst -Recurse -Force }
Copy-Item $tmpImg $imgDst -Recurse -Force
Remove-Item $tmpImg -Recurse -Force

if ($IncludeOptionalReview) {
  Install-ViaSkillsCli 'https://github.com/emilkowalski/skills' 'emil-design-eng'
  Write-Host "Impeccable remains manual/opt-in. Review docs/EMIL_POLICY.md and docs/IMPECCABLE_POLICY.md before use."
}

Write-Host "External skill bootstrap complete: $skills"
Write-Host "Run 'npm run skills:snapshot' and record the fingerprint for cross-provider experiments."
