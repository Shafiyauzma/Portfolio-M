import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Project Completion Certificate",
      issuer: "BD Labs",
      description: "Successfully completed full-cycle project development and software delivery, meeting all technical requirements.",
      link: "https://drive.google.com/file/d/1I5cZmpRZndPbDAvRV66OqDneaBdBFvan/view",
      icon: <Award size={28} />
    },
    {
      title: "Internship Certificate",
      issuer: "TechCurve AI Innovations",
      description: "Completed an intensive Backend Engineer internship, focusing on RESTful APIs, database optimization, and scalable backend services.",
      link: "https://drive.google.com/file/d/1-6raQw_1oC0bwtnePkqzD-kNBIu9QmiE/view",
      icon: <Award size={28} />
    }
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <motion.div 
          className="section-header-ref"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="header-badge">Certificates</span>
          <h2 className="section-title">
            Professional <span className="accent">Certifications</span>
          </h2>
          <p className="header-desc-ref">
            A testament to my continuous learning and professional growth, featuring industry-recognized 
            credentials and successful project completions.
          </p>
        </motion.div>
        
        <div className="certs-landscape-row">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="premium-cert-tile-landscape"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="cert-landscape-inner">
                <div className="cert-landscape-left">
                  <div className="cert-icon-frame-small">{cert.icon}</div>
                </div>
                
                <div className="cert-landscape-main">
                  <div className="cert-landscape-top">
                    <span className="cert-issuer-mini">{cert.issuer}</span>
                    <div className="cert-verified-badge">
                      <span className="verify-glow-dot"></span>
                      VERIFIED
                    </div>
                  </div>
                  <h3 className="cert-title-landscape">{cert.title}</h3>
                  <p className="cert-desc-landscape">{cert.description}</p>
                </div>

                <div className="cert-landscape-right">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-action-pill"
                    title="View Credential"
                  >
                    View <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
