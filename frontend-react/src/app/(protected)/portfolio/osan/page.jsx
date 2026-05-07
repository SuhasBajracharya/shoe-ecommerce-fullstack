'use client';

import Link from 'next/link';

const PortfolioOsan = () => {
  return (
    <>




      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Osan Shrestha</h1>
            <p className="subtitle">Cybersecurity Learner & Tech Explorer</p>
            <p className="description">Keen on learning cybersecurity with hands-on exploration in network tools, ethical hacking, and cyber hygiene. Dedicated to continuous improvement and skill-building.</p>
            <div className="cta-buttons">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div><img src="/images/osan.jpeg" alt="Osan Shrestha" className="profile-img" /></div>
            <div>
              <h3>Information Security Student</h3>
              <p>Hello! I'm Osan Shrestha from Kathmandu, Nepal. I have a growing passion for cybersecurity and am actively involved in learning about digital safety, vulnerability assessment, and system protection.</p>
              <p>I enjoy solving technical challenges and believe in constantly evolving through research and project-based learning.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Cyber Tools</h3>
              <div className="skill-item"><span>Kali Linux</span><span>Intermediate</span></div>
              <div className="skill-item"><span>Wireshark</span><span>Beginner</span></div>
              <div className="skill-item"><span>Burp Suite</span><span>Beginner</span></div>
              <div className="skill-item"><span>Nmap</span><span>Basic</span></div>
            </div>
            <div className="skill-category">
              <h3>Programming & IT</h3>
              <div className="skill-item"><span>Python</span><span>Intermediate</span></div>
              <div className="skill-item"><span>Networking Concepts</span><span>Basic</span></div>
              <div className="skill-item"><span>Microsoft Office</span><span>Advanced</span></div>
            </div>
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-item"><span>Nepali</span><span>Native</span></div>
              <div className="skill-item"><span>English (IELTS 7.0)</span><span>Proficient</span></div>
              <div className="skill-item"><span>Hindi</span><span>Fluent</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <h3>BSc in Cybersecurity & Networking</h3>
              <div className="institution">Islington College</div>
              <div className="date">Currently Enrolled</div>
              <p>Learning about ethical hacking, system administration, and network defense through practical labs and coursework.</p>
            </div>
            <div className="education-card">
              <h3>Advanced Level (A Levels)</h3>
              <div className="institution">NAMI College</div>
              <div className="date">2022 - 2024</div>
              <p>Focused on science subjects such as Mathematics, Computing, and Physics. Developed analytical and problem-solving skills.</p>
            </div>
            <div className="education-card">
              <h3>Secondary Education</h3>
              <div className="institution">Triyog High School</div>
              <div className="date">2011 - 2022</div>
              <p>Built a strong academic foundation while actively participating in technology and robotics clubs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-grid">
            <div>
              <h3>Email</h3>
              <p>ghanashyamshrestha9@gmail.com</p>
              <h3>Phone</h3>
              <p>9866658279</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioOsan;
