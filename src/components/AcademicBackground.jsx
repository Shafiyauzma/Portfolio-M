import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';
import './AcademicBackground.css';

const AcademicBackground = () => {
  const education = [
    {
      course: "Bachelor of Technology",
      subtitle: "Computer Science and Engineering",
      institution: "RGUKT Srikakulam",
      score: "9.4 CGPA",
      icon: <GraduationCap className="academic-icon" />
    },
    {
      course: "Pre-University Course",
      subtitle: "M.P.C (Maths, Physics, Chemistry)",
      institution: "RGUKT Srikakulam",
      score: "9.89 GPA",
      icon: <School className="academic-icon" />
    },
    {
      course: "SSC (Class X)",
      subtitle: "General Education",
      institution: "ZPHS Boys High School",
      score: "10.0 GPA",
      icon: <BookOpen className="academic-icon" />
    }
  ];

  return (
    <section id="academic" className="section academic-section">
      <div className="container academic-container">
        <motion.div 
          className="section-header-ref"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="header-badge">Background</span>
          <h2 className="section-title">
            Academic <span className="accent">Journey</span>
          </h2>
          <p className="header-desc-ref">
            My educational foundation and milestones, bridging theoretical knowledge with practical software engineering applications.
          </p>
        </motion.div>

        <div className="academic-grid">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              className="academic-card-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="pretty-card academic-card">
                <div className="card-accent"></div>
                <div className="academic-icon-container">
                  {item.icon}
                </div>
                <h3 className="course-name">{item.course}</h3>
                <p className="course-subtitle">{item.subtitle}</p>
                <div className="divider"></div>
                <p className="school-name">{item.institution}</p>
                <div className="score-badge">
                  <span className="score-text">{item.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicBackground;
