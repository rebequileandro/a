import React from "react";
import "./calendar.scss";
import { useEffect } from "react";
import { createCalendar } from "../../utils/format-date";
import { useState } from "react";
import line from "../../assets/-.webp";
import x from "../../assets/x.webp";
import marker from "../../assets/marker.webp";
const Calendar = ({ year, onClick, months, dates }) => {
  const [calendar, setCalendar] = useState([]);
  const week = ["L", "M", "M", "J", "V", "S", "D"];
  useEffect(() => {
    year && setCalendar(createCalendar(year));
  }, []);
  return (
    <div className="calendar" title={`Calendario Bizarrap Tour ${year}`}>
      {calendar?.map((e, i) => (
        <button
          title={`Calendario Bizarrap Tour ${e.month} de ${year}`}
          key={e.month + i + year}
          className={`calendar__month-wrapper ${
            months?.includes(e.month) && "calendar__month-wrapper--avariable"
          }`}
          onClick={() =>
            months?.includes(e.month) ? onClick(year, e.month) : null
          }
        >
          <div
            className={`calendar__month  ${
              months?.includes(e.month) && "calendar__month--avariable"
            }`}
          >
            <span>{e.month}</span>
            {months?.includes(e.month) && (
              <img
                className="calendar__marker-month"
                src={marker}
                alt="marker"
              />
            )}
          </div>
          {week?.map((w, x) => (
            <span key={w + x + year} className="calendar__day">
              {w}
            </span>
          ))}

          {e.days?.map((day, d) => (
            <div className="calendar__day-wrapper" key={day}>
              {dates?.includes(day) && (
                <img
                  title={`Show De Bizarrap ${`0${day}`.slice(-2)}/${`0${
                    i + 1
                  }`.slice(-2)}/${year}`}
                  className="calendar__line"
                  src={day % 2 === 0 ? line : x}
                  alt={`Show De Bizarrap ${`0${day}`.slice(-2)}/${`0${
                    i + 1
                  }`.slice(-2)}/${year}`}
                />
              )}
              <p className="calendar__day">{day}</p>
            </div>
          ))}
        </button>
      ))}
    </div>
  );
};

export default Calendar;
