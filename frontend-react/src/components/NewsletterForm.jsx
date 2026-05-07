'use client';

import { useState } from 'react';
import { subscribeNewsletter } from '@/lib/actions';

// ============================================================================
// INTENTIONALLY VULNERABLE FORM COMPONENT
// ============================================================================
// This component now calls an unsafe Server Action (subscribeNewsletter)
// that performs unvalidated Object.assign() on user input, allowing
// prototype pollution attacks. See /lib/actions.js for vulnerability details.
// ============================================================================

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // 🔴 VULNERABLE: Calling unsafe Server Action that accepts FormData
      // This Server Action uses Object.assign() without validation,
      // allowing attackers to inject fields like __proto__ to pollute prototype
      const formData = new FormData();
      formData.append('email', email);
      
      // VULNERABLE: Directly call Server Action with untrusted FormData
      // In a crafted attack via Next-Action header, malicious fields would be added here
      const result = await subscribeNewsletter(formData);
      
      if (result.success) {
        setEmail('');
        setStatus('success');
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Newsletter error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'success' && (
        <p style={{ color: '#28a745', marginTop: '10px', fontSize: '0.9rem' }}>
          ✓ Thanks for subscribing!
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#dc3545', marginTop: '10px', fontSize: '0.9rem' }}>
          ✗ Subscription failed. Please try again.
        </p>
      )}
    </form>
  );
}
