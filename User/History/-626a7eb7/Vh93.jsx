import './Settings.scss';

import Arrow from '../../../assets/icons/icon_arrow-white.svg';
import AyudaIcon from '../../../assets/icons/icon_ayuda.svg';
import MyAccountIcon from '../../../assets/icons/icon_profile.svg';
import React from 'react';
import { logOutUser } from '../../../redux/slices/global/user';
import logoutIcon from '../../../assets/icons/icon_logout.svg';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from '../../../components/global/Header/Header';
import { TabbarBartender } from '../../bartender/TabbarBartender/TabbarBartender';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';
import { TabbarOrganizer } from '../../../components/owner-manager/Tabbar/TabbarOrganizer';
import axios from 'axios';
const { REACT_APP_API } = process.env;
const menu = [
  {
    id: 1,
    title: 'Mi cuenta',
    slug: 'account',
    icon: <img src={MyAccountIcon} alt="Mi Cuenta" />
  },
  {
    id: 2,
    title: 'Ayuda',
    slug: 'help',
    icon: <img src={AyudaIcon} alt="Ayuda" />
  }
];

export default function Settings() {
  const cart = useSelector((state) => state.partyUser.marketplace.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.global.user);

  const handleLogout = async () => {
    await axios(`${REACT_APP_API}/api/auth/logout`);
    const dbs = await window.indexedDB.databases();
    dbs.forEach((db) => window.indexedDB.deleteDatabase(db.name));

    dispatch(
      logOutUser({
        navigate: () => {
          navigate('/');
          document.location.reload();
        }
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
              onClick={() => navigate('/' + menuItem.slug)}
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

      {currentUser.rol === 'unitManager' ||
      currentUser.rol === 'organizador' ? (
        <TabbarOrganizer active="settings" />
      ) : currentUser.rol === 'bartender' ? (
        <TabbarBartender active="settings" />
      ) : currentUser.rol === 'cashier' ? null : (
        <Tabbar />
      )}
    </div>
  );
}
