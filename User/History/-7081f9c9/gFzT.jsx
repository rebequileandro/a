import './Tabbar.scss';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import activitiesIcon from '../../../assets/icons/icon_activities.svg';
import drinksIcon from '../../../assets/icons/icon_drinks_tapbar.svg';
import homeIcon from '../../../assets/icons/icon_home.svg';
import settingsIcon from '../../../assets/icons/icon_settings.svg';
import routes from '../../../models/routes.models';

export default function Tabbar() {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    window.addEventListener('native.showkeyboard', () => {
      alert('open');
    });
    window.addEventListener('native.hidekeyboard', () => alert('close'));
  }, []);

  return (
    <nav className="tabbar-space">
      <div className="tabbar">
        <NavLink
          to={routes.partyUser.home}
          className={(navigation) =>
            navigation.isActive ? 'active_home' : null
          }
        >
          <div className="icon-container">
            <img
              loading="lazy"
              src={
                isOpen
                  ? 'data:image/png;base64,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'
                  : homeIcon
              }
              alt="Home"
            />
          </div>
          <p>Inicio</p>
        </NavLink>
        <NavLink
          to={routes.partyUser.marketplace}
          className={(navigation) =>
            navigation.isActive ? 'active_marketplace' : null
          }
        >
          <div className="icon-container">
            <img loading="lazy" src={drinksIcon} alt="Marketplace" />
          </div>

          <p>Menu</p>
        </NavLink>
        <NavLink
          to={routes.partyUser.activities}
          className={(navigation) =>
            navigation.isActive ? 'active_activities' : null
          }
        >
          <div className="icon-container">
            <img loading="lazy" src={activitiesIcon} alt="Actividades" />
          </div>

          <p>Mis act.</p>
        </NavLink>
        <NavLink
          to={routes.global.settings}
          className={(navigation) =>
            navigation.isActive ? 'active_settings' : null
          }
        >
          <div className="icon-container">
            <img loading="lazy" src={settingsIcon} alt="Configuración" />
          </div>
          <p>Ajustes</p>
        </NavLink>
      </div>
    </nav>
  );
}
