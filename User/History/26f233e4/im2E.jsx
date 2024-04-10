import React, { useEffect } from "react";
import "./2024.scss";
import Calendar from "../Calendar";
import background from "../../../assets/tour2024.webp";
import { useState } from "react";
import { formatDateMont } from "../../../utils/format-date";
import { useAppContext } from "../../../context/AppProvider";

const C2024 = ({ onClick, imageOnClick }) => {
  const { recap } = useAppContext();
  const [months, setmonths] = useState([]);
  const [dates, setDates] = useState([]);
  const [imageLoad, setImageLoad] = useState(false);

  useEffect(() => {
    if (recap) {
      let allmonths = recap[2024]?.map((e) => {
        return formatDateMont(e.date);
      });
      allmonths = [...new Set(allmonths)];
      setmonths(allmonths);
      let alldates = recap[2024]?.map((e) => {
        return e.date;
      });
      setDates(alldates);
    }
  }, [recap]);

  return (
    <article className={`c2024 ${imageLoad && "c2024--animate"}`}>
      <img
        className="c2024__image"
        src={background}
        alt="Bizarrap Tour 2023"
        title="Bizarrap Tour 2023"
        onClick={imageOnClick}
        onLoad={() => setImageLoad(true)}
      />
      <div className="c2024__calendar">
        {imageLoad && (
          <Calendar
            year="2024"
            onClick={onClick}
            months={months}
            dates={dates}
          />
        )}
      </div>
    </article>
  );
};

export default C2024;
