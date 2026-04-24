import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const productImages = {
  1: '/images/runnungshoes.webp',
  2: '/images/Explorerboots.png',
  3: '/images/loafer.png',
  4: '/images/sneakers.png'
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // The backend returns HTML, so we can try to parse it
        // For now, create test products
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
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div style={{textAlign:'center', color:'#f7d128', paddingTop:'50px'}}>Loading products...</div>;
  }

  if (error) {
    return <div style={{textAlign:'center', color:'#ff6b6b', paddingTop:'50px'}}>{error}</div>;
  }

  return (
    <main style={{maxWidth:'1200px', margin:'0 auto', padding:'30px 20px'}}>
      <h1 style={{color:'#f7d128', marginBottom:'30px', textAlign:'center'}}>Our Products</h1>
      
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
            
            <div style={{padding: '20px'}}>
              <h3 style={{color:'#f7d128', marginBottom:'8px'}}>{product.name}</h3>
              <p style={{color:'#ccc', fontSize:'0.9rem', marginBottom:'15px'}}>
                {product.description}
              </p>
              
              <Link 
                to={`/product/${product.id}`}
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  background: '#f7d128',
                  color: '#000',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#e44a4f';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#f7d128';
                  e.target.style.color = '#000';
                }}
              >
                View Details & Review
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        background: '#2a2527',
        padding: '30px',
        borderRadius: '8px',
        border: '2px solid #f7d128',
        marginTop: '40px'
      }}>
        <h3 style={{color:'#f7d128', marginBottom:'15px'}}>How to Test Stored XSS</h3>
        <ol style={{color:'#ccc', lineHeight:'1.8'}}>
          <li>Click on any product above</li>
          <li>Scroll down to "Add Your Review" section</li>
          <li>Paste an XSS payload (example provided in the form)</li>
          <li>Click "Post Review"</li>
          <li>Login as <strong>admin / admin123</strong></li>
          <li>Visit <strong>/admin/reviews</strong></li>
          <li>The XSS payload will execute in the admin panel</li>
        </ol>

        <div style={{
          background: '#1a1817',
          padding: '15px',
          borderRadius: '5px',
          marginTop: '15px',
          borderLeft: '4px solid #f7d128',
          color: '#0f0',
          fontFamily: 'monospace',
          fontSize: '0.9rem'
        }}>
          <strong style={{color:'#f7d128'}}>Example Payload:</strong>
          <br/>&lt;img src=x onerror="alert('XSS Vulnerability!')"&gt;
        </div>
      </div>
    </main>
  );
}
