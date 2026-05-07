'use client';

import { useState, useEffect } from 'react';

export default function AdminReviewsList() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/reviews', {
          credentials: 'include',
          headers: {
            'Accept': 'application/json'
          }
        });

        if (res.ok) {
          const data = await res.json();
          setReviews(data.reviews || []);
        } else {
          setError('Failed to load reviews');
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Error loading reviews: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', color: '#f7d128', paddingTop: '50px' }}>Loading reviews...</div>;
  }

  return (
    <>
      {error && (
        <div style={{
          background: '#c41e3a',
          color: 'white',
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '20px'
        }}>
          {error}
        </div>
      )}

      <div style={{
        background: '#2a2527',
        padding: '30px',
        borderRadius: '8px',
        border: '1px solid #f7d128'
      }}>
        {reviews.length === 0 ? (
          <p style={{ color: '#ccc' }}>No reviews yet.</p>
        ) : (
          <div>
            {reviews.map((review) => (
              <div key={review.id} style={{
                background: '#1a1817',
                padding: '20px',
                marginBottom: '15px',
                borderRadius: '5px',
                borderLeft: '4px solid #f7d128'
              }}>
                <p style={{ color: '#f7d128', margin: '0 0 10px 0', fontWeight: 'bold' }}>
                  {review.author} on <em style={{ color: '#ccc' }}>{review.product_name}</em>
                </p>
                <div style={{
                  color: '#ddd',
                  wordBreak: 'break-word',
                  fontFamily: 'monospace',
                  fontSize: '0.95rem'
                }} dangerouslySetInnerHTML={{ __html: review.content }}>
                </div>
                <p style={{ color: '#999', fontSize: '0.85rem', margin: '10px 0 0 0' }}>
                  {new Date(review.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
