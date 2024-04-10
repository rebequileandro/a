import React from 'react';
import './Tabbar.scss';
import qrIcon from '../../../assets/icons/icon_qr.svg';
import settings from '../../../assets/icons/icon_settings.svg';
import orders from '../../../assets/icons/icon_activities.svg';
import qrIconSelected from '../../../assets/icons/Selected-Icons/selected_qr.svg';
import ordersSelected from '../../../assets/icons/Selected-Icons/selected_activities.svg';
import settingsSelected from '../../../assets/icons//Selected-Icons/selected_settings.svg';
import { useNavigate } from 'react-router-dom';
import routes from '../../../models/routes.models';
export const Tabbar = ({ isOpen, setIsOpen, active }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(routes.bartender.scanner);
    setIsOpen && setIsOpen(!isOpen);
  };
  return (
    <nav className="tabbar-space-barman">
      <div className="tab-bar-barman">
        <button onClick={() => navigate(routes.bartender.home)}>
          <img
            src={active === 'orders' ? ordersSelected : orders}
            alt="ordenes"
          />
        </button>
        <button className="qr-button" onClick={() => handleClick()}>
          <img src={active === 'qr' ? qrIconSelected : qrIcon} alt="qr" />
        </button>
        <button onClick={() => navigate(routes.global.settings)}>
          <img
            src={active === 'settings' ? settingsSelected : settings}
            alt="ajustes"
          />
        </button>
      </div>
    </nav>
  );
};
