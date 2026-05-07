# StepStyle Backend (FastAPI) — Educational Vulnerable App

This backend is an intentionally vulnerable FastAPI application for local, educational use only. It demonstrates Stored XSS and CSRF vulnerabilities and provides a `SECURE_MODE` toggle to switch to safer behavior.

**⚠️ Warning:** Run this only on localhost in an isolated environment.

**Frontend:** Now using Next.js 15 (migrated from Vite)

Requirements
 - Python 3.10+
 - Install dependencies: `pip install -r requirements.txt`

Run

```bash
cd backend
uvicorn main:app --reload
```

Default accounts
- Admin: `admin` / `admin123`
- User: `alice` / `password`

## Demonstration: Stored XSS Attack

1. **Login as alice** (user account)
   - Username: `alice`
   - Password: `password`

2. **Post a malicious review** containing a script payload:
   ```html
   <img src=x onerror="fetch('/admin/change-password', {method:'POST', body: new FormData(Object.assign(document.createElement('form'), {username:'admin', new_password:'hacked123'}))})">
   ```
   Or simpler:
   ```html
   <script>alert('XSS Vulnerability Demonstrated!');</script>
   ```

3. **Login as admin** to the backend
   - Visit `/admin/reviews` (requires login)
   - The malicious script will execute because the review content is rendered with `|safe` filter in the template (when `SECURE_MODE=False`)
   - This demonstrates **Stored XSS**: the payload was stored in the database and executes in the admin's browser

4. **To fix the vulnerability**, set `SECURE_MODE = True` in `main.py`:
   - The template will escape HTML instead of rendering it raw
   - Passwords will be hashed with bcrypt
   - CSRF tokens will be enforced

## Vulnerability Details

### Stored XSS (Insecure Mode)
- **Location**: `POST /add-review` endpoint + `templates/product_detail.html`
- **Root Cause**: Review content stored without sanitization and rendered with `|safe` in Jinja2 template
- **Impact**: Admin views stored reviews and malicious scripts execute in admin's browser
- **Fix**: Escape review content in template (remove `|safe`), or sanitize on input

### CSRF (Insecure Mode)
- **Location**: Forms in `admin_reviews.html` and `product_detail.html`
- **Root Cause**: No CSRF token validation when `SECURE_MODE=False`
- **Impact**: Cross-site requests can change admin password without admin's knowledge
- **Fix**: Generate CSRF tokens per session, validate on state-changing POST requests

## Notes
- `SECURE_MODE = False` (default) enables insecure behaviors: plain-text passwords, no CSRF protection, and review rendering with raw HTML (Stored XSS).
- Set `SECURE_MODE = True` in `main.py` to enable mitigations: password hashing, CSRF tokens, and safe rendering.

