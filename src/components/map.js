// components/map.js
import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Map() {
  // Define the building locations
  const building_locations = [22, 56, 107];
  const data = ["Smart Cities"]

  // Create an array of cube elements
  const html = Array.from({ length: 400 }, (_, i) => {
    // Check if the current index matches any of the building locations
    const hasBuilding = building_locations.includes(i);

    

    // Render a cube element with an optional building element
    return (
      <div className={styles.cube} key={i}>
        {i}
        <input name="check" type="checkbox" id={i} />
        <label htmlFor={i}></label>
        <div className={styles.tree}></div>
        {hasBuilding && <div className={styles.building} id={`building-${i}`}><h4>{data}</h4></div>}
      </div>
    );
  });

  // Render the cube and building elements together in a container
  return <div className={styles.container}>{html}</div>;
}