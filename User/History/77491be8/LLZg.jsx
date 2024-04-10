import { Link } from "react-router-dom";
import "./exclusive-material.scss";
import passport from "../../../../assets/passport_home.webp";
const ExclusiveMaterial = () => {
  return (
    <div>
      <Link>
        <img
          title="Material exclusivo Bizarrap"
          src={passport}
          alt="Pasaporte Bizarrap"
        />
        <span></span>
      </Link>
    </div>
  );
};

export default ExclusiveMaterial;
