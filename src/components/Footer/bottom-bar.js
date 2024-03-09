//bottom-bar.js
import React from 'react';
import styles from '../../styles/Home.module.css';

function BottomBar() {
  return (
    <div className={styles.bottombar}>
      <p><span>©</span> Designed & built by Ben Polanco with React and Sketch</p>
    </div>
  );
}

export default BottomBar;