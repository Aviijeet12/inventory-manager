# Deployment Troubleshooting Guide

## Current Issue: Frontend 404 Error

### Root Cause
The frontend is deployed successfully to Vercel, but the environment variable `REACT_APP_API_URL` is not configured in Vercel's dashboard, so the frontend can't connect to the backend.

### Backend Status ✅
- **URL**: https://inventory-manager-backend-zofj.onrender.com
- **API Endpoint**: https://inventory-manager-backend-zofj.onrender.com/api/products
- **Status**: Working perfectly (HTTP 200)

### Frontend Status ❌
- **URL**: Your Vercel deployment URL
- **Issue**: Getting 404 errors because it can't connect to the backend
- **Fix**: Configure environment variable in Vercel dashboard

## SOLUTION STEPS

### 1. Configure Vercel Environment Variable
1. Go to https://vercel.com/dashboard
2. Find your inventory-manager project
3. Click on the project → Settings
4. Go to "Environment Variables" in left sidebar
5. Click "Add New"
6. Set:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://inventory-manager-backend-zofj.onrender.com/api`
   - **Environment**: Production (or All)
7. Click "Save"

### 2. Redeploy Frontend
1. Go to "Deployments" tab in Vercel
2. Click "Redeploy" on the latest deployment
3. Wait for deployment to complete

### 3. Test the Application
After redeployment, your frontend should be able to connect to the backend properly.

## Verification Commands
```bash
# Test backend (should return HTTP 200 with product data)
Invoke-WebRequest -Uri "https://inventory-manager-backend-zofj.onrender.com/api/products"

# Test frontend (after fixing environment variable)
# Visit your Vercel URL and check if products load
```

## Environment Files Summary
- `.env.local` - For local development (points to localhost:8080)
- `.env.production` - For production build (contains correct backend URL)
- **Vercel Dashboard** - Must be configured with REACT_APP_API_URL

## Important Notes
- React apps require environment variables to be prefixed with `REACT_APP_`
- Vercel builds happen in the cloud, so local `.env` files are ignored
- Environment variables must be set in Vercel dashboard for production builds
- After changing environment variables, always redeploy to apply changes