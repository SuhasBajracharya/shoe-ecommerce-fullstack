'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminAuthGuard({ children }) {
  const { role, loading } = useAuth();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (role !== 'admin') {
        router.push('/');
      } else {
        setIsAdmin(true);
      }
    }
  }, [role, loading, router]);

  if (loading) {
    return <div style={{ textAlign: 'center', color: '#f7d128', paddingTop: '50px' }}>Verifying access...</div>;
  }

  if (!isAdmin) {
    return null;
  }

  return children;
}
