@echo off
echo Starting Inventory Manager Frontend...
echo.
echo Prerequisites:
echo - Node.js 14 or higher must be installed
echo - npm must be available
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is available
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not available
    echo Please install Node.js which includes npm
    pause
    exit /b 1
)

REM Navigate to frontend directory
if not exist frontend (
    echo ERROR: Frontend directory not found
    echo Please make sure you're in the correct directory
    pause
    exit /b 1
)

cd frontend

REM Check if node_modules exists, if not install dependencies
if not exist node_modules (
    echo Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

echo Starting development server...
echo Frontend will be available at: http://localhost:3000
echo Backend should be running at: http://localhost:8080
echo.
npm start

pause


