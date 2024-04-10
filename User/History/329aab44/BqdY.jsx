import React, { useEffect } from "react";
import "./2023.scss";
import Calendar from "../Calendar";
import background from "../../../assets/tour2023.webp";
import { useState } from "react";
import data from "../../../models/data";
import { formatDateMont } from "../../../utils/format-date";
const C2023 = ({ onClick }) => {
  const [months, setmonths] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    let allmonths = data.bzrpTour[2022].map((e) => {
      return formatDateMont(e.date);
    });
    allmonths = [...new Set(allmonths)];
    setmonths(allmonths);
    let alldates = data.bzrpTour[2022].map((e) => {
      return e.date;
    });
    setDates(alldates);
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
        <Calendar year="2023" onClick={onClick} months={months} dates={dates} />
      </div>
    </div>
  );
};

export default C2023;
