import React from "react";
import styles from "../styles/Home.module.css";
import ReactHtmlParser from 'html-react-parser';

const ContentCard = ({ experience }) => {
  return (
    <div className={styles.content} id={`${experience.name}_content`}>
      <h4>{experience.title}</h4>
      {ReactHtmlParser(experience.content)}
    </div>
  );
};

export default ContentCard;