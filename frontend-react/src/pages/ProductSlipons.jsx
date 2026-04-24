import React from 'react';
import { Link } from 'react-router-dom';

const ProductSlipons = () => {
  return (
    <>

        <section className="product-detail-section">
            <div className="container product-grid">
                <div className="product-image-container">
                    <img src="/images/slipons.png" alt="boots" />
                </div>
                <div className="product-info-order">
                    <h1 className="product-name">Leather Slip-ons</h1>
                    <p className="product-price">Rs 6999.99</p>
                    <p className="delivery-info">Free Delivery</p>

                    <form className="order-form">
                        <input type="text" placeholder="Enter Your Name" style={{animation: 'fadeInUp 0.8s ease 0.2s both'}} />
                        <input type="email" placeholder="Enter Your Email" style={{animation: 'fadeInUp 0.8s ease 0.4s both'}} />
                        <input type="tel" placeholder="Enter Your Phone Number" style={{animation: 'fadeInUp 0.8s ease 0.6s both'}} />
                        <input type="text" placeholder="Enter Your Delivery Address" style={{animation: 'fadeInUp 0.8s ease 0.8s both'}} />
                        <button type="submit" className="confirm-order-btn" style={{animation: 'fadeInUp 0.8s ease 1s both'}}>Confirm Order</button>
                    </form>
                </div>
            </div>
        </section>

        <section className="bottom-sections">
            <div className="container bottom-grid">
                <div className="description-box" style={{animationDelay: '0.2s'}}>
                    <h3 className="section-heading">Description</h3>
                    <p>Step into all-day comfort and durability with these classic black slip-on work shoes. Crafted with a smooth leather upper and cushioned interior, they’re built for long hours on your feet. The slip-resistant rubber outsole ensures steady footing on a variety of surfaces, making them ideal for professional and everyday use.</p>
                </div>
                <div className="disclaimers-box" style={{animationDelay: '0.4s'}}>
                    <h3 className="section-heading">Disclaimers</h3>
                    <p><strong>Size:</strong> There is only one size available - Size no 45.</p>
                    <p><strong>Color:</strong>Classic Black</p>
                    <p><strong>Delivery:</strong> Free delivery within Nepal. International shipping rates may apply.</p>
                    <p><strong>Design:</strong> Slip-on design with elastic side panels and non-slip rubber sole for comfort and practicality.</p>
                </div>
            </div>
        </section>
    
    </>
  );
};

export default ProductSlipons;
