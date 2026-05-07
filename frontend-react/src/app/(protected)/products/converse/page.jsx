'use client';

import Link from 'next/link';

const ProductConverse = () => {
  return (
    <>

      <section className="product-detail-section">
        <div className="container product-grid">
          <div className="product-image-container">
            <img src="/images/converse.png" alt="boots" />
          </div>
          <div className="product-info-order">
            <h1 className="product-name">Converse</h1>
            <p className="product-price">Rs 5999.99</p>
            <p className="delivery-info">Free Delivery</p>

            <form className="order-form">
              <input type="text" placeholder="Enter Your Name" style={{ animation: 'fadeInUp 0.8s ease 0.2s both' }} />
              <input type="email" placeholder="Enter Your Email" style={{ animation: 'fadeInUp 0.8s ease 0.4s both' }} />
              <input type="tel" placeholder="Enter Your Phone Number" style={{ animation: 'fadeInUp 0.8s ease 0.6s both' }} />
              <input type="text" placeholder="Enter Your Delivery Address" style={{ animation: 'fadeInUp 0.8s ease 0.8s both' }} />
              <button type="submit" className="confirm-order-btn" style={{ animation: 'fadeInUp 0.8s ease 1s both' }}>Confirm Order</button>
            </form>
          </div>
        </div>
      </section>

      <section className="bottom-sections">
        <div className="container bottom-grid">
          <div className="description-box" style={{ animationDelay: '0.2s' }}>
            <h3 className="section-heading">Description</h3>
            <p>Turn heads with these eye-catching Converse high-top sneakers featuring a cosmic-inspired paint-splatter design. With their iconic silhouette and bold gradient fade from white to black, these shoes combine comfort, individuality, and street-style flair. Perfect for those who dare to stand out, they offer a padded insole and durable rubber sole for everyday wear.</p>
          </div>
          <div className="disclaimers-box" style={{ animationDelay: '0.4s' }}>
            <h3 className="section-heading">Disclaimers</h3>
            <p><strong>Size:</strong> There is only one size available - Size no 45.</p>
            <p><strong>Color:</strong>White to Black Gradient with Paint Splatter</p>
            <p><strong>Delivery:</strong> Free delivery within Nepal. International shipping rates may apply.</p>
            <p><strong>Design:</strong> Classic high-top with lace-up closure, signature Converse logo patch, and cushioned interior for comfort.</p>
          </div>
        </div>
      </section>

    </>
  );
};

export default ProductConverse;
