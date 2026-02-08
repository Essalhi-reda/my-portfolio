import { motion } from 'framer-motion';
import '../styles/Hero.css';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <motion.section
      id="home"
      className="hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="hero-content">
        <motion.h1 className="hero-title" variants={itemVariants}>
          Hey, I'm <span className="highlight">Reda Esaalhi</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          Crafting beautiful digital experiences with modern design principles
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <button className="btn btn-primary">View My Work</button>
          <button className="btn btn-secondary">Contact Me</button>
        </motion.div>
      </div>

      <motion.div className="hero-visual" variants={itemVariants} animate={floatingVariants}>
        <div className="gradient-blob blob-1" />
        <div className="gradient-blob blob-2" />
        <div className="gradient-blob blob-3" />
      </motion.div>
    </motion.section>
  );
};
