'use client';

import Link from 'next/link';

const About = () => {
  return (
    <>

      {/* about Banner  */}
      <div className="about-banner">
        <div className="banner-content">
          <h1>About StepStyle</h1>
        </div>
      </div>

      {/* about Content  */}
      <section className="about-section">
        <div className="about-container">
          {/*  */}
          <div className="about-card">
            <h2>Who We Are</h2>
            <p>Founded in 2025, StepStyle aims to create an e-commerce platform capable of competing with top brands.</p>
            <p>Inspired by the belief that every step should make a statement, we blend cutting-edge technology with timeless design principles to create a footwear website that excels in both form and function.</p>
          </div>

          {/* mission vision */}
          <div className="about-card">
            <h2>Our Mission & Vision</h2>
            <p><strong>Mission:</strong> To develop a production-level footwear e-commerce website.</p>
            <p><strong>Vision:</strong> To become the most loved and innovative footwear brand globally by 2030, setting new standards for design, sustainability, and customer satisfaction.</p>
          </div>

          {/* milestones  */}
          <div className="about-card">
            <h2>Our Milestones</h2>
            <ul>
              <li>Developed a strong foundation in HTML, CSS, and JavaScript.</li>
              <li>Studied various strategies and techniques employed by e-commerce platforms to increase conversion rates and drive sales.</li>
              <li>Gained a comprehensive understanding of strategies to optimize user experience (UX) on websites.</li>
            </ul>
          </div>

          {/* team  */}
          <div className="about-card">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/suhas.jpeg" alt="Suhas" />
                </div>
                <div className="member-info">
                  <h3>Suhas Bajracharya</h3>
                  <p>Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
