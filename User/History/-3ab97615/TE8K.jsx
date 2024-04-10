import React from "react";
import "./item_next_dates.scss";
const ItemNextDates = ({ city, date, place, status, disp }) => {
  return (
    <div className="item-next-dates">
      <div className="item-next-dates__celda">
        <h3>{city}</h3>
        {/* <div className="item-next-dates__tooltip-container">
          <span className="item-next-dates__tooltip">{city}</span>
        </div> */}
      </div>
      <div className="item-next-dates__celda">
        <h3>{date}</h3>
      </div>
      <div className="item-next-dates__celda">
        <h3>{place}</h3>
      </div>
      {disp && (
        <div className="item-next-dates__celda">
          <h3>{disp}</h3>
        </div>
      )}

      {!disp && (
        <div className="item-next-dates__celda">
          <a className={status ? "btn-primary" : "btn-secondary"}>
            {status ? "COMPRAR AHORA!" : "AGOTADO"}
          </a>
        </div>
      )}
    </div>
  );
};

export default ItemNextDates;
