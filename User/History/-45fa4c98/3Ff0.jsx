import React from "react";
import "./lg.scss";
import { Link } from "react-router-dom";
import routes from "../../../../models/routes";
import sunglasses from "../../../../assets/gif-lentesv2.gif";
const LG = ({ show }) => {
  return (
    <Link to={routes.GRAMMY} className={`grammy ${show && "grammy--show"}`}>
      <img
        title="Latin Grammy 2023"
        className="grammy__sunglasses"
        src={sunglasses}
        alt="Gafas Bizarrap"
      />
    </Link>
  );
};

export default LG;
