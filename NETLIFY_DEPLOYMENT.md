# 🚀 Netlify Deployment Guide

Since Vercel is having issues with the monorepo structure, let's deploy to Netlify which handles React apps better.

## Step 1: Go to Netlify
1. Visit https://netlify.com
2. Click "Sign up" or "Log in"
3. Choose "Deploy with Git"

## Step 2: Connect Repository
1. Click "GitHub" 
2. Search for "inventory-manager" repository
3. Select your `Aviijeet12/inventory-manager` repository

## Step 3: Configure Build Settings
**Important: Use these exact settings:**

- **Base directory**: `frontend`
- **Build command**: `npm run build`
- **Publish directory**: `frontend/build`

## Step 4: Environment Variables
1. Go to Site settings → Environment variables
2. Add new variable:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: `https://inventory-manager-backend-zofj.onrender.com/api`

## Step 5: Deploy
1. Click "Deploy site"
2. Wait for build to complete
3. Your app will be live at a Netlify URL (like `https://amazing-app-name.netlify.app`)

## Why Netlify Will Work
- ✅ Better monorepo support
- ✅ Automatic React routing support
- ✅ Easy environment variable management
- ✅ Reliable build process

## Alternative: Manual Upload
If the git deployment doesn't work:
1. Run `npm run build` in the frontend folder locally
2. Drag and drop the `frontend/build` folder to Netlify
3. Add environment variables in Netlify dashboard

## Expected Result
After deployment, you should see:
- ✅ Frontend working at Netlify URL
- ✅ Backend working at https://inventory-manager-backend-zofj.onrender.com/api
- ✅ Full application functionality