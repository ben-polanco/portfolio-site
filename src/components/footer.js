//footer.js
import React from 'react';
import About from './about_me';
import Contact from './contact';
import styles from '../styles/Home.module.css';

function Footer() {
  return (
    <section className={styles.footer}>
      
      <About />
      <Contact />
    </section>
  );
}

export default Footer;