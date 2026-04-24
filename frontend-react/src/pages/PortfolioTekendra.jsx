import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioTekendra = () => {
  return (
    <>

    

    <div className="section">
        <h2>About Me</h2>
       <img src="images/tekendra.jpg" alt="Tekendra Photo" className="about-img" />

        <p>
            I am a passionate student at Islington College with a strong interest in cybersecurity, ethical hacking,
            and network administration. I have hands-on experience with tools such as Cisco Packet Tracer, Kali Linux,
            and VirtualBox. I'm eager to contribute to real-world environments and team-based security projects.
        </p>
    </div>

    <div className="section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
            <div className="card">
                <h3>Cybersecurity Tools</h3>
                <ul>
                    <li>Cisco Packet Tracer</li>
                    <li>Kali Linux</li>
                    <li>Firewalls & VPNs</li>
                </ul>
            </div>
            <div className="card">
                <h3>Programming</h3>
                <ul>
                    <li>Java</li>
                    <li>HTML, CSS, JavaScript</li>
                </ul>
            </div>
            <div className="card">
                <h3>Soft Skills</h3>
                <ul>
                    <li>Volunteering</li>
                    <li>Communication</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="section">
        <h2>Education</h2>
        <div className="education-grid">
            <div className="card">
                <h3>Islington College</h3>
                <p>Bachelor’s in Computer Networking and IT Security</p>
                <p>Dec 2024  Present</p>
            </div>
            <div className="card">
                <h3>Bageshwori Academy</h3>
                <p> completed higher level of education </p>
            </div>
        </div>
    </div>

    <div className="section">
        <h2>Certifications & Achievements</h2>
        <div className="certs-grid">
            <div className="card">
                <h3>Ongoing Certifications</h3>
                <p>Java Programming, Data Structures & Algorithms (Apna College)</p>
            </div>
            <div className="card">
                <h3>Projects & Practice</h3>
                <p>Completing the  300+ Java and DSA problems with the Apna college / on going , focused on interview preparation and real-world problem-solving.</p>
            </div>
            <div className="card">
                <h3>Cyber Tools</h3>
                <p>Beginner knowledge with OSINT tools, Cisco Packet Tracer, and Kali Linux.</p>
            </div>
        </div>
    </div>

    

    </>
  );
};

export default PortfolioTekendra;
