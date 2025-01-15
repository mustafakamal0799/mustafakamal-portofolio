import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      style={styles.section}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 style={styles.title}>Contact Me</h2>
      <p style={styles.deskripsi}>If you'd like to get in touch, feel free to reach out via email and whatsapp:</p>
      <p style={styles.deskripsi}><strong>Email:</strong> mustafakamal.130799@gmail.com</p>
      <p style={styles.deskripsi}><strong>WhatsApp:</strong> +6282154923388</p>
    </motion.section>
  );
};

const styles = {
  section: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#097351',
  },
  title: {
    color: '#F59C40'
  },
  deskripsi: {
    color: '#F59C40'
  }
};

export default Contact;
