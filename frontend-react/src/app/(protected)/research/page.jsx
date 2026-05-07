'use client';

import { useState } from 'react';
import Link from 'next/link';

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
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Research;
