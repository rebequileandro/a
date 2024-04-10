import "./nav.scss";
import logo from "assets/logo.svg";
const Nav = () => {
  const navOptions = [
    {
      title: "Inicio",
      url: "#home",
    },
    {
      title: "Trabajos",
      url: "#works",
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
      <img src={logo} alt="show control" />
      {navOptions.map((navlink) => (
        <a href={navlink.url}>{navlink.title}</a>
      ))}
    </nav>
  );
};

export default Nav;
