import "./nav.scss";
import logo from "assets/logo.svg";
const Nav = ({ active = "#home" }) => {
  const navOptions = [
    {
      title: "Inicio",
      url: "#home",
    },
    {
      title: "Trabajos",
      url: "#trabajos",
    },
    {
      title: "Quienes somos",
      url: "#aboutus",
    },
    {
      title: "Contacto",
      url: "#contact",
    },
  ];
  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="show control" />
      {navOptions.map((navlink) => (
        <a
          className={
            active === navlink.url ? "nav__link nav__link--active" : "nav__link"
          }
          href={navlink.url}
        >
          {navlink.title}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
