import React, { useEffect, useState } from 'react';
import './Tabbar.scss';
import qrIcon from '../../../assets/icons/icon_qr.svg';
import settings from '../../../assets/icons/icon_settings.svg';
import orders from '../../../assets/icons/icon_activities.svg';
import { NavLink } from 'react-router-dom';
import routes from '../../../models/routes.models';
export const TabbarBartender = ({ isOpen, setIsOpen }) => {
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  let fullWindowHeight = window.innerHeight;
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerHeight === fullWindowHeight) {
        setIsOpenKeyboard(false);
      } else if (window.innerHeight < fullWindowHeight * 0.9) {
        setIsOpenKeyboard(true);
      }
    });
  }, []);
  const handleClick = () => {
    setIsOpen && setIsOpen(!isOpen);
  };

  return (
    <nav className="tabbar-space-bartender">
      <div
        className={
          isOpenKeyboard ? 'hide-tabbar-bartender' : 'tab-bar-bartender'
        }
      >
        <NavLink
          to={routes.bartender.home}
          className={(navigation) =>
            navigation.isActive ? 'tab-bar-bartender__active_home' : null
          }
        >
          <img src={orders} alt="ordenes" loading="lazy" />
        </NavLink>

        <NavLink
          to={routes.bartender.scanner}
          className={(navigation) =>
            navigation.isActive
              ? 'tab-bar-bartender__qr tab-bar-bartender__active_scanner'
              : 'tab-bar-bartender__qr'
          }
        >
          <div onClick={() => handleClick()}>
            <img src={qrIcon} alt="qr" loading="lazy" />
          </div>
        </NavLink>
        <NavLink
          to={routes.global.settings}
          className={(navigation) =>
            navigation.isActive ? 'tab-bar-bartender__active_settings' : null
          }
        >
          <img src={settings} alt="ajustes" loading="lazy" />
        </NavLink>
      </div>
    </nav>
  );
};
