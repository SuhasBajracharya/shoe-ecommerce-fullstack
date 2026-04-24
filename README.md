# Shoe E-Commerce Web Application with Intentional Vulnerabilities

A modern web application demonstrating **Stored XSS (Cross-Site Scripting)** vulnerability for educational cybersecurity purposes. Built with React/Vite frontend and FastAPI backend.

## Project Overview

This is a shoe e-commerce platform with intentional security vulnerabilities designed for a **cybersecurity coursework lab**. The application allows users to:

- Register and login
- Browse shoe products with images
- Submit product reviews
- Administrators can view all reviews

**⚠️ WARNING:** This application contains intentional security vulnerabilities (Stored XSS). It is designed for educational/demonstration purposes only and should **NOT** be used in production.

## Technology Stack

**Frontend:**
- React 18 with Vite
- React Router v7.14.1
- Context API for state management
- Dark theme styling with yellow accents

**Backend:**
- FastAPI (Python)
- SQLite database
- Jinja2 templating
- Cookie-based sessions

## Project Structure

```
.
├── frontend-react/          # React application
│   ├── src/
│   │   ├── pages/          # Page components (Home, Products, ProductDetail, etc.)
│   │   ├── components/     # Reusable components (Header, Footer, ProtectedRoute)
│   │   ├── context/        # React Context (AuthContext)
│   │   ├── App.jsx         # Main routing configuration
│   │   └── index.css       # Global styles
│   ├── public/
│   │   └── images/         # Product images
│   ├── vite.config.js      # Vite dev server with API proxy
│   └── package.json
│
└── backend/                 # FastAPI application
    ├── main.py             # FastAPI app with all endpoints
    ├── seed_db.py          # Database initialization script
    ├── app.db              # SQLite database (auto-created)
    ├── templates/
    │   └── admin_reviews.html  # Admin panel template
    ├── requirements.txt
    └── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16+) and npm
- Python 3.8+
- Git

### Frontend Setup

```bash
cd frontend-react
npm install
npm run dev
```

The frontend will start on **http://localhost:5173**

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python seed_db.py        # Initialize database with test data
python -m uvicorn main:app --reload
```

The backend will start on **http://localhost:8000**

## Running the Application

1. **Start Backend** (keep terminal open):
   ```bash
   cd backend
   python -m uvicorn main:app --reload
   ```

2. **Start Frontend** (in new terminal):
   ```bash
   cd frontend-react
   npm run dev
   ```

3. **Open in Browser**:
   ```
   http://localhost:5173
   ```

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
8. **Navigate to** `http://localhost:5173/admin/reviews`
9. **Observe:** The JavaScript payload executes in the admin's browser (alert popup appears)

### Why This Vulnerability Exists:

- User input (reviews) is stored in the database **without sanitization**
- The admin panel renders reviews using Jinja2's `|safe` filter with `SECURE_MODE = False`
- This allows arbitrary HTML/JavaScript to execute when the admin views reviews

### Security Issues Demonstrated:

- ✗ **Input Validation:** No sanitization of user input
- ✗ **Output Encoding:** Reviews rendered as raw HTML with `|safe` filter
- ✗ **Authentication:** Weak credentials (plaintext comparison)
- ✗ **Session Management:** Predictable session IDs
- ✗ **CSRF Protection:** No CSRF tokens (when `SECURE_MODE = False`)

## Secure Mode

The backend includes a `SECURE_MODE` flag in `backend/main.py`:

```python
SECURE_MODE = False  # Set to True for secure mode
```

When `SECURE_MODE = True`:
- Passwords are hashed with bcrypt
- Reviews are HTML-escaped when rendered
- CSRF token validation is enabled
- The vulnerability is mitigated

To enable secure mode:
```python
SECURE_MODE = True
```

Then restart the backend server.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register new user |
| POST | `/login` | User login |
| POST | `/logout` | User logout |
| GET | `/products` | List all products (HTML) |
| GET | `/product/{id}` | Get product details (HTML) |
| POST | `/add-review` | Submit product review |
| GET | `/admin/reviews` | View all reviews (Admin panel) |

## Key Files

- **[frontend-react/src/App.jsx](frontend-react/src/App.jsx)** - Main routing with protected routes
- **[frontend-react/src/pages/ProductDetail.jsx](frontend-react/src/pages/ProductDetail.jsx)** - Product detail with review form
- **[frontend-react/src/context/AuthContext.jsx](frontend-react/src/context/AuthContext.jsx)** - Authentication state management
- **[backend/main.py](backend/main.py)** - FastAPI application with vulnerable endpoints
- **[backend/templates/admin_reviews.html](backend/templates/admin_reviews.html)** - Admin panel template
- **[backend/seed_db.py](backend/seed_db.py)** - Database initialization

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);
```

### Products Table
```sql
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
);
```

### Reviews Table
```sql
CREATE TABLE reviews (
    id INTEGER PRIMARY KEY,
    product_id INTEGER NOT NULL,
    username TEXT NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY(product_id) REFERENCES products(id)
);
```

## Troubleshooting

### Frontend shows "Cannot connect to backend"
- Ensure backend is running on port 8000
- Check that Vite proxy configuration in `vite.config.js` is correct
- Clear browser cache and restart dev server

### Login/Register returns error
- Verify backend server is running
- Check browser console for error messages
- Ensure session cookie is being set

### Images not displaying on Products page
- Verify image files exist in `frontend-react/public/images/`
- Check console for 404 errors on image requests
- Ensure correct file paths in `ProductDetail.jsx`

### XSS payload not executing on admin panel
- Ensure `SECURE_MODE = False` in `backend/main.py`
- Confirm you're viewing `/admin/reviews` as admin user
- Try simple payload: `<img src=x onerror="alert(1)">`
- Check browser console for errors

## Important Notes

- ⚠️ **For Educational Use Only:** This application is intentionally vulnerable and should never be deployed to production
- **Both servers must be running** for the application to work
- **Session data is in-memory:** Restarting the backend will logout all sessions
- **Database is reset:** Running `seed_db.py` will create a fresh database with test data

## Learning Objectives

This project demonstrates:
1. How Stored XSS vulnerabilities work
2. The importance of input validation and output encoding
3. Why secure development practices are critical
4. How authentication and session management should be implemented
5. The difference between secure and insecure code

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
