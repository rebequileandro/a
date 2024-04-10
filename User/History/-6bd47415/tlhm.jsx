import "./header.scss";
import back from "assets/back.svg";
const Header = () => {
  return (
    <header className="header-container-settings">
      <img src={back} alt="back" />
      <h1>Mi Cuenta</h1>
    </header>
  );
};

export default Header;
