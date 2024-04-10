import { Link } from "react-router-dom";
import routes from "../../../../models/routes";
import "./bzrp-tour-btn.scss";
import flyer from "../../../../assets/flyer.webp";
import { useState } from "react";

const BzrpTourBtn = ({ show }) => {
  const [imageLoad, setImageLoad] = useState(false);
  return (
    <div
      className={`bzrp-tour-btn bzrp-tour-btn--${
        show && imageLoad ? "show" : "hidden"
      }`}
    >
      <Link
        className="bzrp-tour-btn__link"
        to={routes.TOUR}
        title="Próximas fechas Bizarrap"
      >
        <img
          className="bzrp-tour-btn__image"
          src={flyer}
          title="Próximas fechas Bizarrap"
          alt="Próximas fechas Bizarrap"
          onLoad={() => setImageLoad(true)}
        />
        {imageLoad && (
          <span className="bzrp-tour-btn__text" title="Bzrp Tour">
            BZRP TOUR!{" "}
          </span>
        )}
        {imageLoad && (
          <span
            className="bzrp-tour-btn__text-sub"
            title="Próximas fechas Bizarrap"
          >
            PRÓXIMAS FECHAS
          </span>
        )}
      </Link>
    </div>
  );
};

export default BzrpTourBtn;
