@echo off
echo Starting Inventory Manager Backend...
echo.
echo Prerequisites:
echo - Java 17 or higher must be installed
echo - Maven must be installed and in PATH
echo.
echo If you don't have Maven installed, you can:
echo 1. Download from: https://maven.apache.org/download.cgi
echo 2. Add to PATH environment variable
echo 3. Or use the Maven wrapper: mvnw.cmd clean spring-boot:run
echo.

REM Check if Java is installed
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Java is not installed or not in PATH
    echo Please install Java 17 or higher
    pause
    exit /b 1
)

REM Check if Maven is installed
mvn -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Maven is not installed or not in PATH
    echo Trying to use Maven wrapper...
    if exist mvnw.cmd (
        echo Using Maven wrapper...
        mvnw.cmd clean spring-boot:run
    ) else (
        echo Please install Maven or add it to your PATH
        pause
        exit /b 1
    )
) else (
    echo Maven found, building and running the application...
    mvn clean spring-boot:run
)

pause


