// about.js
import React from "react";
import styles from "../../styles/Home.module.css";
import { useEffect } from 'react';
import { useOpacity } from './opacity';
import Architect from '/public/img/ExpArch.svg';
import Leader from '/public/img/DynLead.svg';
import Bridge from '/public/img/BridgeBuild.svg';

function About() {
   
    const opacitySettings= {
    component:"about", 
    initial: 0, 
    minScroll:.55, 
    maxScroll:1.05,
    executed: false
    };

    const [opacity, handleScroll] = useOpacity(opacitySettings);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Remove event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [handleScroll]);
  
    return (
      <section className={styles.about} >
        <div className={styles.about_container} style={{opacity:opacity}} > 
          <h6>I've spent the past decade leading enterprise strategy<br /> and digital products for high tech & pharma companies 
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
          <h4 className={styles.about_title} >Change Architect</h4>
          <p className={styles.about_content}>
          Enterprise strategist and product manager by trade, I help transformational companies stay grounded and build inertia as they forge a new direction
            </p>
          </div>
          <div id="3">
          <Bridge className={styles.about_img} />
            <h4 className={styles.about_title}>Bridge Builder</h4>
            <p className={styles.about_content}>
            Authentic relator who leans-in to build a culture of energized collaboration and shared ownership with customers and teams
            </p>
          </div>
          
          <br />
          <div className={styles.about_logos}></div>
          <div className={styles.about_logos}></div>
          <div className={styles.about_logos}></div>
          <div className={styles.about_logos}></div>
          <div className={styles.about_logos}></div>
          <div className={styles.about_logos}></div>
          <div className={styles.about_logos}></div>

        </div>
      </section>
    );
}

export default About;