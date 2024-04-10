import { Link } from "react-router-dom";
import "./header.scss";
import back from "assets/back.svg";
import ROUTES from "models/routes.models";

const Header = () => {
  return (
    <header className="header-container-settings">
      <div className="header-container-settings__wrapper">
        <Link to={ROUTES.HOME} className="header-container-settings__back">
          <img
            src={back}
            alt="back"
            className="header-container-settings__back-icon"
          />
        </Link>
        <h1 className="header-container-settings__title">Mi Cuenta</h1>
      </div>
    </header>
  );
};

export default Header;
