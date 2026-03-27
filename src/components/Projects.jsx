import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Database, Layers, Layout, Globe, Cpu, ChevronRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const allProjects = [
    {
      title: "Dental Lab Management System",
      category: "Full Stack Development",
      description: "A comprehensive full-stack web application designed to manage dental lab operations. It automates invoicing and billing, features dynamic front-end views using EJS and jQuery, and integrates role-based authentication for secure data access.",
      tech: ["Node.js", "Express.js", "MySQL", "Sequelize", "EJS", "AWS EC2"],
      bullets: [
        "Invoicing and billing automation",
        "Optimized MySQL schemas for efficiency",
        "Role-based authentication & sensitive data security",
        "Deployed on AWS EC2 for scalability"
      ],
      icon: <Database size={24} />,
      link: "#"
    },
    {
      title: "HR Management Software",
      category: "Internship Project",
      description: "Collaborative development of an HR system for managing employee data, attendance, and payroll. Implemented secure RESTful APIs and optimized database schemas for efficient enterprise-level storage and retrieval.",
      tech: ["Node.js", "Express.js", "MySQL", "Sequelize", "JWT", "Docker"],
      bullets: [
        "RESTful API integration for attendance & payroll",
        "Role-based access control (RBAC)",
        "Secure auth via JWT and bcrypt",
        "Dockerized for environment consistency"
      ],
      icon: <Cpu size={24} />,
      link: "#"
    },
    {
      title: "Conqt Vendor Management (VMS)",
      category: "Internship Project",
      description: "Contributed to a high-performance VMS for vendor onboarding, tracking, and evaluation. Optimized complex MySQL queries to ensure smooth data handling and improved system responsiveness.",
      tech: ["Node.js", "Express.js", "MySQL", "Sequelize", "Docker"],
      bullets: [
        "Vendor onboarding and performance tracking",
        "Secure CRUD operations for evaluations",
        "MySQL query optimization for speed",
        "Contract management lifecycle integration"
      ],
      icon: <Globe size={24} />,
      link: "#"
    },
    {
      title: "SSTORES - Student Ecosystem",
      category: "E-Commerce",
      description: "Full-stack student-centric store management system. Features seamless Razorpay payment gateway integration, real-time inventory management, and granular user role permissions.",
      tech: ["React.js", "Node.js", "MongoDB", "Razorpay"],
      bullets: [
        "Razorpay integration for online payments",
        "Real-time inventory tracking",
        "Granular user role permissions",
        "Responsive React frontend"
      ],
      icon: <Layers size={24} />,
      link: "#"
    },
    {
      title: "Financial Tracking & AI Study",
      category: "Research Project",
      description: "In-depth research on AI-driven financial tracking and user insights. Explored automation techniques for personalized expense tracking and designed a high-fidelity interactive prototype in Figma.",
      tech: ["AI Automation", "Fintech", "Figma Design", "User Insights"],
      bullets: [
        "Market research on personal finance challenges",
        "AI predictive recommendations modeling",
        "Interactive Figma prototype design",
        "Feasibility analysis of fintech features"
      ],
      icon: <Layout size={24} />,
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container explorer-container">
        <motion.div 
          className="section-header-ref"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="header-badge">PROJECTS</span>
          <h2 className="section-title">
            Technical <span className="accent">Projects</span>
          </h2>
        </motion.div>

        <div className="explorer-layout">
          {/* Sidebar Nav */}
          <div className="project-nav">
            {allProjects.map((proj, index) => (
              <motion.button
                key={index}
                className={`nav-item ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="nav-icon-box">{proj.icon}</div>
                <div className="nav-text">
                  <span className="nav-cat">{proj.category}</span>
                  <span className="nav-title">{proj.title}</span>
                </div>
                <ChevronRight size={18} className="nav-arrow" />
              </motion.button>
            ))}
          </div>

          {/* Details View */}
          <div className="project-details">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
                className="details-content glass-card-cute"
              >
                <div className="details-main-content">
                  <div className="details-left">
                    <div className="details-header">
                      <span className="details-cat">{allProjects[activeProject].category}</span>
                      <h3 className="details-title">{allProjects[activeProject].title}</h3>
                    </div>
                    <p className="details-desc">{allProjects[activeProject].description}</p>
                  </div>

                  <div className="details-right">
                    <div className="tech-label">KEY HIGHLIGHTS</div>
                    <div className="details-bullets">
                      {allProjects[activeProject].bullets.map((bullet, i) => (
                        <div key={i} className="bullet-item">
                          <div className="bullet-dot"></div>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="details-footer">
                  <div className="tech-section">
                    <div className="tech-label">TECHNOLOGIES USED</div>
                    <div className="tech-pills">
                      {allProjects[activeProject].tech.map(t => (
                        <span key={t} className="tech-pill-cute">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
