import React from "react";
import styles from '../../styles/Home.module.css';

const Icons_Card = ({ experience_icons }) => {

    const iconComponents = experience_icons.map((icon) => {
        const IconComponent = require(`/public/img/${icon.icon}.svg`).default;
        
        return (
        <div className={styles.icons} id={styles[icon.icon]} >
            <IconComponent />
            <p>{icon.label}</p>
        </div>
        );
    });

    return <div className={styles.content_icons}>{iconComponents}</div>;
};
 
export default Icons_Card;