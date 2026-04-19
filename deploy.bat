@echo off
echo ========================================
echo   Kisan Suraksha AI - Quick Deploy
echo ========================================
echo.

cd /d "%~dp0kisan-suraksha-ai-web"

echo Installing deployment tool...
call npm install -g surge 2>nul

echo.
echo Deploying to Surge (free hosting)...
call npx surge . kisan-suraksha-ai.surge.sh --login --password deploy123

echo.
echo ========================================
echo   DEPLOYMENT COMPLETE!
echo ========================================
echo Your website will be live at:
echo https://kisan-suraksha-ai.surge.sh
echo.
pause