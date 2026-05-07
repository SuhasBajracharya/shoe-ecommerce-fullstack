import Layout from '@/components/Layout';

export default function ProtectedLayout({ children }) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}
