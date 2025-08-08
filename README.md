# 📦 Inventory Manager

A full-stack inventory management application built with **Spring Boot** (backend) and **React** (frontend).

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.1-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.7.4-blue)

## 🚀 Features

- **Dashboard**: Overview with total products, inventory value, low stock alerts, and categories
- **Product Management**: Full CRUD operations (Create, Read, Update, Delete)
- **Search & Filter**: Find products by name, category, or stock level
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Frontend communicates with backend REST API
- **In-Memory Database**: H2 database with pre-loaded sample data

## 🏗️ Architecture

- **Backend**: Spring Boot REST API with JPA/Hibernate
- **Frontend**: React with TypeScript and modern CSS
- **Database**: H2 in-memory database
- **Build Tools**: Maven (backend), npm (frontend)

## 🛠️ Prerequisites

- **Java 17** or higher
- **Node.js 14** or higher
- **npm** or **yarn**
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/inventory-manager.git
cd inventory-manager
```

### 2. Start the Backend

```bash
# Using Maven wrapper (recommended)
./mvnw spring-boot:run

# Or if you have Maven installed
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### 3. Start the Frontend

```bash
cd frontend
npm install
npm start
```

The frontend will start on `http://localhost:3000`

## 📱 Application URLs

- **Main Application**: http://localhost:3000
- **Backend API**: http://localhost:8080/api/products
- **H2 Database Console**: http://localhost:8080/h2-console

### Database Credentials
- **JDBC URL**: `jdbc:h2:mem:inventorydb`
- **Username**: `sa`
- **Password**: `password`

## 🗂️ Project Structure

```
inventory-manager/
├── src/main/java/com/example/inventory/    # Backend source code
│   ├── controller/                         # REST controllers
│   ├── model/                             # JPA entities
│   ├── repository/                        # Data repositories
│   ├── service/                           # Business logic
│   └── config/                            # Configuration classes
├── frontend/                              # React frontend
│   ├── src/
│   │   ├── components/                    # React components
│   │   ├── services/                      # API services
│   │   └── types/                         # TypeScript types
│   └── public/                            # Static assets
├── target/                                # Maven build output
└── README.md
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/{id}` | Get product by ID |
| POST | `/api/products` | Create new product |
| PUT | `/api/products/{id}` | Update product |
| DELETE | `/api/products/{id}` | Delete product |
| GET | `/api/products/category/{category}` | Get products by category |
| GET | `/api/products/search?name={name}` | Search products by name |
| GET | `/api/products/low-stock?threshold={number}` | Get low stock products |

## 🐳 Docker Support

### Build and run with Docker Compose

```bash
docker-compose up --build
```

This will start both backend and frontend services in containers.

## 🧪 Sample Data

The application comes pre-loaded with sample products including:
- Electronics (Laptop, Mouse, Keyboard, Monitor)
- Furniture (Desk, Chair, Bookshelf)
- Kitchen items (Coffee Mug, Water Bottle)
- Office Supplies (Notebook)

## 🚀 Deployment

### Backend Deployment
1. Build the JAR file: `./mvnw clean package`
2. Run: `java -jar target/inventory-manager-0.0.1-SNAPSHOT.jar`

### Frontend Deployment
1. Build for production: `cd frontend && npm run build`
2. Serve the `build` folder with any static file server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/Aviijeet12)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/avijit-pratap-singh-587313252)

## 🙏 Acknowledgments

- Spring Boot team for the amazing framework
- React team for the frontend library
- H2 Database for the embedded database solution
