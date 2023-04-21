import React from "react";
import styles from '../../styles/Home.module.css';
import Building from './building';
import Map_bg from "../../../public/img/map_bg.svg";

const Map = ({ locations }) => {
  return (
    <section className={styles.wrapper}>
        <div className={styles.container}>
          <Map_bg className={styles.map}/>
          <Building locations={locations} />
        </div>
    </section>
  );
};

export default Map;










    