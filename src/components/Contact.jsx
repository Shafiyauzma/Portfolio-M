import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "mohanpatro982@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=mohanpatro982@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91-8466049603",
      link: "tel:+918466049603"
    },
    {
      isSocial: true,
      label: "Connect",
      links: [
        { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/mohanpatro" },
        { icon: <Github size={24} />, url: "https://github.com/MohanPatro" }
      ]
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Hyderabad, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container-alt">
        <motion.div 
          className="section-header-ref"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="header-badge">Get In Touch</span>
          <h2 className="header-title-ref">Let's Connect.</h2>
          <p className="header-desc-ref">
            I'm always open to new opportunities, collaborations, or just a friendly chat. 
            Feel free to reach out through any of the platforms below!
          </p>
        </motion.div>
        
        <div className="contact-hub-grid">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              className="contact-tile-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {method.isSocial ? (
                <div className="contact-tile-glass">
                  <div className="tile-icon-box socials-icon-box">
                    {method.links.map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`social-link-item ${social.url.includes('linkedin') ? 'linkedin-link' : 'github-link'}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <div className="tile-info">
                    <span className="tile-label">{method.label}</span>
                    <span className="tile-value">LinkedIn & GitHub</span>
                  </div>
                </div>
              ) : method.link ? (
                <a 
                  href={method.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-tile-glass"
                >
                  <div className="tile-icon-box">{method.icon}</div>
                  <div className="tile-info">
                    <span className="tile-label">{method.label}</span>
                    <span className="tile-value">{method.value}</span>
                  </div>
                </a>
              ) : (
                <div className="contact-tile-glass">
                  <div className="tile-icon-box">{method.icon}</div>
                  <div className="tile-info">
                    <span className="tile-label">{method.label}</span>
                    <span className="tile-value">{method.value}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
