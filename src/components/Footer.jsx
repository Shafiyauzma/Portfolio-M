import './Footer.css';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Column 1 */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">Mohan Patro<span className="accent">.</span></h2>
            <p className="footer-bio">
              A Full-Stack Developer dedicated to building secure, scalable, and dynamic digital experiences. 
              Ready to contribute fresh ideas to innovative teams.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/MohanPatro" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/mohanpatro" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col links-col">
            <h3 className="footer-heading">EXPLORE</h3>
            <ul className="footer-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills & Tools</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col contact-col">
            <h3 className="footer-heading">GET IN TOUCH</h3>
            <ul className="footer-contact-list">
              <li>
                <Mail size={16} className="contact-icon" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohanpatro982@gmail.com" target="_blank" rel="noopener noreferrer">mohanpatro982@gmail.com</a>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <a href="tel:+918466049603">+91 8466049603</a>
              </li>
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Mohan Patro. All rights reserved.
          </p>
          <button className="back-to-top" onClick={scrollToTop}>
            BACK TO TOP <ArrowUp size={16} className="arrow-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
