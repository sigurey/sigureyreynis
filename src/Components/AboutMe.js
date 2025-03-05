import React from 'react';
import styles from './AboutMe.module.css'; // Ensure your CSS module is correctly linked

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.content}>
        <img src={`${process.env.PUBLIC_URL}/images/index1.jpeg`} alt="me" className={styles.image}/>
        <p className={styles.linkText}>
        A passionate designer focused on sustainability, I create unique, textured pieces using natural materials and dyes. My work blends tradition with innovation to craft one-of-a-kind designs that tell a story.
        </p>
        <p className={styles.linkText}>
        Lets connect!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
