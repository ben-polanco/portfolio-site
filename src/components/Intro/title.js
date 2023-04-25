// title.js
import React from "react";
import styles from "../../styles/Home.module.css";
import { useEffect } from 'react';
import { useOpacity } from './opacity';

function Title() {
  
  const opacitySettings= {
    component:"title", 
    initial: 1, 
    minScroll:0, 
    maxScroll:.35,
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
      <div className={styles.title} style={{ opacity: opacity}}>
        <h1>Ben Polanco</h1>
        <h2>Building digital products<br /> for a purpose-driven world</h2>
        <div id={styles.under_construction}>
          *This world is still under construction, explore at your own risk*<br />
          <a href="https://github.com/ben-polanco/portfolio-site/blob/main/user_stories.md" target="_blank" rel="noreferrer">Follow my progress on github</a>
          <p>last updated: 04/21/23</p>
        </div>
      </div>
    );
}

export default Title;