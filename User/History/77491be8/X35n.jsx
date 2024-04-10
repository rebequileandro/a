import { Link } from "react-router-dom";
import "./exclusive-material-btn.scss";
import passport from "../../../../assets/passport_home.webp";
import routes from "../../../../models/routes";
import { useState } from "react";
const ExclusiveMaterialBtn = ({ show }) => {
  const [imageLoad, setImageLoad] = useState(false);

  return (
    <div
      className={`exclusive-material exclusive-material--${
        show ? "show" : "hidden"
      }`}
    >
      <Link to={routes.SELECT_DATE} className="exclusive-material__link">
        <img
          title="Material exclusivo Bizarrap"
          className="exclusive-material__image"
          src={passport}
          alt="Pasaporte Bizarrap"
          onLoad={() => setImageLoad(true)}
        />
        {imageLoad && (
          <span className="exclusive-material__text">Material Exclusivo</span>
        )}
      </Link>
    </div>
  );
};

export default ExclusiveMaterialBtn;
