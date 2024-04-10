import { Link } from "react-router-dom";
import "./exclusive-material-btn.scss";
import passport from "assets/passport_home.webp";
import { ROUTES } from "models";

const ExclusiveMaterialBtn = () => {
  return (
    <div className="exclusive-material exclusive-material">
      <Link to={ROUTES.RECAP} className="exclusive-material__link">
        <img
          title="Material exclusivo Bizarrap"
          className="exclusive-material__image"
          src={passport}
          alt="Pasaporte Bizarrap"
        />
        <span className="exclusive-material__text">Material Exclusivo</span>
      </Link>
    </div>
  );
};

export default ExclusiveMaterialBtn;
