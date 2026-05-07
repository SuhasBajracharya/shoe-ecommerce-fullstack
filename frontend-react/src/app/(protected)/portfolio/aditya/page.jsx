'use client';

import Link from 'next/link';

const PortfolioAditya = () => {
  return (
    <>

      {/*  Header  */}



      {/*  Navigation  */}
      <nav>
        <div className="container">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/*  About Section  */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>Hi, I'm Aaditya Kumar Sah, a passionate Cybersecurity student dedicated to learning and mastering the art of protecting digital assets and systems. I'm deeply interested in understanding the latest security threats, vulnerabilities, and defense mechanisms to help build safer online environments.

With a strong foundation in network security, ethical hacking, and information assurance, I am continuously honing my skills through hands-on projects and real-world simulations. I'm eager to contribute to the cybersecurity community and stay updated on emerging technologies and best practices.

When I'm not studying cybersecurity, I enjoy exploring new tech trends and sharpening my problem-solving abilities.

</p>

          </div>
        </div>
      </section>

      {/*  Skills Section  */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon">💻</div>
              <h3>Network Security</h3>
              <p>Understanding of firewalls, VPNs, and secure protocols</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">⚙️</div>
              <h3>Ethical Hacking & Penetration Testing</h3>
              <p>Familiar with tools like Nmap, Metasploit, and Wireshark</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🎨</div>
              <h3>Operating Systems</h3>
              <p>Experience with Windows, Linux, and Unix environments</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🛠️</div>
              <h3>Programming & Scripting</h3>
              <p>Python, Bash scripting for automation and security tasks</p>
            </div>
          </div>
        </div>
      </section>

      {/*  Projects Section  */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-img">🌐</div>
              <div className="project-content">
                <h3 className="project-title">Network Vulnerability Assessment and Penetration Testing</h3>
                <p className="project-desc">In this project, I conducted a comprehensive vulnerability assessment and penetration test on a simulated network environment. Using tools like Nmap, Nessus, and Metasploit, I identified potential security weaknesses including open ports, outdated software, and misconfigurations. I then performed controlled exploitation to demonstrate the risks and recommended effective mitigation strategies to enhance network security.

This hands-on project helped me deepen my understanding of real-world attack vectors and reinforced the importance of proactive security measures in protecting organizational assets.</p>
                <div className="project-tech">
                  <span className="tech-tag">Metasploit</span>
                  <span className="tech-tag">Wireshark</span>
                  <span className="tech-tag">Nmap</span>

                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img">📱</div>
              <div className="project-content">
                <h3 className="project-title">Incident Response Simulation</h3>
                <p className="project-desc">Led an incident response exercise simulating a ransomware attack on a corporate network. Coordinated containment, eradication, and recovery efforts, while preserving forensic evidence. Developed a detailed incident report and post-incident recommendations to improve the organization's preparedness and response capabilities.</p>
                <div className="project-tech">
                  <span className="tech-tag">OWASP ZAP</span>
                  <span className="tech-tag">SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioAditya;
