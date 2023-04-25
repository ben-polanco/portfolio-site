import React from "react";
import ReactDOM from 'react-dom';
import styles from '../../styles/Home.module.css';
import Hospital from "/public/img/hospital.svg";
import City from "/public/img/city.svg";
import Hotel from "/public/img/hotel.svg";
import Foundation from "/public/img/foundation.svg";
import Park from "/public/img/park.svg";
import Trees from "/public/img/front-trees.svg";
import Farm from "/public/img/farm.svg";
import Experiences from "../Input/experiences";
import ContentCard from "./content-card";
import PropTypes from 'prop-types';

const svgs = {
  hospital: <Hospital />,
  city: <City />, 
  hotel: <Hotel />,
  foundation: <Foundation />,
  park: <Park />,
  farm: <Farm />
};

const Building = ({ locations }) => {
  // State variables
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [clickedIndex, setClickedIndex] = React.useState(null);
  const [isContentOpen, setIsContentOpen] = React.useState(false);
  const ref = React.useRef(null);

  // Event handlers
  const handleMouseEnter = (index) => {
    if (!clickedIndex) {
      setHoveredIndex(index);
    }
  };
  
  const handleMouseLeave = () => {
    if (!clickedIndex) {
      setHoveredIndex(null);
    }
  };

  const handleClick = (event, index) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsContentOpen(false);
      setClickedIndex(null);
    }
    else {
      setIsContentOpen(true);
      setClickedIndex(index);
      setHoveredIndex(null);
    }
  };

  // Effect hook to listen for clicks outside the content component
  React.useEffect(() => {
    if (isContentOpen) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isContentOpen]);

// Render function
return (
  <>
    {Experiences().map((experience, index) => {
      const svg = svgs[experience.name];
      const location= locations[index];
      const isHovered = hoveredIndex === index;
      const isClicked = clickedIndex === index;

      return (
        <React.Fragment key={experience.id}>
          <div
            className={`${styles.building}`}
            id={`${styles[experience.name]}`}
            style={{ transform: `translate(${location.x}%, ${location.y}%)` }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={(event) => handleClick(event, index)}    
          >
            {svg}
          </div>
          {isClicked && ReactDOM.createPortal(<ContentCard experience={experience} />, document.getElementById(`${styles.contents}`))}
          {isHovered && !isClicked && <h3 id={`${styles[experience.name]}`} data-title={experience.title} style={{ display: "block" }} />}
        </React.Fragment>
      );
    })}
    <Trees className={styles.trees} />
  </>
);
};

Building.propTypes = {
  locations: PropTypes.array.isRequired,
};

export default Building;