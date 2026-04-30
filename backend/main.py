"""
StepStyle vulnerable backend (FastAPI)

This file implements a simple FastAPI app with intentional vulnerabilities for educational use.
Set SECURE_MODE = True to enable defenses.

Vulnerabilities when SECURE_MODE=False:
- Passwords stored in plaintext
- No CSRF protection on POST endpoints
- Reviews stored/rendered without sanitization (Stored XSS)
- Cookies lack SameSite/HttpOnly settings

When SECURE_MODE=True, the app uses bcrypt for passwords, enforces CSRF tokens,
and avoids rendering raw HTML in reviews.
"""

from fastapi import FastAPI, Request, Form, Response, HTTPException
from fastapi.responses import HTMLResponse, RedirectResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from starlette.templating import Jinja2Templates
import sqlite3
import uuid
import hashlib
import os
import secrets
from datetime import datetime, timezone

try:
    import bcrypt
except Exception:
    bcrypt = None

# Toggle security mode here
SECURE_MODE = False

BASE_DIR = os.path.dirname(__file__)
DB_PATH = os.path.join(BASE_DIR, 'app.db')

app = FastAPI()

# Add CORS middleware to allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory=os.path.join(BASE_DIR, 'templates'))
app.mount('/static', StaticFiles(directory=os.path.join(BASE_DIR, 'static')), name='static')

