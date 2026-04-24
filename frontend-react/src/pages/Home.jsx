import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Step Into Bold Style</h1>
          <p>Express Yourself With Every Step</p>
          <Link to="/products" className="btn">Shop Collection</Link>
        </div>
      </div>

      <section className="featured-products">
        <h2>Trending Now</h2>
        <div className="product-grid">

          <div className="product-card">
            <div className="product-image">
              <img src="/images/runnungshoes.webp" alt="Running Shoes" />
            </div>
            <div className="product-info">
              <h3>Running Shoes</h3>
              <div className="price">Rs 12999.99</div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image">
              <img src="/images/Explorerboots.png" alt="Urban Explorer Boots" />
            </div>
            <div className="product-info">
              <h3>Urban Explorer Boots</h3>
              <div className="price">Rs 11999.99</div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image">
              <img src="/images/loafer.png" alt="Comfort Stride Loafers" />
            </div>
            <div className="product-info">
              <h3>Comfort Stride Loafers</h3>
              <div className="price">Rs 7999.99</div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <h2>Join The Movement</h2>
        <p>Subscribe for early access to our limited collections</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </>
  );
};

export default Home;