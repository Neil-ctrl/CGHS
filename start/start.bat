@echo off

wt ^
    new-tab -p "Command Prompt" cmd /k "cd /d D:\GitHub\OpenLake\WebWave\CGHS\backend && python -m uvicorn main:app --reload" ^
    ; new-tab -p "Command Prompt" cmd /k "cd /d D:\GitHub\OpenLake\WebWave\CGHS\frontend && npm run dev" ^
    ; new-tab -p "Command Prompt" cmd /k "psql -U neil -d cghs"