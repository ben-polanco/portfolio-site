import React from "react";
import styles from '../../styles/Home.module.css';
import ReactHtmlParser from 'html-react-parser';
import PropTypes from 'prop-types';
import Icons_Card from "./icons_card";
import Icon_Strategy from '/public/img/icon_strategy.svg';
import Icon_Device from '/public/img/icon_device.svg';
import Icon_B2B from '/public/img/icon_b2b.svg';
import Placeholder from '/public/img/placeholder.svg';


const ContentCard = ({ experience }) => {
  return (
    <div className={styles.left_content} id={`${experience.name}_content`}>
      <img src={`/img/${experience.hero_img}`} className={styles.content_img} />
      <h4>{experience.title}</h4>
      <Icons_Card experience_icons={experience.icons} />

      {ReactHtmlParser(experience.content)}
    </div>
  );
};

ContentCard.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ContentCard;