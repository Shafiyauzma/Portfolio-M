import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/profile-new.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="role-badge">Technical Trainer | Full Stack Developer</div>
            <h1 className="hero-title main-statement">
              Building High-Performance <br />
              <span className="gradient-text">Full-Stack</span> Applications.
            </h1>
            
            <p className="hero-description top-intro">
              Hi, I'm <span className="highlight">Mohan Patro</span>. I build robust web applications across the full stack 
              and serve as a <span className="accent">Technical Trainer</span> mentoring students in {" "}
              <span className="accent">React.js, Node.js, Python</span> & <span className="accent">Django</span>.
            </p>

            <div className="hero-cta">
              <a href="#experience" className="btn primary">View Work</a>
              <a href="https://linkedin.com/in/mohanpatro" target="_blank" rel="noopener noreferrer" className="btn secondary">LinkedIn Profile</a>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com/in/mohanpatro" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/MohanPatro" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={20} />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mohanpatro982@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-image-container">
            <img src={profileImg} alt="Mohan Patro" className="hero-image" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
