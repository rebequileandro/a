import React from "react";
import "./item_next_dates.scss";
const ItemNextDates = ({ city, date, place, status, disp }) => {
  return (
    <div className="item-next-dates">
      <h3>{city}</h3>
      <h3>{date}</h3>
      <h3>{place}</h3>
      {disp && <h3>{place}</h3>}

      <a className={status ? "btn-primary" : "btn-secondary"}>
        {status ? "COMPRAR AHORA!" : "AGOTADO"}
      </a>
    </div>
  );
};

export default ItemNextDates;
