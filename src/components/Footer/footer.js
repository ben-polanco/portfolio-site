//footer.js
import React from 'react';
import Info from './info';
import Contact from './contact';
import styles from '../../styles/Home.module.css';

function Footer() {
  return (
    <section className={styles.footer}>
      
      <Info />
      <Contact />
    </section>
  );
}

export default Footer;