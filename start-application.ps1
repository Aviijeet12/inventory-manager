# Inventory Manager - Start Application Script
# This script starts both the backend and frontend services

Write-Host "🚀 Starting Inventory Manager Application..." -ForegroundColor Green
Write-Host ""

# Check if Java is installed
try {
    $javaVersion = java -version 2>&1 | Select-String "version"
    Write-Host "✅ Java found: $javaVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Java is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Java 17 or higher from: https://adoptium.net/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if npm is available
try {
    $npmVersion = npm --version
    Write-Host "✅ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not available" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "📋 Prerequisites check completed successfully!" -ForegroundColor Green
Write-Host ""

# Function to start backend
function Start-Backend {
    Write-Host "🔧 Starting Backend (Spring Boot)..." -ForegroundColor Cyan
    
    # Check if Maven is available
    try {
        $mavenVersion = mvn --version 2>&1 | Select-String "Apache Maven"
        Write-Host "✅ Maven found" -ForegroundColor Green
        
        # Start backend in background
        Start-Process -FilePath "mvn" -ArgumentList "clean", "spring-boot:run" -WorkingDirectory $PWD -WindowStyle Minimized
        Write-Host "✅ Backend started successfully!" -ForegroundColor Green
        Write-Host "   Backend URL: http://localhost:8080" -ForegroundColor Yellow
        Write-Host "   H2 Console: http://localhost:8080/h2-console" -ForegroundColor Yellow
        
    } catch {
        Write-Host "❌ Maven not found, trying Maven wrapper..." -ForegroundColor Yellow
        
        if (Test-Path "mvnw.cmd") {
            Start-Process -FilePath ".\mvnw.cmd" -ArgumentList "clean", "spring-boot:run" -WorkingDirectory $PWD -WindowStyle Minimized
            Write-Host "✅ Backend started with Maven wrapper!" -ForegroundColor Green
        } else {
            Write-Host "❌ Maven wrapper not found" -ForegroundColor Red
            Write-Host "Please install Maven or add it to your PATH" -ForegroundColor Yellow
            return $false
        }
    }
    
    return $true
}

# Function to start frontend
function Start-Frontend {
    Write-Host "🎨 Starting Frontend (React)..." -ForegroundColor Cyan
    
    if (-not (Test-Path "frontend")) {
        Write-Host "❌ Frontend directory not found" -ForegroundColor Red
        return $false
    }
    
    Set-Location frontend
    
    # Install dependencies if needed
    if (-not (Test-Path "node_modules")) {
        Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Yellow
        npm install
        if ($LASTEXITCODE -ne 0) {
            Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
            return $false
        }
    }
    
    # Start frontend in background
    Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory (Get-Location) -WindowStyle Minimized
    Write-Host "✅ Frontend started successfully!" -ForegroundColor Green
    Write-Host "   Frontend URL: http://localhost:3000" -ForegroundColor Yellow
    
    Set-Location ..
    return $true
}

# Start both services
$backendStarted = Start-Backend
Start-Sleep -Seconds 3  # Give backend time to start

$frontendStarted = Start-Frontend

Write-Host ""
Write-Host "🎉 Application startup completed!" -ForegroundColor Green
Write-Host ""

if ($backendStarted -and $frontendStarted) {
    Write-Host "✅ Both services started successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Access your application:" -ForegroundColor Cyan
    Write-Host "   Frontend: http://localhost:3000" -ForegroundColor Yellow
    Write-Host "   Backend API: http://localhost:8080/api/products" -ForegroundColor Yellow
    Write-Host "   H2 Database Console: http://localhost:8080/h2-console" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "📝 Database credentials:" -ForegroundColor Cyan
    Write-Host "   JDBC URL: jdbc:h2:mem:inventorydb" -ForegroundColor Yellow
    Write-Host "   Username: sa" -ForegroundColor Yellow
    Write-Host "   Password: password" -ForegroundColor Yellow
} else {
    Write-Host "⚠️  Some services failed to start. Please check the error messages above." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press Ctrl+C in the respective terminal windows to stop the services." -ForegroundColor Cyan
Write-Host "Press Enter to exit this script..."
Read-Host


