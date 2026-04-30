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

# Create test users if they don't exist
def user_exists(username):
    cur.execute('SELECT COUNT(*) as c FROM users WHERE username = ?', (username,))
    return cur.fetchone()['c'] > 0

if not user_exists('admin'):
    cur.execute(
        'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
        ('admin', 'admin123', 'admin')
    )
    print("✓ Created admin user (admin / admin123)")

if not user_exists('alice'):
    cur.execute(
        'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
        ('alice', 'password', 'user')
    )
    print("✓ Created alice user (alice / password)")

conn.commit()
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

conn.commit()
conn.close()

print("\nDatabase seeded successfully!")
print("\nDefault test accounts:")
print("  - Username: admin, Password: admin123")
print("  - Username: alice, Password: password")
print("\nTo test the Stored XSS vulnerability:")
print("1. Login as a regular user (alice / password)")
print("2. Go to Products and submit a review with an XSS payload")
print("3. Login as admin (admin / admin123)")
print("4. Click 'Reviews' in the header")
print("5. The payload will execute in the admin panel")
