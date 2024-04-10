import React from "react";
import "./2023.scss";
import Calendar from "../Calendar";
import background from "../../../assets/tour2023.webp";
const C2023 = ({ onClick }) => {
  return (
    <div className="c2023">
      <img
        className="c2023__image"
        src={background}
        alt="bzrp-2023"
        loading="lazy"
      />
      <div className="c2023__calendar">
        <Calendar year="2023" onClick={onClick} />
      </div>
    </div>
  );
};

export default C2023;