# Simple in-memory session store: session_id -> {username, csrf_token}
SESSIONS = {}

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    cur = conn.cursor()
    # users, products, reviews
    cur.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT,
        role TEXT
    )
    ''')
    cur.execute('''
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT
    )
    ''')
    cur.execute('''
    CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER,
        author TEXT,
        content TEXT,
        created_at TEXT
    )
    ''')
    conn.commit()

    # create default admin and a sample user if missing
    def user_exists(u):
        cur.execute('SELECT id FROM users WHERE username=?', (u,))
        return cur.fetchone() is not None

    if not user_exists('admin'):
        pw = 'admin123'
        stored = pw if not SECURE_MODE else hash_password(pw)
        cur.execute('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', ('admin', stored, 'admin'))

    if not user_exists('alice'):
        pw = 'password'
        stored = pw if not SECURE_MODE else hash_password(pw)
        cur.execute('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', ('alice', stored, 'user'))

    # sample products
    cur.execute('SELECT COUNT(*) as c FROM products')
    if cur.fetchone()['c'] == 0:
        products = [
            ('Running Shoes', 'Lightweight running shoes'),
            ('Explorer Boots', 'Durable boots for outdoors'),
            ('Comfort Loafers', 'Smart casual loafers')
        ]
        cur.executemany('INSERT INTO products (name, description) VALUES (?, ?)', products)
    conn.commit()
    conn.close()


def hash_password(pw: str) -> str:
    if SECURE_MODE:
        if bcrypt is None:
            raise RuntimeError('bcrypt required in secure mode')
        return bcrypt.hashpw(pw.encode(), bcrypt.gensalt()).decode()
    # insecure: store plain text
    return pw


def verify_password(stored: str, provided: str) -> bool:
    if SECURE_MODE:
        return bcrypt.checkpw(provided.encode(), stored.encode())
    return stored == provided


def create_session(username: str):
    sid = str(uuid.uuid4())
    token = secrets.token_urlsafe(16) if SECURE_MODE else ''
    SESSIONS[sid] = {'username': username, 'csrf': token}
    return sid


def get_current_user(request: Request):
    sid = request.cookies.get('session_id')
    if not sid:
        return None
    s = SESSIONS.get(sid)
    if not s:
        return None
    return s['username']


def get_session_data(request: Request):
    sid = request.cookies.get('session_id')
    if not sid:
        return None
    return SESSIONS.get(sid)


@app.on_event('startup')
def startup():
    init_db()


@app.get('/', response_class=HTMLResponse)
def index(request: Request):
    return RedirectResponse(url='/products')


@app.get('/register', response_class=HTMLResponse)
def register_get(request: Request):
    return templates.TemplateResponse('register.html', {'request': request, 'secure': SECURE_MODE})


@app.post('/register')
def register_post(request: Request, username: str = Form(...), password: str = Form(...)):
    # Note: No email validation, no rate limiting
    conn = get_db()
    cur = conn.cursor()
    stored = hash_password(password)
    try:
        cur.execute('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', (username, stored, 'user'))
        conn.commit()
        conn.close()
        return {'success': True, 'message': 'Account created successfully'}
    except Exception as e:
        conn.close()
        return {'success': False, 'message': f'Registration error: {str(e)}'}


@app.get('/login', response_class=HTMLResponse)
def login_get(request: Request):
    return templates.TemplateResponse('login.html', {'request': request, 'secure': SECURE_MODE})


@app.post('/login')
def login_post(response: Response, username: str = Form(...), password: str = Form(...)):
    conn = get_db()
    cur = conn.cursor()
    cur.execute('SELECT username, password, role FROM users WHERE username=?', (username,))
    row = cur.fetchone()
    conn.close()
    if not row:
        return JSONResponse({'success': False, 'message': 'Invalid credentials'}, status_code=401)
    if not verify_password(row['password'], password):
        return JSONResponse({'success': False, 'message': 'Invalid credentials'}, status_code=401)

    sid = create_session(username)
    # Set cookie attributes based on SECURE_MODE
    cookie_args = {'httponly': False, 'samesite': None}
    if SECURE_MODE:
        cookie_args['httponly'] = True
        cookie_args['samesite'] = 'strict'
    
    resp = JSONResponse({'success': True, 'message': 'Logged in', 'username': username, 'role': row['role']})
    resp.set_cookie('session_id', sid, **{k:v for k,v in cookie_args.items() if v is not None})
    return resp


@app.get('/logout')
def logout(response: Response, request: Request):
    sid = request.cookies.get('session_id')
    if sid and sid in SESSIONS:
        del SESSIONS[sid]
    resp = RedirectResponse(url='/login')
    resp.delete_cookie('session_id')
    return resp


@app.get('/products', response_class=HTMLResponse)
def list_products(request: Request):
    conn = get_db()
    cur = conn.cursor()
    cur.execute('SELECT id, name, description FROM products')
    prods = cur.fetchall()
    conn.close()
    user = get_current_user(request)
    return templates.TemplateResponse('products.html', {'request': request, 'products': prods, 'user': user, 'secure': SECURE_MODE})


@app.get('/product/{product_id}', response_class=HTMLResponse)
def product_detail(request: Request, product_id: int):
    conn = get_db()
    cur = conn.cursor()
    cur.execute('SELECT id, name, description FROM products WHERE id=?', (product_id,))
    prod = cur.fetchone()
    cur.execute('SELECT id, author, content, created_at FROM reviews WHERE product_id=? ORDER BY id DESC', (product_id,))
    reviews = cur.fetchall()
    conn.close()
    user = get_current_user(request)
    session = get_session_data(request)
    csrf = session['csrf'] if session and SECURE_MODE else ''
    # In insecure mode, templates may render review.content with |safe to simulate Stored XSS
    return templates.TemplateResponse('product_detail.html', {'request': request, 'product': prod, 'reviews': reviews, 'user': user, 'secure': SECURE_MODE, 'csrf': csrf})


@app.post('/add-review')
def add_review(request: Request, product_id: int = Form(...), content: str = Form(...)):
    # Only allow logged-in users to post reviews
    user = get_current_user(request)
    if not user:
        return JSONResponse({'success': False, 'message': 'Login required'}, status_code=401)

    # CSRF check in secure mode
    if SECURE_MODE:
        form_csrf = request.headers.get('x-csrf-token') or request.query_params.get('csrf')
        session = get_session_data(request)
        if not session or not form_csrf or form_csrf != session.get('csrf'):
            return JSONResponse({'success': False, 'message': 'CSRF token missing or invalid'}, status_code=403)

    conn = get_db()
    cur = conn.cursor()
    # Vulnerability: storing raw content without sanitization when insecure
    cur.execute('INSERT INTO reviews (product_id, author, content, created_at) VALUES (?, ?, ?, ?)', (product_id, user, content, datetime.now(timezone.utc).isoformat()))
    conn.commit()
    conn.close()
    return JSONResponse({'success': True, 'message': 'Review posted successfully'})


@app.get('/admin/reviews', response_class=HTMLResponse)
def admin_reviews(request: Request):
    user = get_current_user(request)
    if not user:
        return RedirectResponse(url='/login')
    conn = get_db()
    cur = conn.cursor()
    cur.execute('SELECT role FROM users WHERE username=?', (user,))
    row = cur.fetchone()
    if not row or row['role'] != 'admin':
        return HTMLResponse('Forbidden', status_code=403)
    cur.execute('SELECT r.id, r.product_id, r.author, r.content, r.created_at, p.name as product_name FROM reviews r LEFT JOIN products p ON r.product_id=p.id ORDER BY r.id DESC')
    reviews = cur.fetchall()
    conn.close()
    # Vulnerable: content rendered directly in template when SECURE_MODE=False
    return templates.TemplateResponse('admin_reviews.html', {'request': request, 'reviews': reviews, 'secure': SECURE_MODE})


@app.get('/api/reviews')
def get_reviews_json(request: Request):
    """Return reviews as JSON for the React frontend"""
    user = get_current_user(request)
    if not user:
        return JSONResponse({'success': False, 'message': 'Not logged in'}, status_code=401)
    
    conn = get_db()
    cur = conn.cursor()
    cur.execute('SELECT role FROM users WHERE username=?', (user,))
    row = cur.fetchone()
    if not row or row['role'] != 'admin':
        conn.close()
        return JSONResponse({'success': False, 'message': 'Access denied'}, status_code=403)
    
    # LEFT JOIN to handle reviews with missing products
    cur.execute('SELECT r.id, r.product_id, r.author, r.content, r.created_at, COALESCE(p.name, "Unknown Product") as product_name FROM reviews r LEFT JOIN products p ON r.product_id=p.id ORDER BY r.id DESC')
    reviews = cur.fetchall()
    conn.close()
    
    # Convert to list of dicts with raw content (for frontend to render with dangerouslySetInnerHTML)
    reviews_list = [
        {
            'id': r['id'],
            'product_id': r['product_id'],
            'author': r['author'],
            'content': r['content'],
            'created_at': r['created_at'],
            'product_name': r['product_name']
        }
        for r in reviews
    ]
    
    return JSONResponse({'success': True, 'reviews': reviews_list})


@app.post('/admin/change-password')
def admin_change_password(request: Request, new_password: str = Form(...)):
    user = get_current_user(request)
    if not user:
        return RedirectResponse(url='/login')
    conn = get_db()
    cur = conn.cursor()
    cur.execute('SELECT role FROM users WHERE username=?', (user,))
    row = cur.fetchone()
    if not row or row['role'] != 'admin':
        conn.close()
        return HTMLResponse('Forbidden', status_code=403)

    # CSRF check in secure mode
    if SECURE_MODE:
        form_csrf = request.headers.get('x-csrf-token') or request.query_params.get('csrf')
        session = get_session_data(request)
        if not session or not form_csrf or form_csrf != session.get('csrf'):
            return HTMLResponse('CSRF token missing or invalid', status_code=403)

    # Vulnerability: no old-password required in insecure mode
    stored = hash_password(new_password)
    cur.execute('UPDATE users SET password=? WHERE username=?', (stored, user))
    conn.commit()
    conn.close()
    return HTMLResponse('Password changed')
