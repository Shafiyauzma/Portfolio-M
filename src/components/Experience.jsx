import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer (Full Time)",
      company: "Adifice Technologies",
      location: "Hyderabad, India",
      period: "Dec 2025 – Present",
      bullets: [
        "Developing robust full-stack applications using Python, Django, and specialized RESTful APIs.",
        "Crafting interactive front-end experiences with React.js, HTML5, and modern CSS3 architectures."
      ],
      tech: ["Python", "Django", "React.js", "REST API", "HTML/CSS"],
      icon: <Briefcase size={20} />
    },
    {
      role: "Full Stack Developer",
      company: "Dot Eventures",
      location: "Hyderabad, India",
      period: "Aug 2025 – Nov 2025",
      bullets: [
        "Architected 'Classes' project foundations, managing both front-end and back-end development cycles.",
        "Delivered high-performance React.js components and integrated secure Node.js service layers."
      ],
      tech: ["React.js", "Node.js", "MySQL", "Service Layers"],
      icon: <Briefcase size={20} />
    },
    {
      role: "Technical Trainer",
      company: "Mallareddy University",
      location: "Hyderabad, India",
      period: "June 2025 – July 2025",
      bullets: [
        "Empowered 500+ B.Tech students with intensive full-stack training in React, Node, and Database Management.",
        "Facilitated hands-on development workshops, bridging the gap between theory and industry-scale applications.",
        "Consistently rated for high-impact instruction and technical mentorship excellence."
      ],
      tech: ["Full Stack", "Mentorship", "Training"],
      icon: <Briefcase size={20} />
    },
    {
      role: "Backend Engineer Intern",
      company: "TechCurve AI Innovations",
      location: "Remote",
      period: "Oct 2023 – May 2024",
      bullets: [
        "Engineered robust RESTful APIs for the Vendor Management System using Node.js and Express.",
        "Optimized database performance via Sequelize ORM, ensuring high data integrity and retrieval speed.",
        "Pioneered Docker containerization workflows to streamline deployment and environment consistency."
      ],
      tech: ["Node.js", "Sequelize", "Docker", "Express"],
      icon: <Briefcase size={20} />
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div 
          className="section-header-ref"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="header-badge">Career Journey</span>
          <h2 className="section-title">
            Professional <span className="accent">Experience</span>
          </h2>
          <p className="header-desc-ref">
            A timeline of my professional roles, highlighting key responsibilities, achievements, and technical contributions.
          </p>
        </motion.div>

        <div className="exp-timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="exp-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="exp-dot-container">
                <div className="exp-dot">
                  {exp.icon}
                </div>
              </div>
              
              <div className="exp-card pretty-card">
                <div className="exp-card-header">
                  <div className="role-box">
                    <h3 className="role-title">{exp.role}</h3>
                    <div className="company-info">
                      <span className="company-name">{exp.company}</span>
                      <span className="location"><MapPin size={14} /> {exp.location}</span>
                    </div>
                  </div>
                  <div className="date-badge">
                    <Calendar size={14} /> <span>{exp.period}</span>
                  </div>
                </div>

                <div className="exp-card-body">
                  <ul className="exp-points">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>
                        <ChevronRight size={16} className="bullet-icon" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="exp-tech-stack-right">
                    <span className="tech-label-mini">Technologies</span>
                    <div className="exp-tech-stack">
                      {exp.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
