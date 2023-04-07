// components/map.js
import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Experiences from './experiences';

export default function Map() {
  // Define the building locations
  const building_locations = [63, 73, 130, 175, 143, 304, 375];
  let buildingCounter = 0;

  // Create an array of cube elements
  const html = Array.from({ length: 400 }, (_, i) => {

    // Check if the current index matches any of the building locations
    const hasBuilding = building_locations.includes(i);

    // Render the optional building element for cubes where key matches building location
    return (
      <div className={styles.cube} key={i}>
        {i}
        <input name="check" type="checkbox" id={i} />
        <label htmlFor={i}></label>
        <div className={styles.tree}></div>
        {hasBuilding && (
          <div className={`${styles.building}`} id={`${styles[Experiences()[buildingCounter].id]}`}>
            <h4>{Experiences()[buildingCounter].title}</h4>
            {buildingCounter += 1}
          </div>
        )}
      </div>
    );
  });

  // Render the cube and building elements together in a container
  return <div className={styles.container}>{html}</div>;
}