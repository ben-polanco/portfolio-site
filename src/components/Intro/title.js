// title.js
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from 'react';
import { handleScroll } from './opacity';

function Title() {
  
    const [opacity, setOpacity] = useState(1);
  
    useEffect(() => {
      // Define max and min scroll positions for opacity
      const minScrollPosition = window.innerHeight * .01;
      const maxScrollPosition = window.innerHeight * 0.45;

      // Add event listener for scroll and call handleScroll function with max and min scroll positions as arguments
      window.addEventListener('scroll', () => handleScroll(setOpacity, minScrollPosition, maxScrollPosition));
  
      // Remove event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', () => handleScroll(setOpacity));
      };
    }, []);
  
    return (
      <div className={styles.title} style={{ opacity: opacity}}>
        <h1>Ben Polanco</h1>
        <h2>Building digital products<br /> for a purpose-driven world</h2>
        <div id={styles.under_construction}>
          *This world is still under construction, explore at your own risk*<br />
          <a href="https://github.com/" target="_blank">Follow my progress on github</a>
          <p>last updated: 04/17/23</p>
        </div>
      </div>
    );
}

export default Title;