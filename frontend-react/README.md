# StepStyle Frontend - Next.js 15 Application

A modern React frontend for the StepStyle shoe e-commerce platform, built with **Next.js 15** using the **App Router** and **React Server Components**.

## Overview

Migrated from Vite to Next.js for better performance, built-in optimizations, and server-side capabilities. This frontend uses automatic file-based routing and middleware for authentication protection.

## Technology Stack

- **React**: 19.2.0
- **Next.js**: 15.5.16
- **Routing**: App Router with Route Groups
- **Authentication**: Custom context + middleware
- **Styling**: CSS with dark theme
- **Package Manager**: npm

## Project Structure

```
src/
├── app/
│   ├── (auth)/              # Public authentication routes
│   │   ├── login/page.jsx
│   │   └── register/page.jsx
│   ├── (protected)/         # Protected routes (require auth)
│   │   ├── page.jsx         # Home page
│   │   ├── products/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── research/
│   │   ├── admin/reviews/
│   │   ├── product/[productId]/
│   │   └── portfolio/
│   └── layout.jsx           # Root layout
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx      # Auth provider
├── hooks/
│   └── useAuth.js           # Auth hook
├── app.css
└── index.css

middleware.js               # Route protection
next.config.js              # API configuration
jsconfig.json               # Path aliases
.env.local                  # Environment variables
```

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production

Build and run for production:

```bash
npm run build
npm start
```

## Linting

Run ESLint:

```bash
npm run lint
```

## Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
API_URL=http://localhost:8000
```

### API Routes

All API calls are automatically proxied to the backend via `next.config.js`:
- `/login` → `http://localhost:8000/login`
- `/register` → `http://localhost:8000/register`
- `/products` → `http://localhost:8000/products`
- `/api/*` → `http://localhost:8000/api/*`

## Authentication

Authentication is handled through:

1. **AuthContext** (`src/context/AuthContext.jsx`) - Provides user state
2. **useAuth Hook** (`src/hooks/useAuth.js`) - Easy hook access
3. **Middleware** (`middleware.js`) - Route-level protection

```javascript
import { useAuth } from '@/hooks/useAuth';

function MyComponent() {
  const { user, role, login, logout, loading } = useAuth();
  // Your component logic
}
```

## Key Features

- ✅ **File-based Routing** - No router configuration needed
- ✅ **Route Groups** - Organize routes by feature
- ✅ **Middleware** - Automatic authentication checks
- ✅ **Server Components** - Optimize bundle size
- ✅ **API Rewrites** - Transparent backend proxying
- ✅ **Dark Theme** - Built-in yellow accent styling

## Migration Notes

This app was migrated from Vite to Next.js. Key changes:

- Removed `react-router-dom`, using Next.js built-in routing
- Changed `<Link to="">` to `<Link href="">`
- Changed `useNavigate()` to `useRouter()` from `next/navigation`
- Added middleware for route protection
- Reorganized pages into App Router structure

See [MIGRATION_COMPLETE.md](MIGRATION_COMPLETE.md) for detailed migration guide.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router Guide](https://nextjs.org/docs/app)
- [React Documentation](https://react.dev)
