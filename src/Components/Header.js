// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaReact } from 'react-icons/fa'; // Example icon for branding
import styles from './Header.module.css'; // CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left-Aligned Section */}
      <div className={styles.leftSection}>
        <NavLink 
          to="/" 
          className={styles.menuItem}
          title="Home"
          aria-label="Home"
        >
          <span className={styles.linkText}>SIGUREY REYNIS</span>
        </NavLink>
      </div>
       {/* Right-Aligned Section */}
       <div className={styles.rightSection}>
        <NavLink 
          to="/work" 
          className={styles.menuItem}
          title="Work"
          aria-label="Work"
        >
          <span className={styles.categoryText}>Work</span>
        </NavLink>
            
        <NavLink 
          to="/Textile" 
          className={styles.menuItem}
          title="textile"
          aria-label="Textile"
        >
          <span className={styles.categoryText}>Textile</span>
        </NavLink>                  
        <NavLink 
          to="/research" 
          className={styles.menuItem}
          title="Research"
          aria-label="Research"
        >
          <span className={styles.categoryText}>Research</span>
        </NavLink>
      <div className={styles.rightSection}>
        <NavLink 
          to="/about-me" 
          className={styles.menuItem}
          title="About Me"
          aria-label="About Me"
        >
          <span className={styles.categoryText}>About me</span>
        </NavLink>
      </div>
      </div>
      
    </header>
  );
};

export default Header;
