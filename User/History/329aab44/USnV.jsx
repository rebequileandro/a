import React, { useEffect } from "react";
import "./2023.scss";
import Calendar from "../Calendar";
import background from "../../../assets/tour2023.webp";
import { useState } from "react";
import data from "../../../models/data";
const C2023 = ({ onClick }) => {
  const [available, setAvariable] = useState([]);
  useEffect(() => {
    data.bzrpTour[2023].map((e) => {
      return formatDateMont(e.date);
    });
  }, []);

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
