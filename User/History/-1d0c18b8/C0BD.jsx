import "./Settings.scss";

import Arrow from "../../assets/icons/icon_arrow-white.svg";
import { GradientGreenBar } from "../../components/Gradient-Green-Bar/GradientGreenBar";
import { Header } from "../../components/Header/Header";
import MyAccountIcon from "../../assets/icons/icon_profile.svg";
import React from "react";
import Tapbar from "../../components/Tapbar/Tapbar";
import { logOutUser } from "../../redux/store/slices/user";
import logoutIcon from "../../assets/icons/icon_logout.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TabbarOrganizer } from "../Organizer/Tabbar/TabbarOrganizer";

const menu = [
  {
    id: 1,
    title: "Mi cuenta",
    slug: "mi-cuenta",
    icon: <img src={MyAccountIcon} alt="Mi Cuenta" />,
  },
];

export default function Settings() {
  const cart = useSelector((state) => state.store.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  return (
    <div className="settings">
      <Header />

      <div className="content">
        <h1>Ajustes</h1>

        <div className="menu">
          {menu.map((menuItem) => (
            <div
              className="menu-item"
              onClick={() => navigate("/" + menuItem.slug)}
              key={menuItem.id}
            >
              <div className="icon">{menuItem.icon}</div>
              <div className="title">{menuItem.title}</div>
              <div className="arrow">
                <img src={Arrow} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="logout"
        onClick={() =>
          dispatch(
            logOutUser({
              navigate: navigate("/"),
            })
          )
        }
      >
        <img src={logoutIcon} alt="" />
        <h3>Cerrar sesión</h3>
      </div>

      {cart.length ? (
        <GradientGreenBar action={"cart"} isAmount={true} />
      ) : 
      currentUser.rol === "unitManager" || currentUser.rol === "organizador" ?
      <TabbarOrganizer active="settings"/>
      :
      (
        <Tapbar active="settings" />
      )}
    </div>
  );
}
