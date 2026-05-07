'use client';

import Link from 'next/link';

const PortfolioIndex = () => {
  return (
    <>

      {/*  Header  */}


      {/*  Hero Section  */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Suhas Bajracharya</h1>
            <p className="subtitle">Cybersecurity Enthusiast & Student</p>
            <p className="description">
              Passionate about cybersecurity with hands-on experience in penetration testing, vulnerability assessment, and cyber security research. Currently pursuing higher education while building expertise in information security.
            </p>
            <div className="cta-buttons">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/*  About Section  */}
      <section id="about" className="fade-in">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img src="/images/suhas.jpeg" alt="Suhas Bajracharya" className="profile-img" />
            </div>
            <div className="about-text">
              <h3>Cybersecurity Research Student</h3>
              <p>
                I'm a dedicated cybersecurity enthusiast from Kathmandu, Nepal, currently pursuing my education while actively engaging in cybersecurity research and challenges. With a strong foundation in science and mathematics, I've developed a keen interest in information security, vulnerability assessment, and penetration testing.
              </p>
              <p>
                My journey in cybersecurity began after completing high school, and I've since completed numerous challenges and certifications, including Advent of Cyber 2024 and various CTF competitions. I believe in continuous learning and staying updated with the latest security trends and threats.
              </p>
              <p>
                Through various projects and challenges, I've developed strong problem-solving abilities and attention to detail, which are crucial skills in the cybersecurity field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  Skills Section  */}
      <section id="skills" className="fade-in">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Cybersecurity Tools</h3>
              <div className="skill-item">
                <span>Vulnerability Assessment & Penetration Testing (VAPT)</span>
                <span>Beginner</span>
              </div>
              <div className="skill-item">
                <span>Burp Suite</span>
                <span>Beginner</span>
              </div>
              <div className="skill-item">
                <span>Kali Linux</span>
                <span>Intermediate</span>
              </div>
              <div className="skill-item">
                <span>Wireshark</span>
                <span>Beginner</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Programming & Technical</h3>
              <div className="skill-item">
                <span>Python</span>
                <span>Intermediate</span>
              </div>
              <div className="skill-item">
                <span>Computer Science Fundamentals</span>
                <span>Advanced</span>
              </div>
              <div className="skill-item">
                <span>Internet of Things (IoT)</span>
                <span>Basic</span>
              </div>
              <div className="skill-item">
                <span>Microsoft Office Suite</span>
                <span>Advanced</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Languages & Communication</h3>
              <div className="skill-item">
                <span>English (IELTS 7.5)</span>
                <span>Proficient</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioIndex;
