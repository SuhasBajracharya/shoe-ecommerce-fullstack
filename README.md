# Shoe E-Commerce Web Application with Intentional Vulnerabilities

A web application demonstrating **multiple security vulnerabilities** for educational cybersecurity purposes. Built with **Next.js 15** (App Router) frontend and FastAPI backend.

## Project Overview

This is a shoe e-commerce platform designed for **cybersecurity coursework labs** with intentional vulnerabilities:

1. **Stored XSS (Cross-Site Scripting)** - Backend template injection
2. **React Server Components Prototype Pollution (CVE-2025-55182 style)** - Server Action exploitation

**⚠️ WARNING:** This application contains intentional security vulnerabilities for educational purposes only. Do NOT use in production.

## Technology Stack

**Frontend:**
- React 19 with Next.js 15 (App Router & RSC)
- Context API for state management
- Dark theme styling

**Backend:**
- FastAPI (Python)
- SQLite database
- Jinja2 templating

## Project Structure

```
.
├── frontend-react/          # Next.js application (migrated from Vite)
│   ├── src/
│   │   ├── app/           # Next.js App Router
│   │   │   ├── (auth)/    # Auth route group (public: login, register)
│   │   │   ├── (protected)/  # Protected route group with layout
│   │   │   └── layout.jsx # Root layout with AuthProvider
│   │   ├── components/    # Reusable components (Header, Footer, etc.)
│   │   ├── context/       # React Context (AuthContext)
│   │   ├── hooks/         # Custom hooks (useAuth)
│   │   ├── index.css      # Global styles
│   │   └── app.css        # Root app styles
│   ├── public/
│   │   └── images/        # Product images
│   ├── middleware.js      # Authentication middleware
│   ├── next.config.js     # Next.js configuration with API rewrites
│   ├── jsconfig.json      # Path aliases (@/)
│   ├── .env.local         # Environment variables
│   └── package.json
│
└── backend/                 # FastAPI application
    ├── main.py             # FastAPI app with all endpoints
    ├── seed_db.py          # Database initialization script
    ├── app.db              # SQLite database (auto-created)
    ├── templates/
    │   └── admin_reviews.html  # Admin panel template
    ├── requirements.txt
    └── README.md│
└── payloads/                # CVE-2025-55182 Exploit (Cybersecurity Lab)
    ├── exploit.py          # Prototype pollution POC script
    └── targets.txt         # Target URLs for exploitation```

## Setup Instructions

### Prerequisites

- Node.js (v18+) and npm
- Python 3.10+
- Git

### Frontend Setup (Next.js)

```bash
cd frontend-react
npm install
npm run dev
```

The frontend will start on **http://localhost:3000**

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python seed_db.py        # Initialize database with test data
python -m uvicorn main:app --reload
```

The backend will start on **http://localhost:8000**

## Running the Application

1. **Start Backend**:
   ```bash
   cd backend
   python -m uvicorn main:app --reload
   ```

2. **Start Frontend** (new terminal):
   ```bash
   cd frontend-react
   npm run dev
   ```

3. **Access**: http://localhost:3000

## Default Test Accounts

| Username | Password | Role |
|----------|----------|------|
| `alice` | `password` | Regular User |
| `admin` | `admin123` | Administrator |

## How to Test the Stored XSS Vulnerability

This application demonstrates a **Stored XSS (Cross-Site Scripting)** vulnerability:

### Attack Flow:

1. **Register/Login** as a regular user (or use `alice` / `password`)
2. **Navigate to Products** page
3. **Click on "Test Shoe"** product
4. **Scroll to "Add Your Review" section**
5. **Copy and paste the XSS payload:**
   ```html
   <img src=x onerror="alert('XSS Vulnerability Detected!')">
   ```
6. **Click "Post Review"**
7. **Logout and login as admin** (`admin` / `admin123`)
8. **Navigate to** `/admin/reviews`
9. **Observe:** The JavaScript payload executes in the admin's browser (alert popup appears)

### Why This Vulnerability Exists:

- User input is stored without sanitization
- Admin panel renders reviews with `|safe` filter (raw HTML)
- No output encoding on display

---

## CVE-2025-55182: React Server Components Prototype Pollution

This application also demonstrates a **prototype pollution vulnerability in Next.js Server Actions** via unsafe FormData handling.

### Vulnerability Location:

- **Server Action:** `frontend-react/src/lib/actions.js` - `subscribeNewsletter()`
- **Vulnerable Component:** `frontend-react/src/components/NewsletterForm.jsx`

### Issues:

- No input validation in Server Action
- Uses `Object.assign()` to merge untrusted FormData
- Allows `__proto__` and `constructor.prototype` field injection
- No whitelist of allowed fields

### Testing:

Use the CVE-2025-55182 POC script to send crafted payloads targeting the newsletter form endpoint. See [frontend-react/README.md](frontend-react/README.md) for detailed exploitation steps.

### How to Fix:

- Validate input with schema (Zod, Joi)
- Reject fields containing `__proto__`, `constructor`, `prototype`
- Use explicit field whitelisting
- Avoid `Object.assign()` with untrusted data

---

## Secure Mode

The backend includes a `SECURE_MODE` flag in `backend/main.py`. Set to `True` to mitigate vulnerabilities (passwords hashed, reviews escaped, CSRF enabled).

## Further Reading

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

## License

Educational Purpose Only - Not for Production Use

## Author

Created for SIC (Security & Information Compliance) Coursework - Year 2, Semester 4

---

**Last Updated:** April 2026
