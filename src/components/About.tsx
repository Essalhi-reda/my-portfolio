import { motion } from 'framer-motion';
import '../styles/About.css';

export const About = () => {
  const skills = ['UI/UX Design', 'React', 'TypeScript', 'Framer Motion', 'Figma', 'CSS3'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="about"
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="about-container">
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm a 20-year-old student at the University of Namur, passionate about web development
              and digital design. I'm learning to create beautiful digital products that combine
              creativity with technical expertise to build responsive, intuitive interfaces.
            </p>
            <p>
              Currently focused on mastering modern web technologies including React, TypeScript, and
              Framer Motion. I'm always excited to learn new technologies and push the boundaries of
              what's possible on the web. Let's build something amazing together!
            </p>
          </motion.div>

          <motion.div className="skills" variants={containerVariants}>
            <h3>Skills & Tools</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div key={index} className="skill-card" variants={itemVariants}>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
