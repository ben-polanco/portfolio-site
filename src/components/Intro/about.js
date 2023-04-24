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
          <h6>Spent the past seven years at Accenture leading product strategy, design,<br /> and product management teams for high tech and pharma companies. 
          </h6>
          <div id="1">
            <Leader className={styles.about_img} />
            <h4 className={styles.about_title}>Dynamic Leader</h4>
            <p className={styles.about_content}>
            Hands-on, purpose-driven coach with the leadership grit to lift new teams, strategies, and products from the ground up
            </p>
          </div>
          <div id={styles.architect}>
          <Architect className={styles.about_img} />
          <h4 className={styles.about_title} >Experience Architect</h4>
          <p className={styles.about_content}>
          Strategist, designer, and technical product manager by trade, I specialize in guiding businesses through the murky early stages of new product development
            </p>
          </div>
          <div id="3">
          <Bridge className={styles.about_img} />
            <h4 className={styles.about_title}>Bridge builder</h4>
            <p className={styles.about_content}>
            Authentic relator who leans in to build a culture of shared ownership and trust with everyone I work with
            </p>
          </div>
          
          <br />

        </div>
      </section>
    );
}

export default About;