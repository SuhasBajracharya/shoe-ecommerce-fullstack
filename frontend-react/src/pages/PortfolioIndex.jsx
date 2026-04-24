import React from 'react';
import { Link } from 'react-router-dom';

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
                    <div className="skill-item">
                        <span>Nepali</span>
                        <span>Native</span>
                    </div>
                    <div className="skill-item">
                        <span>Hindi</span>
                        <span>Fluent</span>
                    </div>
                    <div className="skill-item">
                        <span>Chinese</span>
                        <span>Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Experience Section  */}
    <section id="experience" className="fade-in">
        <div className="container">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="experience-card">
                            <h3>Cyber Security Researcher</h3>
                            <h4>ING Skill Academy</h4>
                            <p className="date">Nov 2024 - Present</p>
                            <p>Currently working as a Cyber Security Researcher, focusing on both red and blue teaming. Gaining hands-on experience with various security tools and methodologies.</p>
                            <ul>
                                <li>Primarily responsible for developing custom tools and simulations for cybersecurity demonstrations and student training sessions.</li>
                                <li>Contributing to vulnerability assessment and penetration testing (VAPT) and security research.</li>
                                <li>Regularly working with Burp Suite, Kali Linux, and various open-source security tools to support educational content and workshops.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Education Section  */}
    <section id="education" className="fade-in">
        <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="education-grid">
                <div className="education-card">
                    <h3>BSc (Hons) Computer Networking & IT Security</h3>
                    <div className="institution">Islington College Kathmandu</div>
                    <div className="date">Currently Enrolled</div>
                    <p>Pursuing a Bachelor's degree in Computer Networking and IT Security, focusing on advanced cybersecurity concepts, network security, and information systems protection.</p>
                </div>
                <div className="education-card">
                    <h3>High School - Science Major</h3>
                    <div className="institution">Xavier Academy</div>
                    <div className="date">Jul 2022 - Jun 2024</div>
                    <p>Completed high school with a major in Science, achieving a GPA of 3.5. Developed strong foundation in Physics, Chemistry, Computer Science, English, and Mathematics.</p>
                </div>
                <div className="education-card">
                    <h3>Secondary Education</h3>
                    <div className="institution">Brihaspati Vidyasadan School</div>
                    <div className="date">Apr 2012 - Aug 2022</div>
                    <p>Completed secondary education with a GPA of 3.35, building fundamental academic skills and developing analytical thinking capabilities.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Certifications Section  */}
    <section id="certifications" className="fade-in">
        <div className="container">
            <h2 className="section-title">Certifications & Achievements</h2>
            <div className="cert-grid">
                <div className="cert-card">
                    <div className="cert-icon">🏆</div>
                    <h3>Advent of Cyber 2024</h3>
                    <p>TryHackMe</p>
                    <p>Completed 24 cybersecurity challenges demonstrating understanding of cyber security fundamentals with consistency, tenacity & continuous learning.</p>
                </div>
                <div className="cert-card">
                    <div className="cert-icon">🛡️</div>
                    <h3>HackFinity Certificate</h3>
                    <p>CTF Challenge Completion</p>
                    <p>Successfully completed CTF challenges, achieving rank 847 with 270 points and 17 completed tasks, showcasing practical cybersecurity skills.</p>
                </div>
                <div className="cert-card">
                    <div className="cert-icon">🌐</div>
                    <h3>IELTS - Band Score 7.5</h3>
                    <p>British Council (2024)</p>
                    <p>Achieved overall band score of 7.5, demonstrating strong proficiency in English across listening, reading, writing, and speaking skills.</p>
                </div>
                <div className="cert-card">
                    <div className="cert-icon">🤝</div>
                    <h3>MahaSangram Volunteer</h3>
                    <p>Debate Network Nepal (2023)</p>
                    <p>Received certificate for volunteering in the 8th Annual MahaSangram organized by Debate Network Nepal in collaboration with Xavier Academy.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Contact Section  */}
    <section id="contact" className="fade-in">
        <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-grid">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <div className="contact-item">
                        <div className="contact-icon">📧</div>
                        <div>
                            <strong>Email</strong><br />
                            suhasb161@gmail.com
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">📱</div>
                        <div>
                            <strong>Phone</strong><br />
                            +977 9841061742
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">📍</div>
                        <div>
                            <strong>Location</strong><br />
                            Lazimpat, Kathmandu, Nepal
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">💼</div>
                        <div>
                            <strong>LinkedIn</strong><br />
                            <a href="https://np.linkedin.com/in/suhas-bajracharya-557203344">linkedin.com/in/suhas-bajracharya</a>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>Send me a message</h3>
                    <form id="contactForm">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    {/*  Footer  */}
    

    

    </>
  );
};

export default PortfolioIndex;
