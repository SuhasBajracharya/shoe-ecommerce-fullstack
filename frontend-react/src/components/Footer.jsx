'use client';

import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>Shop</h3>
          <ul>
            <li><Link href="/products">Most popular</Link></li>
            <li><Link href="/products">New Arrivals</Link></li>
            <li><Link href="/products">Special Offers</Link></li>
          </ul>
        </div>
            
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><Link href="/about">Who we are</Link></li>
            <li><Link href="/about">Our Mission & Vision</Link></li>
            <li><Link href="/about">Our Milestones</Link></li>
            <li><Link href="/about">Meet Our Team</Link></li>
            <li><Link href="/about">Get in touch</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Follow Us</h3>
          <p>Stay connected for the latest drops and style inspiration.</p>
          <div className="social-links">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">YT</a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        &copy; 2026 StepStyle. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;