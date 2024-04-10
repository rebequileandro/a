import React from "react";
import "./next-dates-card.scss";
import credential2 from "../../assets/credencialv2.png";
import credential from "../../assets/credential-front.webp";
import soldOut from "../../assets/sold-out.webp";
import { formatDate } from "../../utils/format-date";
import { useRef } from "react";
import { useState } from "react";

const NextDatesCard = (props) => {
  const cardRef = useRef(null);
  const [imageFrontLoad, setImageFrontLoad] = useState(null);
  const [imageBackLoad, setImageBackLoad] = useState(null);

  const handleClickCard = () => {
    if (cardRef.current.classList.contains("flip")) {
      cardRef.current.classList.remove("flip");
      return;
    } else {
      cardRef.current.classList.add("flip");
      return;
    }
  };

  return (
    <div
      onClick={handleClickCard}
      key={props.index}
      className={`next-dates-card__image-wrapper ${
        props.index % 2 === 0 && "next-dates-card__image-wrapper--translateY"
      }`}
    >
      <div
        className={
          !props.availability
            ? "next-dates-card__image-wrapper--inner flip"
            : "next-dates-card__image-wrapper--inner"
        }
        ref={cardRef}
      >
        <div className="next-dates-card__image-wrapper--front">
          <div className="next-dates-card__image-data-container">
            <img
              title="Credencial Bizarrap Show"
              className="next-dates-card__image"
              src={credential2}
              alt="Credencial Bizarrap Show"
              onLoad={() => setImageBackLoad(true)}
            />
            {imageBackLoad && (
              <>
                <span className="next-dates-card__flag" title="País">
                  {props.flag}
                </span>
                <div className="next-dates-card__data-wrapper-front">
                  <h3 className="next-dates-card__data-wrapper-front__location">
                    {props.city} - {props.country}
                  </h3>
                  <h3 className="next-dates-card__data-wrapper-front__show">
                    {props.show}
                  </h3>
                  {/* <div className="next-dates-card__data-wrapper-front__location-container"> */}
                  {/* <h3 className="next-dates-card__data-wrapper-front__country">
                      {props.country}
                    </h3> */}
                  {/* </div> */}
                  <h3 className="next-dates-card__data-wrapper-front__date">
                    {formatDate(props.date)}
                  </h3>
                </div>
                {!props.availability && (
                  // || new Date(props.date) < new Date()
                  <img
                    title="Bizarrap Show Sould Out"
                    src={soldOut}
                    alt="Bizarrap Show Sould Out"
                    className="next-dates-card__sold-out"
                  />
                )}
              </>
            )}
          </div>
        </div>
        <div className="next-dates-card__image-wrapper--back">
          <div className="next-dates-card__image-data-container">
            <img
              title="Credencial Bizarrap Show"
              className="next-dates-card__image"
              src={credential}
              alt="Credencial Bizarrap Show"
              onLoad={() => setImageFrontLoad(true)}
            />

            {imageFrontLoad && (
              <div className="next-dates-card__content-wrapper">
                <div className="next-dates-card__show">
                  <h3>{props.show}</h3>
                  <div className="next-dates-card__location">
                    <p>
                      {props.city} - {props.country}
                    </p>
                  </div>
                </div>
                <div className="next-dates-card__date-container">
                  <h3>{formatDate(props.date)}</h3>
                </div>
                {!props.availability ? (
                  <a className="next-dates-card__buy-btn next-dates-card__buy-btn--sold-out">
                    sold out
                    {/* próximamente */}
                  </a>
                ) : (
                  <a
                    href={props.link}
                    target="_blank"
                    className="next-dates-card__buy-btn"
                  >
                    comprar
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextDatesCard;
