import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, role, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('/logout', {
        credentials: 'include'
      });
    } catch (err) {
      console.error('Logout error:', err);
    }
    logout();
    navigate('/login');
  };

  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src="/images/logo.png" alt="StepStyle Logo" />
        </Link>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/about">About Us</Link></li>
            {user && role === 'admin' && (
              <li><Link to="/admin/reviews" style={{color:'#f7d128', fontWeight:'bold'}}>Reviews</Link></li>
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