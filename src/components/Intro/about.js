// about.js
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from 'react';
import { handleScroll } from './opacity';
import { Hotel } from '../../../public/img/hotel.svg';



function About() {
   
    const [opacity, setOpacity] = useState(1);
  
    useEffect(() => {
      // Define max and min scroll positions and handle opacity
      const minScrollPosition = window.innerHeight * .55;
      const maxScrollPosition = window.innerHeight * 1.2;

      window.addEventListener('scroll', () => handleScroll(setOpacity, minScrollPosition, maxScrollPosition));
  
      // Remove event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', () => handleScroll(setOpacity));
      };
    }, []);
  
    return (
      <section className={styles.about} style={{ opacity: .6 }}>
        <div className={styles.about_container} style={{opacity:opacity}} >
          <div id="1">
            <div className={styles.about_img} />
            {/*<Hotel />*/}
            <h4 className={styles.about_title}>Dynamic Leader</h4>
            <p classname={styles.about_content}>
              This is where the content goes for the bullet. This is where the content goes for the bullet. This is where the content goes for the bullet. 
            </p>
          </div>
          <div id="2">
          <div className={styles.about_img}>img</div>
          <h4 className={styles.about_title}>Bridge builder</h4>
          <p classname={styles.about_content}>
              This is where the content goes for the bullet. This is where the content goes for the bullet. This is where the content goes for the bullet. 
            </p>
          </div>
          <div id="3">
          <div className={styles.about_img}>img</div>
            <h4 className={styles.about_title}>Experience Engineer</h4>
            <p classname={styles.about_content}>
              This is where the content goes for the bullet. This is where the content goes for the bullet. This is where the content goes for the bullet. 
            </p>
          </div>
          <p>
              I spent the last <span>seven years at Accenture leading strategy, design, and product management</span> for high tech and pharma companies. I specialize in guiding teams through the murky, early stages of new product development. I’m a <span>hands-on, purpose-driven leader</span> who leans in to build a culture of shared responsibility and trust with everyone I work with.
          </p>
          <br />

        </div>
      </section>
    );
}

export default About;