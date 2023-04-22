// about.js
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from 'react';
import { handleScroll } from './opacity';
import Architect from '../../../public/img/ExpArch.svg';
import Leader from '../../../public/img/DynLead.svg';
import Bridge from '../../../public/img/BridgeBuild.svg';

function About() {
   
    const [opacity, setOpacity] = useState(0);
  
    useEffect(() => {
      // Define max and min scroll positions and handle opacity
      const minScrollPosition = window.innerHeight * .55;
      const maxScrollPosition = window.innerHeight * 1.05;

      window.addEventListener('scroll', () => handleScroll(setOpacity, minScrollPosition, maxScrollPosition));
  
      // Remove event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', () => handleScroll(setOpacity));
      };
    }, []);
  3
    return (
      <section className={styles.about} >
        <div className={styles.about_container} style={{opacity:opacity}} >
          <div id="1">
            <Leader className={styles.about_img} />
            <h4 className={styles.about_title}>Dynamic Leader</h4>
            <p className={styles.about_content}>
            Hands-on, purpose-driven coach who leans in to build a culture of shared ownership and trust with everyone I work with.  
            </p>
          </div>
          <div id="2">
          <Architect className={styles.about_img} />
          <h4 className={styles.about_title}>Experience Architect</h4>
          <p className={styles.about_content}>
          Strategist, designer, and technical product manager by trade, I specialize in guiding businesses through the murky early stages of new product development.
            </p>
          </div>
          <div id="3">
          <Bridge className={styles.about_img} />
            <h4 className={styles.about_title}>Bridge builder</h4>
            <p className={styles.about_content}>
              This is where the content goes for the bullet. This is where the content goes for the bullet. This is where the content goes for the bullet. 
            </p>
          </div>
          <p>
              I spent the last <span>seven years at Accenture leading strategy, design, and product management teams</span> for high tech and pharma companies. 
          </p>
          <br />

        </div>
      </section>
    );
}

export default About;