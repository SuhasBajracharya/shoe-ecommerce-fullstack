/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Proxy API calls to Flask backend during development
  async rewrites() {
    const backendUrl = process.env.API_URL || 'http://localhost:8000';
    
    return {
      beforeFiles: [
        // Specific API routes that exist in FastAPI
        {
          source: '/api/check-session',
          destination: `${backendUrl}/api/check-session`,
        },
        {
          source: '/api/reviews',
          destination: `${backendUrl}/api/reviews`,
        },
      ],
      fallback: [
        {
          source: '/login',
          destination: `${backendUrl}/login`,
        },
        {
          source: '/register',
          destination: `${backendUrl}/register`,
        },
        {
          source: '/logout',
          destination: `${backendUrl}/logout`,
        },
        {
          source: '/products',
          destination: `${backendUrl}/products`,
        },
        {
          source: '/product/:path*',
          destination: `${backendUrl}/product/:path*`,
        },
        {
          source: '/add-review',
          destination: `${backendUrl}/add-review`,
        },
        {
          source: '/admin/reviews',
          destination: `${backendUrl}/admin/reviews`,
        },
      ],
    };
  },
};

module.exports = nextConfig;

