import React from "react";
import "./item_next_dates.scss";
const ItemNextDates = ({ city, date, place, status }) => {
  return (
    <div className="item-next-dates">
      <div>{city}</div>
      <div>{date}</div>
      <div>{place}</div>
      <div>{status ? "si" : "no"}</div>
    </div>
  );
};

export default ItemNextDates;
