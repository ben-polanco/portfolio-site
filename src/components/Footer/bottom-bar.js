//bottom-bar.js
import React from 'react';
import styles from '../../styles/Home.module.css';

function BottomBar() {
  return (
    <div className={styles.bottombar}>
      <h4><span>©</span> Designed & built by Ben Polanco with React, Sketch, and a bit of TLC</h4>
    </div>
  );
}

export default BottomBar;