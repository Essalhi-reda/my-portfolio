import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('oVouVfhr8k0_RfcIT'); // Replace with your EmailJS public key
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send('service_1zsxczg', 'template_cwqkimt', {
        to_email: 'redaessalhi123@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'LinkedIn', icon: 'in', url: '#' },
    { name: 'GitHub', icon: '⚙', url: '#' },
    { name: 'Dribbble', icon: '◉', url: '#' },
  ];

  return (
    <motion.section
      id="contact"
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="contact-container">
        <motion.div className="contact-content" variants={itemVariants}>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
          </p>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div className="form-group full-width" variants={itemVariants}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows={5}
              />
            </motion.div>

            {submitted && (
              <motion.div
                className="success-message"
                variants={itemVariants}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="btn btn-primary btn-large"
              variants={itemVariants}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>

          <motion.div className="contact-methods" variants={containerVariants}>
            <motion.div className="contact-item" variants={itemVariants}>
              <div className="contact-icon">✉</div>
              <div>
                <h4>Email</h4>
                <p>redaessalhi123@gmail.com</p>
              </div>
            </motion.div>

            <motion.div className="contact-item" variants={itemVariants}>
              <div className="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Namur, Belgium</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="social-links" variants={containerVariants}>
          <h3>Follow Me</h3>
          <div className="social-grid">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="social-link"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{link.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
