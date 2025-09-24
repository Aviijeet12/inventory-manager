// Config helper to debug environment variables
export const config = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
  NODE_ENV: process.env.NODE_ENV,
  
  // Debug info
  debugInfo: () => {
    console.log('Environment Debug Info:');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
    console.log('Final API_URL:', config.API_URL);
    console.log('All env vars starting with REACT_APP_:', 
      Object.keys(process.env).filter(key => key.startsWith('REACT_APP_'))
    );
  }
};

// Auto-log on import in development
if (process.env.NODE_ENV === 'development') {
  config.debugInfo();
}