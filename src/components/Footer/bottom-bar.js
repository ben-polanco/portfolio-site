//bottom-bar.js
import React from 'react';
import styles from '../../styles/Home.module.css';

function BottomBar() {
  return (
    <div className={styles.bottombar}>
      <p><span>©</span> Designed & built by Ben Polanco with React, Sketch, and a bit of TLC</p>
    </div>
  );
}

export default BottomBar;