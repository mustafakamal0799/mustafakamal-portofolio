import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Mustafa Kamal</h1>
      <nav>
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          style={styles.link}
        >
          About
        </Link>
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          style={styles.link}
        >
          Projects
        </Link>
        <Link 
          to="experience" 
          smooth={true} 
          duration={500} 
          style={styles.link}
        >
          Experience
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          style={styles.link}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#097351',
    color: '#F59C40',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#F59C40',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Header;
