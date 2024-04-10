import "./nav.scss";

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
      {navOptions.map((navlink) => (
        <a href={navlink.url}>{navlink.title}</a>
      ))}
    </nav>
  );
};

export default Nav;
