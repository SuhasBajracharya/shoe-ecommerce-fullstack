import Link from 'next/link';

// Server Component - product detail page
export default function ProductLoafers() {
  return (
    <>

      <section className="product-detail-section">
        <div className="container product-grid">
          <div className="product-image-container">
            <img src="/images/loafer.png" alt="boots" />
          </div>
          <div className="product-info-order">
            <h1 className="product-name">Comfort Stride Loafers</h1>
            <p className="product-price">Rs 7999.99</p>
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
            <p>Elevate your style with these sleek penny loafers in premium tan leather. Featuring a contrasting dark brown strap across the vamp, these slip-on shoes blend modern minimalism with classic sophistication. Perfect for business casual or smart everyday wear, they offer all-day comfort with a refined silhouette</p>
          </div>
          <div className="disclaimers-box" style={{ animationDelay: '0.4s' }}>
            <h3 className="section-heading">Disclaimers</h3>
            <p><strong>Size:</strong> There is only one size available - Size no 45.</p>
            <p><strong>Color:</strong>Tan with Dark Brown Strap</p>
            <p><strong>Delivery:</strong> Free delivery within Nepal. International shipping rates may apply.</p>
            <p><strong>Design:</strong> Slip-on loafer with stitched detailing and smooth leather finish</p>
          </div>
        </div>
      </section>

    </>
  );
}
