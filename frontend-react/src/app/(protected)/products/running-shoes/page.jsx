'use client';

import Link from 'next/link';

const ProductRunnningshoes = () => {
  return (
    <>

      <section className="product-detail-section">
        <div className="container product-grid">
          <div className="product-image-container">
            <img src="/images/runnungshoes.webp" alt="Running Shoes" />
          </div>
          <div className="product-info-order">
            <h1 className="product-name">Running Shoes</h1>
            <p className="product-price">Rs 12999.99</p>
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
            <p>Elevate your performance and style with these premium grey running shoes designed for comfort, durability, and everyday wear. Featuring a sleek and modern design with a breathable mesh upper, these shoes ensure optimal airflow during intense workouts or casual outings.</p>
          </div>
          <div className="disclaimers-box" style={{ animationDelay: '0.4s' }}>
            <h3 className="section-heading">Disclaimers</h3>
            <p><strong>Size:</strong> There is only one size available - Size no 42.</p>
            <p><strong>Color:</strong> Cool Grey with White & Black Accents.</p>
            <p><strong>Delivery:</strong> Free delivery within Nepal. International shipping rates may apply.</p>
            <p><strong>Design:</strong> Lace-up closure with padded tongue and collar for a snug fit</p>
          </div>
        </div>
      </section>

    </>
  );
};

export default ProductRunnningshoes;
