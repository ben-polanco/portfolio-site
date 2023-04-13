//title.js
import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react';

function Title() {
    const [opacity, setOpacity] = useState(1);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxOpacityScrollPosition = window.innerHeight * .15;
        const minOpacityScrollPosition = window.innerHeight * 0.25;
  
        if (scrollPosition < maxOpacityScrollPosition) {
          setOpacity(1);
        } else if (scrollPosition > minOpacityScrollPosition) {
          setOpacity(0);
        } else {
          const opacityValue = (minOpacityScrollPosition - scrollPosition) / (minOpacityScrollPosition - maxOpacityScrollPosition);
          setOpacity(opacityValue);
          requestAnimationFrame(() => {
            setOpacity(opacityValue);
          });
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={styles.title} style={{ opacity }}>
        <h1>Ben Polanco</h1>
        <h2>Building digital products<br /> for a purpose-driven world</h2>
        <div id={styles.under_construction}>
          *This world is still under construction, explore <br />at your own risk*<br />
          <a href="https://github.com/ben-polanco/portfolio-site/blob/main/user_stories.md" target="_blank">Follow my progress on github</a>
          <p>last updated: 04/13/23</p>
        </div>
      </div>
    );
}

export default Title;