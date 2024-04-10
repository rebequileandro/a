import React, { useState } from "react";
import "./lg.scss";
import { Link } from "react-router-dom";
import routes from "../../../../models/routes";
import sunglasses from "../../../../assets/gif-lentesv2.gif";
const LG = ({ show }) => {
  const [imageLoad, setImageLoad] = useState(false);

  return (
    <div className={`grammy ${show && "grammy--show"}`}>
      <Link to={routes.GRAMMY}>
        <img
          title="Latin Grammy 2023"
          className="grammy__sunglasses"
          src={sunglasses}
          alt="Gafas Bizarrap"
          onLoad={() => setImageLoad(true)}
        />
        {imageLoad && (
          <span className="grammy__text" title="Latin Grammy 2023">
            ganador 3 latin grammy
          </span>
        )}
      </Link>
    </div>
  );
};

export default LG;
