import React, { useEffect, useState } from "react";
import "./item_next_dates.scss";
const ItemNextDates = ({ city, date, place, status, disp, delay, link }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  return (
    <div
      className="item-next-dates"
      style={{
        animation: `translateY-0 0.5s 1 ${delay / 10}s forwards`,
      }}
    >
      <div className="item-next-dates__celda">
        <h3>{city}</h3>
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
          <a
            href={status && link}
            target="_blank"
            className={status ? "btn-primary" : "btn-secondary"}
          >
            {status ? "COMPRAR AHORA!" : "AGOTADO"}
          </a>
        </div>
      )}
    </div>
  );
};

export default ItemNextDates;
