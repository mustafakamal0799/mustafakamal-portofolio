import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.jpg';

const About = () => {
  return (
    <motion.section 
      id="about" 
      style={styles.section}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 style={styles.title}>About Me</h2>
      <div style={styles.profileContainer}>
        <img 
          src={profileImage} 
          alt="Mustafa Kamal" 
          style={styles.profileImage} 
        />
        <p style={styles.description}>
        Halo! Saya Mustafa Kamal, seorang pengembang perangkat lunak yang bersemangat dari Indonesia. Saya suka membangun aplikasi web dan menjelajahi teknologi baru. Saya selalu bersemangat untuk belajar dan menciptakan solusi inovatif.
        </p>
      </div>
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
    color: '#F59C40',
  },

  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#097351',    
  },
  profileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  description: {
    maxWidth: '600px',
    fontSize: '18px',
    lineHeight: '1.5',
    marginTop: '15px',  
    color: '#F59C40',  
  },
  
};


export default About;
