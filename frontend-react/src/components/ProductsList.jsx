'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const productImages = {
  1: '/images/runnungshoes.webp',
  2: '/images/Explorerboots.png',
  3: '/images/loafer.png',
  4: '/images/sneakers.png'
};

export default function ProductsList({ initialProducts = [] }) {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialProducts.length === 0) {
      // Only fetch if no initial products provided
      const fetchProducts = async () => {
        try {
          setLoading(true);
          // The backend returns HTML, so we create test products
          const testProducts = [
            { id: 1, name: 'Running Shoes', description: 'Lightweight running shoes for maximum comfort' },
            { id: 2, name: 'Explorer Boots', description: 'Durable boots for outdoor adventures' },
            { id: 3, name: 'Comfort Loafers', description: 'Smart casual loafers' },
            { id: 4, name: 'Test Shoe', description: 'A great shoe for testing reviews and vulnerabilities' }
          ];
          setProducts(testProducts);
        } catch (err) {
          console.error('Failed to fetch products:', err);
          setError('Failed to load products');
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }
  }, [initialProducts]);

  if (loading) {
    return <div style={{ textAlign: 'center', color: '#f7d128', paddingTop: '50px' }}>Loading products...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', color: '#ff6b6b', paddingTop: '50px' }}>{error}</div>;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      marginBottom: '40px'
    }}>
      {products.map(product => (
        <div key={product.id} style={{
          background: '#2a2527',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '2px solid #f7d128',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{
            background: 'linear-gradient(135deg, #1a1817 0%, #3a3238 100%)',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img src={productImages[product.id] || '/images/sneakers.png'} alt={product.name} style={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain'
            }} />
          </div>

          <div style={{ padding: '20px' }}>
            <h3 style={{ color: '#f7d128', marginBottom: '8px' }}>{product.name}</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '15px' }}>
              {product.description}
            </p>

            <Link
              href={`/product/${product.id}`}
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                background: '#f7d128',
                color: '#000',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#fbe147'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#f7d128'}
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
