// about.js
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from 'react';
import { handleScroll } from './opacity';

function About() {
   
    const [opacity, setOpacity] = useState(1);
  
    useEffect(() => {
      // Define max and min scroll positions and handle opacity
      const minScrollPosition = window.innerHeight * .40;
      const maxScrollPosition = window.innerHeight * 0.80;

      window.addEventListener('scroll', () => handleScroll(setOpacity, minScrollPosition, maxScrollPosition));
  
      // Remove event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', () => handleScroll(setOpacity));
      };
    }, []);
  
    return (
      <section className={styles.about} style={{ opacity: .6 }}>
        <div className={styles.about_container}>
          <div id="1">
            <div className={styles.about_img}>img</div>
            <h4 className={styles.about_title}>skill tagline 1</h4>
          </div>
          <div id="2">
          <div className={styles.about_img}>img</div>
          <h4 className={styles.about_title}>skill tagline 2</h4>
          </div>
          <div id="3">
          <div className={styles.about_img}>img</div>
            <h4 className={styles.about_title}>skill tagline 3</h4>
          </div>

        </div>
      </section>
    );
}

export default About;