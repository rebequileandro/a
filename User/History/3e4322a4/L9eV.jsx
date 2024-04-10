import React, { useEffect, useState } from "react";
import "./2022.scss";
import Calendar from "../Calendar";
import background from "../../../assets/tour2022.webp";
import { formatDateMont } from "../../../utils/format-date";
import data from "../../../models/data";

const C2022 = ({ onClick }) => {
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
    <div className="c2022">
      <img
        className="c2022__image"
        src={background}
        alt="Bizarrap Tour 2022"
        title="Bizarrap Tour 2022"
      />
      <div className="c2022__calendar">
        <span className="c2022__year">2022</span>
        <Calendar year="2022" onClick={onClick} months={months} dates={dates} />
      </div>
    </div>
  );
};

export default C2022;
