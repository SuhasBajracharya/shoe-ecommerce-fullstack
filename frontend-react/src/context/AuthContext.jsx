'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on mount by checking session
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if user has a valid session with the backend
        const response = await fetch('/api/check-session', {
          credentials: 'include',
        });
        
        if (response.ok) {
          const data = await response.json();
          setUser(data.username);
          setRole(data.role);
        } else {
          setUser(null);
          setRole(null);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setUser(null);
        setRole(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = useCallback((username, userRole = null) => {
    setUser(username);
    setRole(userRole);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setRole(null);
  }, []);

  const value = {
    user,
    role,
    setUser,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
