'use client';

import { useState } from 'react';

export default function ReviewForm({ productId, onSuccess }) {
  const [reviewContent, setReviewContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!reviewContent.trim()) {
      setError(true);
      setMsg('Review cannot be empty');
      return;
    }

    setLoading(true);
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
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
            window.location.reload();
          }, 1500);
        }
      } else {
        setError(true);
        const text = await res.text();
        setMsg(text || 'Failed to post review');
      }
    } catch (err) {
      setError(true);
      setMsg('Network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitReview} style={{ marginTop: '30px' }}>
      <h3 style={{ color: '#f7d128', marginBottom: '15px' }}>Write a Review</h3>

      {msg && (
        <div style={{
          padding: '12px',
          marginBottom: '15px',
          borderRadius: '5px',
          backgroundColor: error ? '#c41e3a' : '#28a745',
          color: 'white',
          fontSize: '0.9rem'
        }}>
          {msg}
        </div>
      )}

      <textarea
        value={reviewContent}
        onChange={(e) => setReviewContent(e.target.value)}
        placeholder="Share your thoughts about this product..."
        style={{
          width: '100%',
          minHeight: '120px',
          padding: '15px',
          borderRadius: '5px',
          border: '1px solid #f7d128',
          background: '#1a1817',
          color: '#fff',
          fontFamily: 'inherit',
          fontSize: '0.95rem',
          marginBottom: '15px'
        }}
        disabled={loading}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          padding: '10px 25px',
          background: '#f7d128',
          color: '#000',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1
        }}
      >
        {loading ? 'Posting...' : 'Post Review'}
      </button>
    </form>
  );
}
