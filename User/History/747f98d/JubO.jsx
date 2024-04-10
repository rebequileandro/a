import React from 'react';
import './Tabbar.scss';
import qrIcon from '../../../assets/icons/icon_qr.svg';
import settings from '../../../assets/icons/icon_settings.svg';
import orders from '../../../assets/icons/icon_activities.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import routes from '../../../models/routes.models';
export const TabbarBartender = ({ isOpen, setIsOpen, active }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    //navigate(routes.bartender.scanner);
    setIsOpen && setIsOpen(!isOpen);
  };
  return (
    <nav className="tabbar-space-bartender">
      <div className="tab-bar-bartender">
        <NavLink
          to={routes.bartender.home}
          className={(navigation) =>
            navigation.isActive ? 'tab-bar-bartender__active_home' : null
          }
        >
          <img src={orders} alt="ordenes" />
        </NavLink>

        <NavLink
          to={routes.bartender.scanner}
          className={(navigation) =>
            navigation.isActive
              ? 'qr-button tab-bar-bartender__active_scanner'
              : 'qr-button'
          }
        >
          <div onClick={() => handleClick()}>
            <img src={qrIcon} alt="qr" />
          </div>
        </NavLink>
        <NavLink
          to={routes.global.settings}
          className={(navigation) =>
            navigation.isActive ? 'tab-bar-bartender__active_settings' : null
          }
        >
          <img src={settings} alt="ajustes" />
        </NavLink>
      </div>
    </nav>
  );
};
