@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

REM Navigate to your project directory if needed
cd /d C:\Development\FiestEventDecor\src

REM Loop through all images in the watermarked folder and upload them
for %%F in (watermarked\*.jpg watermarked\*.jpeg watermarked\*.png) do (
    echo Uploading %%F ...
    vercel blob add "%%F"
)

echo.
echo ✅ All done.
pause