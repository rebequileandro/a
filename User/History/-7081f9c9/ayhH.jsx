import './Tabbar.scss';
import { NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import activitiesIcon from '../../../assets/icons/icon_activities.svg';
import drinksIcon from '../../../assets/icons/icon_drinks_tapbar.svg';
import homeIcon from '../../../assets/icons/icon_home.svg';
import settingsIcon from '../../../assets/icons/icon_settings.svg';
import routes from '../../../models/routes.models';

export default function Tabbar() {
  useEffect(() => {
    window.addEventListener('native.showkeyboard', () => {
      alert('open');
    });
    window.addEventListener('native.hidekeyboard', () => alert('close'));
  }, []);

  return (
    <nav className="tabbar-space" onClick={() => window.alert('closeA')}>
      <div className="tabbar">
        <NavLink
          to={routes.partyUser.home}
          className={(navigation) =>
            navigation.isActive ? 'active_home' : null
          }
        >
          <div className="icon-container">
            <img loading="lazy" src={homeIcon} alt="Home" />
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
