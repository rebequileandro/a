import { Link } from "react-router-dom";
import routes from "../../../../models/routes";
import "./bzrp-tour-btn.scss";
import flyer from "../../../assets/flyer.webp";

const BzrpTourBtn = ({ show }) => {
  return (
    <div className={`bzrp-tour-btn bzrp-tour-btn--${show ? "show" : "hidden"}`}>
      <Link className="bzrp-tour-btn__link" to={routes.TOUR}>
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
