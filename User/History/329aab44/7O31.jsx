import React, { useEffect } from "react";
import "./2023.scss";
import Calendar from "../Calendar";
import background from "../../../assets/tour2023.webp";
import { useState } from "react";
import data from "../../../models/data";
import { formatDateMont } from "../../../utils/format-date";
import { useAppContext } from "../../../context/AppProvider";
const C2023 = ({ onClick, imageOnClick }) => {
  const { recap } = useAppContext();
  const [months, setmonths] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    let allmonths = recap[2023].map((e) => {
      return formatDateMont(e.date);
    });
    allmonths = [...new Set(allmonths)];
    setmonths(allmonths);
    let alldates = recap[2023].map((e) => {
      return e.date;
    });
    setDates(alldates);
  }, []);

  return (
    <article className="c2023">
      <img
        className="c2023__image"
        src={background}
        alt="Bizarrap Tour 2023"
        title="Bizarrap Tour 2023"
        onClick={imageOnClick}
      />
      <div className="c2023__calendar">
        <Calendar year="2023" onClick={onClick} months={months} dates={dates} />
      </div>
    </article>
  );
};

export default C2023;
