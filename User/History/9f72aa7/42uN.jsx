import { Link } from "react-router-dom";
import routes from "../../../models/routes";
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
          bZRP TOUR{" "}
          <svg
            className="home__next-date--arrow"
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>PRÓXIMAS FECHAS</title>
            <path
              d="M20.3519 25.5036L22.3631 7.80084L2.58031 23.5473L0.664922 21.1408L20.4477 5.39446L2.74488 3.38329L6.14802 0.67451L26.0117 2.93118L23.7551 22.7948L20.3519 25.5036Z"
              fill="black"
            />
          </svg>
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
