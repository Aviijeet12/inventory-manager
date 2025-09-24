# Deployment Guide

## 📋 Overview

This is a full-stack application with:
- **Frontend**: React TypeScript app (deployable to Vercel)
- **Backend**: Spring Boot REST API (requires separate deployment)

## 🚀 Frontend Deployment (Vercel)

### Prerequisites
1. GitHub repository with the code
2. Vercel account connected to GitHub

### Steps
1. **Push code to GitHub**
2. **Connect Vercel to your GitHub repo**
3. **Configure environment variables** in Vercel:
   - `REACT_APP_API_URL`: Your deployed backend API URL

### Vercel Configuration
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`
- Root Directory: `frontend`

## 🌐 Backend Deployment Options

### Option 1: Railway (Recommended for Spring Boot)
1. Connect Railway to your GitHub repo
2. Set root directory to `/` (project root)
3. Environment variables will be set automatically
4. Railway will detect Spring Boot and deploy accordingly

### Option 2: Render
1. Create new Web Service
2. Connect GitHub repo
3. Build Command: `./mvnw clean package`
4. Start Command: `java -jar target/inventory-manager-0.0.1-SNAPSHOT.jar`

### Option 3: Heroku
1. Create Heroku app
2. Add Java buildpack
3. Deploy via Git or GitHub integration

## 🔧 Environment Configuration

### Frontend (.env.production)
```
REACT_APP_API_URL=https://your-backend-url.com/api
```

### Backend (application.properties for production)
```properties
server.port=${PORT:8080}
spring.profiles.active=prod

# For production database (replace H2)
spring.datasource.url=${DATABASE_URL}
spring.jpa.hibernate.ddl-auto=update
```

## ⚠️ Important Notes

1. **Backend URL**: Update `REACT_APP_API_URL` in Vercel with your deployed backend URL
2. **CORS**: Backend is configured for `http://localhost:3000` - update for production
3. **Database**: Currently uses H2 in-memory - consider PostgreSQL for production
4. **Two-step deployment**: Deploy backend first, then update frontend with backend URL

## 🔍 Troubleshooting

- **CORS errors**: Check backend CORS configuration
- **API not found**: Verify `REACT_APP_API_URL` environment variable
- **Build fails**: Check for TypeScript errors or missing dependencies