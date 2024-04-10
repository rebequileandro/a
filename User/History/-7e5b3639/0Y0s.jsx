import "./Settings.scss";

import Arrow from "../../assets/icons/icon_arrow-white.svg";
import AyudaIcon from "../../assets/icons/icon_ayuda.svg";
import { GradientGreenBar } from "../../components/Gradient-Green-Bar/GradientGreenBar";
import { Header } from "../../components/global/Header/Header";
import MyAccountIcon from "../../assets/icons/icon_profile.svg";
import React from "react";
import { TabbarBartender } from "../Bartender/TabbarBartender/TabbarBartender";
import { TabbarOrganizer } from "../Organizer/Tabbar/TabbarOrganizer";
import Tapbar from "../../components/Tapbar/Tapbar";
import { logOutUser } from "../../redux/store/slices/user";
import logoutIcon from "../../assets/icons/icon_logout.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const menu = [
  {
    id: 1,
    title: "Mi cuenta",
    slug: "mi-cuenta",
    icon: <img src={MyAccountIcon} alt="Mi Cuenta" />,
  },
  {
    id: 2,
    title: "Ayuda",
    slug: "ayuda",
    icon: <img src={AyudaIcon} alt="Ayuda" />,
  },
];

export default function Settings() {
  const cart = useSelector((state) => state.store.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  const handleLogout = async () => {
    const dbs = await window.indexedDB.databases();
    dbs.forEach((db) => window.indexedDB.deleteDatabase(db.name));

    dispatch(
      logOutUser({
        navigate: () => {
          navigate("/");
          document.location.reload();
        },
      })
    );
  };

  return (
    <div className="settings">
      <Header cart />

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

      <div className="logout" onClick={handleLogout}>
        <img src={logoutIcon} alt="" />
        <h3>Cerrar sesión</h3>
      </div>
      {/* {cart.length ? (
        <GradientGreenBar action={"cart"} isAmount={true} />
      ) : currentUser.rol === "unitManager" ||
        currentUser.rol === "organizador" ? (
        <TabbarOrganizer active="settings" />
      ) : currentUser.rol === "bartender" ? (
        <TabbarBartender active="settings" />
      ) : currentUser.rol === "cashier" ? null : (
        <Tapbar active="settings" />
      )} */}
      
      { currentUser.rol === "unitManager" ||
        currentUser.rol === "organizador" ? (
        <TabbarOrganizer active="settings" />
      ) : currentUser.rol === "bartender" ? (
        <TabbarBartender active="settings" />
      ) : currentUser.rol === "cashier" ? null : (
        <Tapbar active="settings" />
      )}
    </div>
  );
}
