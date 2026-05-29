#requires -version 5.1

$ErrorActionPreference = "Stop"
$serverDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$pandocDir = Join-Path $serverDir "pandoc-bin"
$pandocExe = Join-Path $pandocDir "pandoc.exe"

if (Test-Path $pandocExe) {
  Write-Host "pandoc already exists: $pandocExe" -ForegroundColor Green
  exit 0
}

Write-Host "Downloading pandoc 3.6.4 ..." -ForegroundColor Yellow
$url = "https://github.com/jgm/pandoc/releases/download/3.6.4/pandoc-3.6.4-windows-x86_64.zip"
$zipPath = Join-Path $env:TEMP "pandoc.zip"

try {
  Invoke-WebRequest -Uri $url -OutFile $zipPath -UseBasicParsing
  New-Item -ItemType Directory -Path $pandocDir -Force | Out-Null
  Expand-Archive -Path $zipPath -DestinationPath $pandocDir -Force
  Remove-Item $zipPath -Force
  Write-Host "pandoc installed to: $pandocDir" -ForegroundColor Green
} catch {
  Write-Host "Download failed: $_" -ForegroundColor Red
  Write-Host "Please download and extract manually to: $pandocDir" -ForegroundColor Yellow
  Write-Host "Download URL: $url" -ForegroundColor Yellow
}
