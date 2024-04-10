import "./header.scss";
import video from "assets/video.svg";
import dots from "assets/elipsis.svg";
import avatar from "assets/metahuma.png";
import { Link } from "react-router-dom";
import ROUTES from "models/routes.models";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-container__profile-wrapper">
        <div className="header-container__profile-image-container">
          <img
            className="header-container__profile-image"
            src={avatar}
            alt="user"
          />
        </div>
        <div className="header-container__profile-data">
          <h3 className="header-container__profile-data__name">{props.name}</h3>
          <p className="header-container__profile-data__status">
            {props.status}
          </p>
        </div>
      </div>
      <div className="header-container__options-container">
        <button className="header-container__options-container__btn">
          <img src={video} alt="call" />
        </button>
        <Link
          className="header-container__options-container__btn"
          to={ROUTES.SETTINGS}
        >
          <img src={dots} alt="options" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
