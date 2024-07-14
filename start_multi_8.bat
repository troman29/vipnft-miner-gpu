
call ".\npm_install.bat"

:_minerstart
node send_multigpu_gpu.js --api tonhub --gpu-count 8
goto _minerstart

pause
