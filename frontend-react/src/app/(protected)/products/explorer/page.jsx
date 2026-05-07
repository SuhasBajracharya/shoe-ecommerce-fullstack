'use client';

import Link from 'next/link';

const ProductExplorer = () => {
  return (
    <>

      <section className="product-detail-section">
        <div className="container product-grid">
          <div className="product-image-container">
            <img src="/images/Explorerboots.png" alt="boots" />
          </div>
          <div className="product-info-order">
            <h1 className="product-name">Urban Explorer Boots</h1>
            <p className="product-price">Rs 11999.99</p>
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
            <p>Make a bold style statement with these modern denim and leather hybrid high-top sneakers. Featuring a unique combination of dark blue denim fabric and sleek black leather accents, these shoes are designed for both fashion and function. The adjustable strap adds an urban edge while ensuring a secure fit, perfect for everyday streetwear or casual outings.</p>
          </div>
          <div className="disclaimers-box" style={{ animationDelay: '0.4s' }}>
            <h3 className="section-heading">Disclaimers</h3>
            <p><strong>Size:</strong> There is only one size available - Size no 45.</p>
            <p><strong>Color:</strong>Dark Blue Denim with Black Leather Accents</p>
            <p><strong>Delivery:</strong> Free delivery within Nepal. International shipping rates may apply.</p>
            <p><strong>Design:</strong> High-top lace-up with hook-and-loop strap, cushioned sole, and contrast rubber outsole for comfort and grip.</p>
          </div>
        </div>
      </section>

    </>
  );
};

export default ProductExplorer;
