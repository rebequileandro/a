import './Tabbar.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import activitiesIcon from '../../../assets/icons/icon_activities.svg';
import drinksIcon from '../../../assets/icons/icon_drinks_tapbar.svg';
import homeIcon from '../../../assets/icons/icon_home.svg';
import settingsIcon from '../../../assets/icons/icon_settings.svg';
import routes from '../../../models/routes.models';

export default function Tabbar() {
  return (
    <nav className="tabbar-space">
      <div className="tabbar">
        <NavLink
          to={routes.partyUser.home}
          className={(navigation) =>
            navigation.isActive ? 'active_home' : null
          }
        >
          <img loading="lazy" src={homeIcon} alt="Home" />
        </NavLink>
        <NavLink
          to={routes.partyUser.marketplace}
          className={(navigation) =>
            navigation.isActive ? 'active_marketplace' : null
          }
        >
          <img loading="lazy" src={drinksIcon} alt="Marketplace" />
        </NavLink>
        <NavLink
          to={routes.partyUser.activities}
          className={(navigation) =>
            navigation.isActive ? 'active_activities' : null
          }
        >
          <img loading="lazy" src={activitiesIcon} alt="Actividades" />
        </NavLink>
        <NavLink
          to={routes.global.settings}
          className={(navigation) =>
            navigation.isActive ? 'active_settings' : null
          }
        >
          <img loading="lazy" src={settingsIcon} alt="Configuración" />
        </NavLink>
      </div>
    </nav>
  );
}
