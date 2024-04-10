import React from "react";
import "./item_next_dates.scss";
const ItemNextDates = ({ city, date, place, status, disp }) => {
  return (
    <div className="item-next-dates">
      <div>
        <h3>{city}</h3>
      </div>
      <div>
        <h3>{date}</h3>
      </div>
      <div>
        <h3>{place}</h3>
      </div>
      {disp && (
        <div>
          <h3>{disp}</h3>
        </div>
      )}

      {!disp && (
        <div>
          <a className={status ? "btn-primary" : "btn-secondary"}>
            {status ? "COMPRAR AHORA!" : "AGOTADO"}
          </a>
        </div>
      )}
    </div>
  );
};

export default ItemNextDates;
