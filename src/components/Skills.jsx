import { motion } from 'framer-motion';
import { Terminal, Code2, Settings, Cpu } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={20} />,
      skills: ["Java", "C", "SQL (MySQL)", "MongoDB", "JavaScript", "Python", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Cpu size={20} />,
      skills: ["React.js", "Node.js", "Django", "Express.js", "Sequelize", "EJS"]
    },
    {
      title: "Tools & DevOps",
      icon: <Settings size={20} />,
      skills: ["Git", "VS Code", "Postman", "AWS EC2", "Docker", "Docker Compose", "Kubernetes"]
    },
    {
      title: "Core Expertise",
      icon: <Terminal size={20} />,
      skills: ["Database Design", "API Development", "Backend Architectures", "Full Stack Dev", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container skills-container">
        <motion.div 
          className="section-header-ref"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="header-badge">Skills</span>
          <h2 className="section-title">
            Technical <span className="accent">Expertise</span>
          </h2>
          <p className="header-desc-ref">
            A comprehensive overview of my core technical proficiencies, spanning languages, modern frameworks, and deployment architectures.
          </p>
        </motion.div>
        
        <div className="skills-bento">
          {skillCategories.map((cat, index) => (
            <motion.div 
              key={index}
              className="pretty-card skill-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-card-inner">
                <div className="skill-card-header">
                  <div className="category-icon-orb">{cat.icon}</div>
                  <h3 className="category-name-small">{cat.title}</h3>
                </div>
                <div className="skill-pills-container">
                  {cat.skills.map(skill => (
                    <span key={skill} className="mini-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
