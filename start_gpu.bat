
call ".\npm_install.bat"

:_minerstart
node send_universal_gpu.js --api tonapi
goto _minerstart

pause
