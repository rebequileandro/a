import { Link } from "react-router-dom";
import "./exclusive-material-btn.scss";
import passport from "../../../../assets/passport_home.webp";
import routes from "../../../../models/routes";
const ExclusiveMaterialBtn = ({ show }) => {
  return (
    <div
      className={`exclusive-materia exclusive-material--${
        show ? "show" : "hidden"
      }`}
    >
      <Link to={routes.EXCLUSIVE_MATERIAL}>
        <img
          title="Material exclusivo Bizarrap"
          className="exclusive-materia__image"
          src={passport}
          alt="Pasaporte Bizarrap"
        />
        <span>Material exclusivo</span>
      </Link>
    </div>
  );
};

export default ExclusiveMaterialBtn;
