# 🚀 Inventory Manager - Setup Guide

This guide will help you set up and run the complete Inventory Manager application with both backend and frontend.

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

### Required Software
- **Java 17 or higher** - [Download from Adoptium](https://adoptium.net/)
- **Node.js 14 or higher** - [Download from Node.js](https://nodejs.org/)
- **Maven 3.6 or higher** - [Download from Apache Maven](https://maven.apache.org/download.cgi)

### Optional Software
- **Docker** - [Download from Docker](https://www.docker.com/products/docker-desktop/)
- **Git** - [Download from Git](https://git-scm.com/)

## 🔧 Installation Steps

### 1. Clone or Download the Project

If you have Git installed:
```bash
git clone <repository-url>
cd inventory-manager
```

Or download and extract the project files to a directory.

### 2. Verify Prerequisites

#### Check Java Installation
```bash
java -version
```
You should see output similar to:
```
openjdk version "17.0.x" 2023-xx-xx
OpenJDK Runtime Environment (build 17.0.x+xx-xx)
OpenJDK 64-Bit Server VM (build 17.0.x+xx-xx, mixed mode, sharing)
```

#### Check Node.js Installation
```bash
node --version
npm --version
```
You should see version numbers for both commands.

#### Check Maven Installation
```bash
mvn --version
```
You should see Apache Maven version information.

## 🚀 Quick Start (Windows)

### Option 1: Using PowerShell Script (Recommended)

1. Right-click on `start-application.ps1`
2. Select "Run with PowerShell"
3. The script will automatically:
   - Check all prerequisites
   - Start the backend server
   - Start the frontend development server
   - Open the application in your browser

### Option 2: Using Batch Files

1. **Start Backend:**
   - Double-click `run-backend.bat`
   - Wait for the backend to start (you'll see Spring Boot startup messages)

2. **Start Frontend:**
   - Double-click `run-frontend.bat`
   - Wait for the frontend to start (you'll see React development server messages)

### Option 3: Manual Setup

#### Start Backend (Spring Boot)

1. Open Command Prompt or PowerShell
2. Navigate to the project directory
3. Run the following commands:

```bash
# If you have Maven installed
mvn clean spring-boot:run

# Or if you have Maven wrapper
./mvnw clean spring-boot:run
```

4. Wait for the backend to start. You should see:
   ```
   Started InventoryManagerApplication in X.XXX seconds
   ```

#### Start Frontend (React)

1. Open a new Command Prompt or PowerShell window
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Install dependencies (first time only):
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Wait for the frontend to start. You should see:
   ```
   Compiled successfully!
   You can now view inventory-manager-frontend in the browser.
   ```

## 🌐 Access the Application

Once both services are running, you can access:

- **Frontend Application:** http://localhost:3000
- **Backend API:** http://localhost:8080/api/products
- **H2 Database Console:** http://localhost:8080/h2-console

### H2 Database Credentials
- **JDBC URL:** `jdbc:h2:mem:inventorydb`
- **Username:** `sa`
- **Password:** `password`

## 🐳 Docker Deployment (Optional)

If you have Docker installed, you can run the entire application using Docker Compose:

```bash
# Build and start both services
docker-compose up --build

# Run in background
docker-compose up -d --build

# Stop services
docker-compose down
```

## 📊 Application Features

### Dashboard
- View total products count
- See total inventory value
- Monitor low stock items
- Browse recent products

### Product Management
- **View Products:** See all products in a responsive grid
- **Add Products:** Create new products with form validation
- **Edit Products:** Modify existing product details
- **Delete Products:** Remove products with confirmation
- **Search:** Find products by name or description
- **Filter:** Filter by category or low stock status

### Sample Data
The application comes with sample products pre-loaded:
- Electronics (Laptop, Mouse, Keyboard, Monitor)
- Furniture (Desk, Chair, Bookshelf)
- Kitchen (Coffee Mug, Water Bottle)
- Office Supplies (Notebook)

## 🔧 Troubleshooting

### Common Issues

#### 1. Port Already in Use
If you see "Port 8080 is already in use" or "Port 3000 is already in use":
- Stop any existing services using these ports
- Or change the ports in the configuration files

#### 2. Java Not Found
If you get "java is not recognized":
- Install Java 17 or higher
- Add Java to your system PATH
- Restart your command prompt

#### 3. Node.js Not Found
If you get "node is not recognized":
- Install Node.js from https://nodejs.org/
- Add Node.js to your system PATH
- Restart your command prompt

#### 4. Maven Not Found
If you get "mvn is not recognized":
- Install Maven from https://maven.apache.org/download.cgi
- Add Maven to your system PATH
- Or use the Maven wrapper: `./mvnw` instead of `mvn`

#### 5. Frontend Can't Connect to Backend
If the frontend shows connection errors:
- Make sure the backend is running on port 8080
- Check that CORS is properly configured
- Verify the API endpoints are accessible

### Getting Help

1. **Check the logs** in the terminal windows where you started the services
2. **Verify all prerequisites** are installed correctly
3. **Try restarting** both services
4. **Check the browser console** for any JavaScript errors

## 📁 Project Structure

```
inventory-manager/
├── src/                          # Backend source code
│   └── main/
│       ├── java/com/example/inventory/
│       │   ├── InventoryManagerApplication.java
│       │   ├── controller/       # REST controllers
│       │   ├── model/           # Entity models
│       │   ├── repository/      # Data access layer
│       │   ├── service/         # Business logic
│       │   └── config/          # Configuration
│       └── resources/
│           └── application.properties
├── frontend/                     # Frontend source code
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── services/            # API services
│   │   ├── types/               # TypeScript types
│   │   └── ...
│   ├── package.json
│   └── tsconfig.json
├── pom.xml                      # Maven configuration
├── docker-compose.yml           # Docker configuration
├── run-backend.bat             # Windows backend script
├── run-frontend.bat            # Windows frontend script
├── start-application.ps1       # PowerShell startup script
└── README.md                   # Main documentation
```

## 🎯 Next Steps

After successfully running the application:

1. **Explore the Dashboard** - Get familiar with the overview
2. **Add Sample Products** - Try creating new products
3. **Test Search & Filter** - Use the search and filter features
4. **Explore the API** - Visit the H2 console to see the database
5. **Customize** - Modify the code to add new features

## 📞 Support

If you encounter any issues:

1. Check this setup guide first
2. Review the troubleshooting section
3. Check the application logs
4. Verify all prerequisites are correctly installed

---

**Happy coding! 🚀**


