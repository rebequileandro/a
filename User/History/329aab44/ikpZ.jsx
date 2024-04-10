import React, { useEffect } from "react";
import "./2023.scss";
import Calendar from "../Calendar";
import background from "../../../assets/tour2023.webp";
import { useState } from "react";
import { formatDateMont } from "../../../utils/format-date";
import { useAppContext } from "../../../context/AppProvider";

const C2023 = ({ onClick, imageOnClick }) => {
  const { recap } = useAppContext();
  const [months, setmonths] = useState([]);
  const [dates, setDates] = useState([]);
  const [imageLoad, setImageLoad] = useState(false);

  useEffect(() => {
    if (recap) {
      let allmonths = recap[2023]?.map((e) => {
        return formatDateMont(e.date);
      });
      allmonths = [...new Set(allmonths)];
      setmonths(allmonths);
      let alldates = recap[2023]?.map((e) => {
        return e.date;
      });
      setDates(alldates);
    }
  }, [recap]);

  return (
    <article className={`c2023 ${imageLoad && "c2023--animate"}`}>
      <img
        className="c2023__image"
        src={background}
        alt="Bizarrap Tour 2023"
        title="Bizarrap Tour 2023"
        onClick={imageOnClick}
        onLoad={() => setImageLoad(true)}
      />
      <div className="c2023__calendar">
        {imageLoad && (
          <Calendar
            year="2023"
            onClick={onClick}
            months={months}
            dates={dates}
          />
        )}
      </div>
    </article>
  );
};

export default C2023;
