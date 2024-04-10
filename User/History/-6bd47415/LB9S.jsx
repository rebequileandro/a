import { Link } from "react-router-dom";
import "./header.scss";
import back from "assets/back.svg";
import ROUTES from "models/routes.models";

const Header = () => {
  return (
    <header className="header-container-settings">
      <div className="header-container-settings__wrapper">
        <Link to={ROUTES.SETTINGS} className="header-container-settings__back">
          <img src={back} alt="back" />
        </Link>
        <h1>Mi Cuenta</h1>
      </div>
    </header>
  );
};

export default Header;
