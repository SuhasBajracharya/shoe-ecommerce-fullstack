import React from 'react';
import { Link } from 'react-router-dom';

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
                  <h4>Suhas Bajracharya</h4>
                  <p>Group Leader</p>
                  <p>As the Group Leader, Suhas guided the team with a clear vision and strategic direction. He took charge of the complete website design using CSS, crafting the home, product, and research pages. Suhas effectively coordinated team collaboration, identifying and utilizing each member's strengths to ensure the successful integration and completion of the entire website.</p>
                  <Link to="/portfolio/suhas" className="portfolio-btn">View Portfolio</Link>
                </div>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/osan.jpg" alt="Osan" />
                </div>
                <div className="member-info">
                  <h4>Osan Shrestha</h4>
                  <p>Graphic Designer</p>
                  <p>Osan was responsible for creating the initial wireframes for the website, providing a foundational blueprint for the design. His contributions extended beyond just wireframing, as he played a crucial role in shaping the overall design process, ensuring that the visual elements aligned with the project's goals and user experience requirements.</p>
                  <Link to="/portfolio/osan" className="portfolio-btn">View Portfolio</Link>
                </div>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/a.JPG" alt="Aditya" />
                </div>
                <div className="member-info">
                  <h4>Aditya Shah</h4>
                  <p>Researcher</p>
                  <p>Aaditya was responsible for researching the essential elements needed to build the eCommerce website, including user needs, key features, and industry best practices. His insights helped ensure the website was aligned with both user expectations and market standards.</p>
                  <Link to="/portfolio/aditya" className="portfolio-btn">View Portfolio</Link>
                </div>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/tekendra.jpg" alt="Tekendra Prasad Kandel" />
                </div>
                <div className="member-info">
                  <h4>Tekendra Prasad Kandel</h4>
                  <p>Operations Manager</p>
                  <p>Tekendra contributed to the website's functionality by implementing key JavaScript features, including form validation, dynamic item sorting, and a back-to-top button. He also designed the StepStyle logo, playing an important role in establishing the brand's visual identity.</p>
                  <Link to="/portfolio/tekendra" className="portfolio-btn">View Portfolio</Link>
                </div>
              </div>
            </div>
          </div>

          {/* contact section  */}
          <div className="about-card">
            <h2>Get In Touch</h2>
            
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Email: stepstyle45@gmail.com</p>
                <p>Phone: +977 9876543210</p>
                <p>Location: Islington College,Kamal pokhari,  Kathmandu</p>
              </div>
              
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3832640288144!2d85.32765371452973!3d27.706956032484803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190fc5ed3d5b%3A0x53b1e15300d624a2!2sDillibazar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1680764245532!5m2!1sen!2snp"
                  title="StepStyle location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            
            <div className="form-container">
              <h3>Send us a Message</h3>
              <form id="feedbackForm">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input type="text" id="name" placeholder="Enter Your Name" />
                  <span className="error-message"></span>
                </div>
          
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input type="email" id="email" placeholder="Enter your email address" />
                  <span className="error-message"></span>
                </div>
          
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea id="message" rows="5" placeholder="Tell us what's on your mind..."></textarea>
                  <span className="error-message"></span>
                </div>
          
                <button type="submit" className="submit-btn">🚀 Submit Feedback</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default About;
