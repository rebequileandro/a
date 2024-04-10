import React from "react";
import "./item_next_dates.scss";
const ItemNextDates = ({ city, date, place, status }) => {
  return (
    <div className="item-next-dates">
      <h3>{city}</h3>
      <h3>{date}</h3>
      <h3>{place}</h3>
      <div>{status ? "si" : "no"}</div>
    </div>
  );
};

export default ItemNextDates;
