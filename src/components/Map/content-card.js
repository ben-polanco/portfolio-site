import React from "react";
import styles from '../../styles/Home.module.css';
import ReactHtmlParser from 'html-react-parser';
import PropTypes from 'prop-types';

const ContentCard = ({ experience }) => {
  return (
    <div className={styles.left_content} id={`${experience.name}_content`}>
      {/*<div className={styles.content_img}>.img placeholder</div>*/}
      <h4>{experience.title}</h4>
      {/*<h6>Client Name</h6>*/}
      <i id="duration" />
        {/*<div className={styles.icons}> icon placeholder
            <div className={styles.content_icons}>
            <i id="projecttype" />
            <i id="producttype_analytictool_app_device_etc" />
            <i id="B2B / C" />
        </div>
      </div>*/}
      {ReactHtmlParser(experience.content)}
    </div>
  );
};

ContentCard.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ContentCard;