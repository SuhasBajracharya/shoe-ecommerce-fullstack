import ProductsList from '@/components/ProductsList';

// Server Component - fetches product data on the server
export const metadata = {
  title: 'Products | StepStyle',
  description: 'Browse our collection of premium footwear',
};

export default function Products() {
  // In a real app, you would fetch from your backend here
  // const products = await fetch('http://localhost:8000/products');
  // For now, pass empty array and let ProductsList fetch on client
  const initialProducts = [];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
      <h1 style={{ color: '#f7d128', marginBottom: '30px', textAlign: 'center' }}>Our Products</h1>
      <ProductsList initialProducts={initialProducts} />
    </main>
  );
}
