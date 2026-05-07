'use client';

import React from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function ProtectedRoute({ children, requiredRole = null }) {
  const { user, role, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        color: '#f7d128'
      }}>
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        color: '#f7d128'
      }}>
        Access Denied. Please log in.
      </div>
    );
  }

  if (requiredRole && role !== requiredRole) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        color: '#f7d128'
      }}>
        Access Denied. Insufficient permissions.
      </div>
    );
  }

  return children;
}
