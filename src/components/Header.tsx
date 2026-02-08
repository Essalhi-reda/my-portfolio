import { motion } from 'framer-motion';
import '../styles/Header.css';

export const Header = () => {
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="header"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="header-container">
        <motion.div className="logo" variants={itemVariants}>
          <span className="logo-text">Portfolio</span>
        </motion.div>

        <motion.nav className="nav" variants={containerVariants}>
          {navItems.map((item) => (
            <motion.a key={item} href={`#${item.toLowerCase()}`} variants={itemVariants}>
              {item}
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  );
};
