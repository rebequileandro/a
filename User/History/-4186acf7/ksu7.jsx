import "./Help.scss";

import { Link, useNavigate } from "react-router-dom";

import Arrow from "../../assets/icons/icon_arrow-white.svg";
import { Header } from "../../../components/global/Header/Header";

const routes = [
  {
    id: 1,
    route: "/ayuda/como-pedir",
    label: "Cómo pedir",
  },
  {
    id: 2,
    route: "/ayuda/contactanos",
    label: "Contactate con nosotros",
  },
];

export default function Help() {
  const navigate = useNavigate();
  return (
    <div className="help-page">
      <Header backbutton={() => navigate("/ajustes")} />
      <div className="body">
        <h1>Ayuda</h1>
        <div className="routes">
          {routes.map((route) => (
            <Link key={route.id} to={route.route} className="route">
              <span className="label">{route.label}</span>
              <img src={Arrow} alt="" className="arrow" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
