//footer.js
import React from 'react';
import Info from './info';
import styles from '../../styles/Home.module.css';
import BottomBar from './bottom-bar';

function Footer() {
  return (
    <section className={styles.footer}>
      
      <Info />
      <BottomBar />
    </section>
  );
}

export default Footer;