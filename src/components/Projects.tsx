import { motion } from 'framer-motion';
import '../styles/Projects.css';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project Title 1',
      description: 'Brief description of the project goes here. Add details about what you built.',
      tags: ['React', 'Design'],
      image: '🎨',
    },
    {
      id: 2,
      title: 'Project Title 2',
      description: 'Brief description of the project goes here. Add details about what you built.',
      tags: ['TypeScript', 'Animation'],
      image: '⚡',
    },
    {
      id: 3,
      title: 'Project Title 3',
      description: 'Brief description of the project goes here. Add details about what you built.',
      tags: ['Framer Motion', 'Web'],
      image: '✨',
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverVariants = {
    initial: { y: 0 },
    hover: { y: -10, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="projects"
      className="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="projects-container">
        <motion.h2 className="section-title" variants={itemVariants}>
          Featured Projects
        </motion.h2>

        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              initial="initial"
              whileHover="hover"
            >
              <motion.div className="project-image" variants={hoverVariants}>
                <span className="emoji">{project.image}</span>
              </motion.div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="project-link">View Project →</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
