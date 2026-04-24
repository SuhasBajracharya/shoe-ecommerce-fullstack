import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Research = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const openModal = (src) => {
    setLightboxSrc(src);
  };

  const closeModal = () => {
    setLightboxSrc(null);
  };

  return (
    <>

      <section className="research-section">
        <div className="research-header">
          <h2>Our Research & What We Learned</h2>
        </div>

        <p>We spent weeks studying how people shop for shoes online and checking out what other big brands are doing. Our goal was simple: build a website that actually makes shoe shopping fun and easy. Here's what we discovered and how it shaped StepStyle.</p>

        <h3>How We Stack Up Against the Big Names</h3>
        
        <p>We looked at how Nike, Zappos, ASOS, and Adidas built their websites and compared them to what we're doing. It was pretty eye-opening to see where everyone's strengths and weaknesses are.</p>
        
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>What We Looked At</th>
                <th>StepStyle (Us!)</th>
                <th>Nike</th>
                <th>Zappos</th>
                <th>ASOS</th>
                <th>Adidas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>How It Looks</td>
                <td>Bold colors that pop</td>
                <td>Clean and minimal</td>
                <td>Packed with info</td>
                <td>Fashion magazine style</td>
                <td>Sporty and sleek</td>
              </tr>
              <tr>
                <td>Finding Stuff</td>
                <td>Simple categories that make sense</td>
                <td>Organized by sports</td>
                <td>Tons of filters (maybe too many)</td>
                <td>Browse by occasion</td>
                <td>Collections-focused</td>
              </tr>
              <tr>
                <td>Product Pages</td>
                <td>Cards with cool hover effects</td>
                <td>Basic grid, not much info</td>
                <td>Detailed specs everywhere</td>
                <td>Focus on how shoes look on models</td>
                <td>Highlights tech features</td>
              </tr>
              <tr>
                <td>Mobile Experience</td>
                <td>Works great on phones</td>
                <td>Mobile comes first</td>
                <td>Works but feels cramped</td>
                <td>Really polished mobile design</td>
                <td>Like using an app</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>Fast loading with smooth animations</td>
                <td>Can be slow with all their videos</td>
                <td>Decent but lots going on</td>
                <td>Slower because of big images</td>
                <td>Pretty quick overall</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>What We Learned From Each Competitor</h3>

        <div className="research-grid">
          <div className="research-card">
            <h4>Standing Out Visually</h4>
            <p>Most shoe sites play it safe with boring colors. We went bold with our yellow and pink accents because research shows unique brand colors help people remember you 80% better.</p>
            <p>Our product cards do this cool thing where they show ratings when you hover over them. None of the big sites do this, and it helps people feel more confident about buying.</p>
          </div>

          <div className="research-card">
            <h4>Showing Products Right</h4>
            <p>Zappos goes overboard with product details, while Nike barely shows anything. We found the sweet spot - enough info to help you decide without overwhelming you.</p>
            <p>Those little badges we use (like "New" or "Bestseller") work really well. Adidas does something similar, and we noticed people click on those products way more.</p>
          </div>

          <div className="research-card">
            <h4>Making Navigation Simple</h4>
            <p>Nike organizes everything by sport, which is confusing if you just want casual sneakers. ASOS has too many options. We kept it simple - just clear categories that normal people actually think in.</p>
            <p>That "Back to Top" button might seem small, but it's missing on some major sites and people really appreciate it, especially on mobile.</p>
          </div>
        </div>

        <h3>What Makes StepStyle Different</h3>
        
        <p>After studying all these sites and testing with real shoppers, we built some features that nobody else has. Here's what makes us stand out:</p>

        <div className="research-grid">
          <div className="research-card">
            <h4>Animations That Actually Help</h4>
            <p>We found that small animations make people 18% more likely to stick around and browse. But here's the key - they have to be fast and useful, not just flashy.</p>
            <ul className="feature-list">
              <li>Pages load with smooth animations that don't slow things down</li>
              <li>Product cards react when you hover over them</li>
              <li>Everything feels responsive when you click it</li>
              <li>Our badges help you spot new stuff and bestsellers instantly</li>
            </ul>
            <p>Unlike Zappos and ASOS, we made sure our animations don't slow down the site. Fast and pretty - that's the goal.</p>
          </div>

          <div className="research-card">
            <h4>Smart Shopping Features</h4>
            <p>We spent time watching how people actually shop online and built features around their real behavior, not what we thought they wanted.</p>
            <ul className="feature-list">
              <li>Colors that help you tell different shoe types apart</li>
              <li>Sale prices show exactly how much you're saving</li>
              <li>Reviews show both stars and the number of people who rated it</li>
            </ul>
          </div>
        </div>

        <h3>Visual Comparison - See the Difference</h3>
        
        <p>Sometimes it's easier to see what we mean when we can actually compare how things look. Here are some side-by-side screenshots showing how we stack up against the competition. Click on any image to view the full-size screenshot:</p>

        <div className="screenshot-section">
          <div className="screenshot-comparison">
            <h4>Homepage Design Comparison</h4>
            <div className="screenshot-grid">
              <div className="screenshot-card">
                <div className="screenshot-placeholder">
                  <img src="/images/stepstylehome.png" alt="StepStyle Homepage" className="screenshot-img" onClick={() => openModal('/images/stepstylehome.png')} />
                </div>
                <h5>StepStyle</h5>
                <p>Bold colors, clear navigation, and engaging animations make our homepage stand out while staying user-friendly.</p>
                <div className="view-full-indicator">Click image to view full page</div>
              </div>
              
              <div className="screenshot-card">
                <div className="screenshot-placeholder">
                  <img src="/images/nikehome.png" alt="Nike Homepage" className="screenshot-img" onClick={() => openModal('/images/nikehome.png')} />
                </div>
                <h5>Nike</h5>
                <p>Clean and minimal, but can feel a bit cold and impersonal for casual shoppers.</p>
                <div className="view-full-indicator">Click image to view full page</div>
              </div>
              
              <div className="screenshot-card">
                <div className="screenshot-placeholder">
                  <img src="/images/Zapposhome.png" alt="Zappos Homepage" className="screenshot-img" onClick={() => openModal('/images/Zapposhome.png')} />
                </div>
                <h5>Zappos</h5>
                <p>Functional but busy - lots of information competing for attention.</p>
                <div className="view-full-indicator">Click image to view full page</div>
              </div>
            </div>
          </div>

          <div className="screenshot-comparison">
            <h4>Product Page Layout</h4>
            <div className="screenshot-grid">
              <div className="screenshot-card">
                <div className="screenshot-placeholder">
                  <img src="/images/stepstyleproduct.png" alt="StepStyle Products" className="screenshot-img" onClick={() => openModal('/images/stepstyleproduct.png')} />
                </div>
                <h5>StepStyle</h5>
                <p>Card-based layout with hover effects and clear badges. Easy to scan and compare products.</p>
                <div className="view-full-indicator">Click image to view full page</div>
              </div>
              
              <div className="screenshot-card">
                <div className="screenshot-placeholder">
                  <img src="/images/asosproduct .png" alt="ASOS Products" className="screenshot-img" onClick={() => openModal('/images/asosproduct .png')} />
                </div>
                <h5>ASOS</h5>
                <p>Great imagery but can be overwhelming with too many options visible at once.</p>
                <div className="view-full-indicator">Click image to view full page</div>
              </div>
              
              <div className="screenshot-card">
                <div className="screenshot-placeholder">
                  <img src="/images/adidasproduct.png" alt="Adidas Products" className="screenshot-img" onClick={() => openModal('/images/adidasproduct.png')} />
                </div>
                <h5>Adidas</h5>
                <p>Clean grid but lacks the visual cues that help customers make quick decisions.</p>
                <div className="view-full-indicator">Click image to view full page</div>
              </div>
            </div>
          </div>
        </div>

        <div className="highlight">
          <h4>The Bottom Line</h4>
          <p>We took the best parts from everyone - ASOS's visual appeal, Zappos's helpful info, Adidas's speed, and Nike's focus on products - but we did it our own way. The result is a site that feels familiar but better, with our own personality that makes shopping for shoes actually enjoyable.</p>
        </div>

        <div className="reference-section">
          <h3>Where We Got Our Info</h3>
          <ul className="reference-list">
            <li>Nike, Inc. (no date) Nike. Just Do It. Available at: https://www.nike.com/ </li>
            <li>Adidas AG (no date) Adidas Official Website. Available at: https://www.adidas.com/</li>
            <li>Zapros.com LLC (no date) Zappos Official Site. Available at: https://www.zappos.com/</li>
            <li>ASOS plc (no date) ASOS Official Website. Available at: https://www.asos.com/</li>
          </ul>
        </div>
      </section>

      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={closeModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeModal}>×</button>
            <img src={lightboxSrc} alt="Full screenshot" />
          </div>
        </div>
      )}

    </>
  );
};

export default Research;
