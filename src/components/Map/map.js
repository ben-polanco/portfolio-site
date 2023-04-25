import React from "react";
import styles from '../../styles/Home.module.css';
import Building from './building';
import Map_bg from "../../../public/img/map_bg.svg";
import Footer from "../Footer/footer";
import PropTypes from 'prop-types';

const Map = ({ locations }) => {
  return (
    <section className={styles.wrapper}>
        <div className={styles.container}>
          <Map_bg className={styles.map}/>
          <Building locations={locations} />
        </div>
        <Footer />
    </section>
  );
};

Map.propTypes = {
  locations: PropTypes.array.isRequired,
};

export default Map;
