'use client';

import { useState, useEffect } from 'react';

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
  const [reviewContent, setReviewContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!reviewContent.trim()) {
      setError(true);
      setMsg('Review cannot be empty');
      return;
    }

    setSubmitting(true);
    setError(false);
    setMsg(null);

    const fd = new FormData();
    fd.append('product_id', productId);
    fd.append('content', reviewContent);

    try {
      const res = await fetch('/add-review', {
        method: 'POST',
        body: fd,
        credentials: 'include'
      });

      if (res.ok) {
        setMsg('✓ Review posted successfully!');
        setReviewContent('');
        // Refresh reviews
        setTimeout(() => {
          setMsg(null);
          window.location.reload();
        }, 1500);
      } else {
        setError(true);
        const text = await res.text();
        setMsg(text || 'Failed to post review');
      }
    } catch (err) {
      setError(true);
      setMsg('Network error: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

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

      {/* Add Review Form */}
      <div style={{
        background: '#2a2527',
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '40px',
        border: '1px solid #f7d128'
      }}>
        <h3 style={{ color: '#f7d128', marginBottom: '20px' }}>Add Your Review</h3>

        {msg && (
          <div style={{
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '5px',
            backgroundColor: error ? '#c41e3a' : '#28a745',
            color: 'white',
            textAlign: 'center'
          }}>
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmitReview}>
          <label style={{ color: '#f7d128', display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Your Review:
          </label>
          <textarea
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            disabled={submitting}
            placeholder="Share your thoughts about this product..."
            style={{
              width: '100%',
              minHeight: '120px',
              padding: '15px',
              border: '2px solid #f7d128',
              borderRadius: '5px',
              background: '#1a1817',
              color: '#f7d128',
              fontSize: '1rem',
              outline: 'none',
              fontFamily: 'monospace',
              opacity: submitting ? 0.6 : 1
            }}
            onFocus={(e) => !submitting && (e.target.style.borderColor = '#fff')}
            onBlur={(e) => !submitting && (e.target.style.borderColor = '#f7d128')}
          />

          <button
            type="submit"
            disabled={submitting}
            style={{
              marginTop: '15px',
              padding: '12px 30px',
              background: '#f7d128',
              color: '#000',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: submitting ? 'not-allowed' : 'pointer',
              opacity: submitting ? 0.6 : 1,
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => !submitting && (e.target.style.background = '#e44a4f', e.target.style.color = 'white')}
            onMouseOut={(e) => !submitting && (e.target.style.background = '#f7d128', e.target.style.color = '#000')}
          >
            {submitting ? 'Posting...' : 'Post Review'}
          </button>
        </form>
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
