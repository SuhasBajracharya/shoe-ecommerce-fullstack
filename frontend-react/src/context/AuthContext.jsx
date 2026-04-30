import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on mount by checking if session cookie exists
  useEffect(() => {
    // Simple check: if we can reach the backend and have a session, we're logged in
    // For now, just assume not logged in on startup (user needs to login)
    setLoading(false);
  }, []);

  const login = (username, userRole = null) => {
    setUser(username);
    setRole(userRole);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
