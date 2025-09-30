$projFile = ".vercel\project.json"
if (Test-Path $projFile) {
  $j = Get-Content $projFile -Raw | ConvertFrom-Json
  if (-not $j.projectId -or -not $j.orgId) {
    Write-Host "! .vercel/project.json is incomplete." -ForegroundColor Yellow; exit 1
  }
  Write-Host "✓ .vercel linked (projectId=$($j.projectId), orgId=$($j.orgId))" -ForegroundColor Green
} else { Write-Host "! .vercel missing (run 'vercel link --project joinecogrow-frontend')" -ForegroundColor Yellow }
