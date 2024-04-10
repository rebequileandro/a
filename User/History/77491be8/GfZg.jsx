import { Link } from "react-router-dom";
import "./exclusive-material.scss";
import passport from "../../../../assets/passport_home.webp";
const ExclusiveMaterial = () => {
  return (
    <div>
      <Link to={routes.EXCLUSIVE_MATERIAL}>
        <img
          title="Material exclusivo Bizarrap"
          src={passport}
          alt="Pasaporte Bizarrap"
        />
        <span>Material exclusivo</span>
      </Link>
    </div>
  );
};

export default ExclusiveMaterial;
