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

  return <nav className="nav">Nav</nav>;
};

export default Nav;
