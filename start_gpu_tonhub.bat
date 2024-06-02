
call ".\npm_install.bat"

:_minerstart
node send_universal_gpu.js --api tonhub
goto _minerstart

pause
