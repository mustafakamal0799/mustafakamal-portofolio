import React from 'react';
import { motion } from 'framer-motion';
import project1Image from '../assets/images/Project1.png'; // Import gambar screenshot proyek 1
import project2Image from '../assets/images/project2.png'; // Import gambar screenshot proyek 2

const projects = [
  {
    name: 'Print Shop Sales',
    image: project1Image,
    description: 'Web-based system for recording sales and financial reports',
    features: [
      'Stock Management',
      'Income Statement',
    ],
    technologies: ['Laravel', 'Boostrap'],
  },
  {
    name: 'Portofolio',
    image: project2Image,
    description: 'React.js based personal portfolio.',
    features: [
      'Simple',
      'Motion',
    ],
    technologies: ['React.js'],
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      style={styles.section}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 style={styles.title}>My Projects</h2>
      <div style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <img
              src={project.image}
              alt={project.name}
              style={styles.projectImage}
            />
            <h3>{project.name}</h3>
            <p style={styles.description}>{project.description}</p>
            <h4>Features</h4>
            <ul style={styles.featuresList}>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h4>Technologies</h4>
            <ul style={styles.technologiesList}>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
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
  projectsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    padding: '20px',
    textAlign: 'center',
    color: '#097351',
  },
  projectImage: {
    width: '100%',
    height: '200px',
    borderRadius: '8px',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  featuresList: {
    listStyleType: 'disc',
    textAlign: 'left',
    marginLeft: '20px',
    color: '#097351',
  },
  technologiesList: {
    listStyleType: 'square',
    textAlign: 'left',
    marginLeft: '20px',
  },
  description: {
    color: '#097351',
  }

};

export default Projects;
