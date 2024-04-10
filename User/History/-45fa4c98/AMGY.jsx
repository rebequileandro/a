import React, { useState } from "react";
import "./lg.scss";
import { Link } from "react-router-dom";
import routes from "../../../../models/routes";
import sunglasses from "../../../../assets/gif-lentesv2.gif";
const LG = ({ show }) => {
  const [imageLoad, setImageLoad] = useState(false);

  return (
    <div className={`grammy-btn ${show && imageLoad && "grammy-btn--show"}`}>
      <Link to={routes.GRAMMY} className="grammy-btn__link">
        <img
          title="Latin Grammy 2023"
          className="grammy-btn__sunglasses"
          src={sunglasses}
          alt="Gafas Bizarrap"
          onLoad={() => setImageLoad(true)}
        />
        {imageLoad && (
          <span className="grammy-btn__text" title="Latin Grammy 2023">
            Ganador 3 Latin Grammy
          </span>
        )}
      </Link>
    </div>
  );
};

export default LG;
