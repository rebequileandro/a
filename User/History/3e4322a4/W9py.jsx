import React, { useEffect, useState } from "react";
import "./2022.scss";
import Calendar from "../Calendar";
import background from "../../../assets/tour2022.webp";
import { formatDateMont } from "../../../utils/format-date";

import { useAppContext } from "../../../context/AppProvider";

const C2022 = ({ onClick, imageOnClick }) => {
  const [months, setmonths] = useState([]);
  const [dates, setDates] = useState([]);
  const { recap } = useAppContext();

  useEffect(() => {
    let allmonths = recap[2022].map((e) => {
      return formatDateMont(e.date);
    });
    allmonths = [...new Set(allmonths)];
    setmonths(allmonths);
    let alldates = recap[2022].map((e) => {
      return e.date;
    });
    setDates(alldates);
  }, []);
  // console.log(recap[2022]);
  return (
    <article className="c2022">
      <img
        className="c2022__image"
        src={background}
        alt="Bizarrap Tour 2022"
        title="Bizarrap Tour 2022"
        onClick={imageOnClick}
      />
      <div className="c2022__calendar">
        <Calendar year="2022" onClick={onClick} months={months} dates={dates} />
      </div>
    </article>
  );
};

export default C2022;
