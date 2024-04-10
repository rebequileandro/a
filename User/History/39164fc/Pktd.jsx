import React from 'react';
import './TabbarCashier.scss';
import qrIcon from '../../../assets/icons/icon_qr.svg';
import settingsIcon from '../../../assets/icons/icon_settings.svg';
import posIcon from '../../../assets/icons/icon_pos.svg';
import { NavLink } from 'react-router-dom';
import routes from '../../../models/routes.models';

export const TabbarCashier = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen && setIsOpen(!isOpen);
  };

  return (
    <nav className="tabbar-space-cashier">
      <div className="tab-bar-cashier">
        <NavLink
          to={routes.cashier.pos}
          className={(navigation) =>
            navigation.isActive ? 'tab-bar-cashier__active_home' : null
          }
        >
          <img src={posIcon} alt="ordenes" loading="lazy" />
        </NavLink>

        <NavLink
          to={routes.cashier.home}
          className={(navigation) =>
            navigation.isActive
              ? 'tab-bar-cashier__qr tab-bar-cashier__active_scanner'
              : 'tab-bar-cashier__qr'
          }
        >
          <div onClick={() => handleClick()}>
            <img src={qrIcon} alt="qr" loading="lazy" />
          </div>
        </NavLink>
        <NavLink
          to={routes.global.settings}
          className={(navigation) =>
            navigation.isActive ? 'tab-bar-cashier__active_settings' : null
          }
        >
          <img src={settingsIcon} alt="ajustes" loading="lazy" />
        </NavLink>
      </div>
    </nav>
  );
};
