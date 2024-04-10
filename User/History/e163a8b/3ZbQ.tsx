import { Link } from "react-router-dom";
import "./bzrp-tour-btn.scss";
import flyer from "assets/flyer.webp";
import { ROUTES } from "models";

const BzrpTourBtn: React.FC = () => {
  return (
    <div className="bzrp-tour-btn bzrp-tour-btn">
      <Link
        className="bzrp-tour-btn__link"
        to={ROUTES.BZRP_TOUR}
        title="Próximas fechas Bizarrap"
      >
        <img
          className="bzrp-tour-btn__image"
          src={flyer}
          title="Próximas fechas Bizarrap"
          alt="Próximas fechas Bizarrap"
        />
        <span className="bzrp-tour-btn__text" title="Bzrp Tour">
          BZRP TOUR!{" "}
        </span>
        <span
          className="bzrp-tour-btn__text-sub"
          title="Próximas fechas Bizarrap"
        >
          PRÓXIMAS FECHAS
        </span>
      </Link>
    </div>
  );
};

export default BzrpTourBtn;
