//info.js
import React from 'react';
import styles from '../../styles/Home.module.css';

function Info() {
  return (
    <div className={styles.info}>
      <h2>More info</h2>
      <p>I specialize in guiding teams through the murky, early stages of new product development - using agile sprints and rapid experimentation to pursue market fit.<br /> <br />

My product experience centers on <span>B2B and B2C software apps (web, iOS, Android)</span> that use connected devices and advanced analytics. I enjoy facing intractable problems to find grounded, human solutions that work in the real world.  I'm passionate about <span>improving health, reducing societal costs, and building stronger, more vibrant communities.</span>
<br /><br />
If you're interested in knowing more about me or my work, please feel free to reach out. I'm always open to new opportunities and challenges.
<br /><br />
-<br />
<span>Ben Polanco</span></p>
    </div>
  );
}

export default Info;