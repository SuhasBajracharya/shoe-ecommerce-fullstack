'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const { user, role, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/logout', {
        credentials: 'include'
      });
    } catch (err) {
      console.error('Logout error:', err);
    }
    logout();
    router.push('/login');
  };

  return (
    <header>
      <div className="logo-container">
        <Link href="/">
          <img src="/images/logo.png" alt="StepStyle Logo" />
        </Link>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/research">Research</Link></li>
            <li><Link href="/about">About Us</Link></li>
            {user && role === 'admin' && (
              <li><Link href="/admin/reviews" style={{color:'#f7d128', fontWeight:'bold'}}>Reviews</Link></li>
            )}
            {user && (
              <li>
                <span style={{color:'#f7d128', marginRight:'10px'}}>Account</span>
                <button 
                  onClick={handleLogout}
                  style={{
                    background:'none',
                    border:'none',
                    color:'#f7d128',
                    fontSize:'1rem',
                    cursor:'pointer',
                    padding:'5px 15px',
                    borderRadius:'20px',
                    transition:'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor='#f7d128';
                    e.target.style.color='black';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor='transparent';
                    e.target.style.color='#f7d128';
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;