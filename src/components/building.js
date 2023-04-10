import React from "react";
import styles from "../styles/Home.module.css";
import Hospital from "../../public/img/hospital.svg";
import City from "../../public/img/city.svg";
import Hotel from "../../public/img/hotel.svg";
import Foundation from "../../public/img/foundation.svg";
import Park from "../../public/img/park.svg";
import Farm from "../../public/img/farm.svg";
import Experiences from "./experiences";

const svgs = {
  hospital: <Hospital />,
  city: <City />,
  hotel: <Hotel />,
  foundation: <Foundation />,
  park: <Park />,
  farm: <Farm />
};

const Building = ({ locations }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {Experiences().map((experience, index) => {
        const svg = svgs[experience.name];
        const location= locations[index];

        return (
          <div
            key={experience.id}
            className={`${styles.building}`}
            id={`${styles[experience.name]}`}
            style={{ transform: `translate(${location.x}%, ${location.y}%)` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {svg}
            {isHovered && (
              <div className={styles.content}>
                <h2>{experience.title}</h2>
                <p>{experience.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Building;