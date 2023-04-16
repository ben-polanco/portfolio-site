import React from "react";
import styles from "../styles/Home.module.css";

const ContentCard = ({ experience }) => {
  return (
    <div className={styles.content} id={`${experience.name}_content`}>
      <h4>{experience.title}</h4>
      <p>{experience.content}</p>
    </div>
  );
};

export default ContentCard;