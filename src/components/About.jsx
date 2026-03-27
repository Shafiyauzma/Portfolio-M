import { motion } from 'framer-motion';
import techStackImg from '../assets/tech-stack.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div 
          className="section-header-ref"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="header-badge">About</span>
          <h2 className="section-title">
            About <span className="accent">Me</span>
          </h2>
        </motion.div>
        
        <div className="about-grid">
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-border"></div>
            <div className="about-image-wrapper">
              <img src={techStackImg} alt="Technologies" className="about-tech-img" />
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="lead-text">
              I am a <span className="accent">Full Stack Web Developer</span> with a strong academic background 
              and hands-on experience in building high-performance web applications.
            </p>
            <p>
              Proficient in building scalable and efficient web applications using 
              <span className="accent">Node.js, Express.js, MySQL, React.js, Python, and Django</span>. 
              I am skilled in designing optimized databases, developing RESTful APIs, and 
              deploying containerized applications with Docker.
            </p>
            <p>
              Passionate about writing clean, maintainable code and collaborating with 
              cross-functional teams to deliver robust, user-centric solutions.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">9.4</span>
                <span className="stat-label">B.Tech CGPA</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Major Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Verified Certs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
