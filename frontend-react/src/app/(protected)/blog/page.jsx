import Link from 'next/link';

// Server Component - content-focused, no client interactivity
export const metadata = {
  title: 'Blog | StepStyle',
  description: 'Read about technology trends in footwear',
};

export default function Blog() {
  return (
    <>
      {/* blog banner  */}
      <div className="blog-banner">
        <h1>StepStyle Blog</h1>
      </div>

      <div className="container">
        {/* blog content section       */}
        <section className="blog-section">
          <h2>About Technology in Footwear</h2>
          <p>Technology has revolutionized the footwear industry. From smart sneakers to AI driven designs, tech allows personalized comfort, performance analytics, and even virtual try ons. Wearable tech is no longer just about fitness it's about fashion too.</p>
        </section>

        <section className="blog-section">
          <h2>Positive Impact of Technology</h2>
          <ul>
            <li>Smart insoles that track steps, posture, and pressure.</li>
            <li>AI-based recommendations for shoe size and fit.</li>
            <li>Environment-friendly 3D printed soles.</li>
            <li>Enhanced athlete performance through real-time feedback.</li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>Negative Impact of Technology</h2>
          <ul>
            <li>High production cost increases retail prices.</li>
            <li>Complex manufacturing may reduce employment.</li>
            <li>Dependence on tech might overshadow traditional craftsmanship.</li>
            <li>Security concerns with connected footwear devices.</li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>How Technology Boosts Footwear Sales</h2>
          <ul>
            <li>Augmented Reality lets users try shoes virtually.</li>
            <li>AI helps target the right customers through data analysis.</li>
            <li>Social media tech drives engaging campaigns and trends.</li>
            <li>Inventory and logistics optimized through automation.</li>
          </ul>
        </section>
      </div>
    </>
  );
}
