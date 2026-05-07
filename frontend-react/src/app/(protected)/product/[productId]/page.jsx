'use client';

import { useState, useEffect } from 'react';
import ReviewForm from '@/components/ReviewForm';

const productData = {
  1: { name: 'Running Shoes', description: 'Lightweight running shoes for maximum comfort', image: '/images/runnungshoes.webp' },
  2: { name: 'Explorer Boots', description: 'Durable boots for outdoor adventures', image: '/images/Explorerboots.png' },
  3: { name: 'Comfort Loafers', description: 'Smart casual loafers', image: '/images/loafer.png' },
  4: { name: 'Test Shoe', description: 'A great shoe for testing reviews and vulnerabilities', image: '/images/sneakers.png' }
};

export default function ProductDetail({ params }) {
  const { productId } = params;
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Use local product data
        const prod = productData[productId];
        if (prod) {
          setProduct({ id: productId, ...prod });
        } else {
          setProduct({ id: productId, name: `Product ${productId}`, description: 'Product details', image: '/images/sneakers.png' });
        }
        setReviews([]);
      } catch (err) {
        console.error('Failed to fetch product:', err);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div style={{ textAlign: 'center', color: '#f7d128', paddingTop: '50px' }}>Loading...</div>;
  }

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '30px 20px' }}>
      <h1 style={{ color: '#f7d128', marginBottom: '30px' }}>Product Details</h1>

      {product && (
        <div style={{
          background: '#2a2527',
          padding: '30px',
          borderRadius: '8px',
          marginBottom: '40px',
          border: '1px solid #f7d128'
        }}>
          {product.image && (
            <div style={{
              width: '100%',
              height: '300px',
              marginBottom: '20px',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#1a1817',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img src={product.image} alt={product.name} style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain'
              }} />
            </div>
          )}
          <h2 style={{ color: '#f7d128', marginBottom: '10px' }}>{product.name}</h2>
          <p style={{ color: '#ccc' }}>Product ID: {product.id}</p>
        </div>
      )}

      {/* Add Review Form - Client Component */}
      <div style={{
        background: '#2a2527',
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '40px',
        border: '1px solid #f7d128'
      }}>
        <ReviewForm productId={productId} />
      </div>

      {/* Reviews Section */}
      <div>
        <h3 style={{ color: '#f7d128', marginBottom: '20px' }}>Reviews</h3>
        {reviews.length === 0 && (
          <p style={{ color: '#ccc' }}>No reviews yet. Be the first to review!</p>
        )}
      </div>
    </main>
  );
}
        {reviews.length === 0 && (
          <p style={{ color: '#ccc' }}>No reviews yet. Be the first to review!</p>
        )}
      </div>
    </main>
  );
}
