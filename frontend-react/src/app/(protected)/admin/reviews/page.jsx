import AdminAuthGuard from '@/components/AdminAuthGuard';
import AdminReviewsList from '@/components/AdminReviewsList';

// Server Component for admin reviews
export const metadata = {
  title: 'Admin Reviews | StepStyle',
  description: 'Manage product reviews',
};

export default function AdminReviews() {
  return (
    <AdminAuthGuard>
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px 20px' }}>
        <h1 style={{ color: '#f7d128', marginBottom: '30px' }}>Admin Reviews Panel</h1>
        <AdminReviewsList />
      </main>
    </AdminAuthGuard>
  );
}
