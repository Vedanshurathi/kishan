@echo off
echo ============================================
echo   Kisan Suraksha AI - One Click Deploy
echo ============================================
echo.
echo Opening Netlify in your browser...
start https://app.netlify.com/drag-and-drop
echo.
echo After opening:
echo 1. Drag the BUILD folder to the page
echo 2. Your website will be live!
echo.
echo Location of BUILD folder:
echo %~dp0build
echo.
echo Press any key to open folder...
pause > nul
explorer "%~dp0build"