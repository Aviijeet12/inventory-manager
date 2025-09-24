// Config helper - hardcoded for production deployment
export const config = {
  // Hardcoded production API URL since environment variables aren't working in Vercel
  API_URL: 'https://inventory-manager-backend-zofj.onrender.com/api',
  NODE_ENV: process.env.NODE_ENV,
  
  // Debug info
  debugInfo: () => {
    console.log('Environment Debug Info:');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('REACT_APP_API_URL (from env):', process.env.REACT_APP_API_URL);
    console.log('Final API_URL (hardcoded):', config.API_URL);
    console.log('All env vars starting with REACT_APP_:', 
      Object.keys(process.env).filter(key => key.startsWith('REACT_APP_'))
    );
  }
};

// Auto-log on import
config.debugInfo();