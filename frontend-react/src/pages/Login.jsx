import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  async function handleSubmit(e){
    e.preventDefault();
    setError(false);
    setMsg(null);
    setLoading(true);
    const fd = new FormData();
    fd.append('username', username);
    fd.append('password', password);

    try{
      const res = await fetch('/login', {
        method: 'POST',
        body: fd,
        credentials: 'include'
      });
      
      const data = await res.json();
      
      if(res.ok && data.success){
        login(username);
        setMsg('Logged in successfully!');
        setTimeout(() => navigate('/'), 800);
      } else {
        setError(true);
        setMsg(data.message || 'Login failed');
      }
    }catch(err){
      setError(true);
      setMsg('Network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #2a2527 0%, #3a3238 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: '#363238',
        padding: '50px',
        borderRadius: '10px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        maxWidth: '450px',
        width: '100%',
        border: '2px solid #f7d128'
      }}>
        <h1 style={{
          color: '#f7d128',
          marginBottom: '30px',
          textAlign: 'center',
          fontSize: '2.5rem'
        }}>Login</h1>
        
        {msg && (
          <div style={{
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '5px',
            backgroundColor: error ? '#c41e3a' : '#28a745',
            color: 'white',
            textAlign: 'center',
            fontSize: '0.9rem'
          }}>
            {msg}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: '#f7d128',
              marginBottom: '8px',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}>
              Username
            </label>
            <input 
              type="text"
              value={username} 
              onChange={e=>setUsername(e.target.value)} 
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #f7d128',
                borderRadius: '5px',
                background: '#2a2527',
                color: '#f7d128',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.3s',
                opacity: loading ? 0.6 : 1
              }}
              onFocus={(e) => !loading && (e.target.style.borderColor = '#fff')}
              onBlur={(e) => !loading && (e.target.style.borderColor = '#f7d128')}
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              color: '#f7d128',
              marginBottom: '8px',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}>
              Password
            </label>
            <input 
              type="password" 
              value={password} 
              onChange={e=>setPassword(e.target.value)} 
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #f7d128',
                borderRadius: '5px',
                background: '#2a2527',
                color: '#f7d128',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.3s',
                opacity: loading ? 0.6 : 1
              }}
              onFocus={(e) => !loading && (e.target.style.borderColor = '#fff')}
              onBlur={(e) => !loading && (e.target.style.borderColor = '#f7d128')}
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              background: '#f7d128',
              color: '#000',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              marginBottom: '20px',
              opacity: loading ? 0.6 : 1
            }}
            onMouseOver={(e) => !loading && (e.target.style.background = '#e44a4f', e.target.style.color = 'white')}
            onMouseOut={(e) => !loading && (e.target.style.background = '#f7d128', e.target.style.color = '#000')}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          color: '#ccc',
          fontSize: '0.95rem'
        }}>
          Don't have an account?{' '}
          <a href="/register" style={{
            color: '#f7d128',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.color = '#e44a4f'}
          onMouseOut={(e) => e.target.style.color = '#f7d128'}
          >
            Register now
          </a>
        </div>
      </div>
    </div>
  );
}
