param([string]$ProdUrl="")
$ErrorActionPreference="Stop"

function Test-Http200($url){ try{ (Invoke-WebRequest $url -UseBasicParsing -TimeoutSec 10).StatusCode -eq 200 }catch{ $false } }

Write-Host "Preflight: clean build" -ForegroundColor Cyan
Remove-Item -Recurse -Force .\.next -ErrorAction SilentlyContinue
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "Build failed" -ForegroundColor Red; exit 1 }

Write-Host "Preflight: start local prod server :3005" -ForegroundColor Cyan
$job = Start-Job { npx next start -H 127.0.0.1 -p 3005 }
Start-Sleep 3

$routes = @("/", "/api/health", "/features/trees", "/features/diy", "/features/community", "/opengraph-image")
$ok=$true
foreach($r in $routes){
  if (Test-Http200 ("http://127.0.0.1:3005$r")) { Write-Host ("OK {0}" -f $r) -ForegroundColor Green }
  else { Write-Host ("FAIL {0}" -f $r) -ForegroundColor Red; $ok=$false }
}
Get-Job | Remove-Job -Force

if (-not $ok){ Write-Host "Preflight FAIL — fix failing routes above" -ForegroundColor Red; exit 1 }
Write-Host "Preflight PASS — safe to deploy" -ForegroundColor Green

if ($ProdUrl){
  Write-Host "`nProduction checks for $ProdUrl" -ForegroundColor Cyan
  foreach($r in $routes){
    try{
      $resp = Invoke-WebRequest "$ProdUrl$r" -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 15
      Write-Host ("PROD {0} => {1}" -f $r, $resp.StatusCode) -ForegroundColor Green
    }catch{
      Write-Host ("PROD FAIL {0}" -f $r) -ForegroundColor Red
    }
  }
}
