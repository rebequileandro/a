import './TabbarOrganizer.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import home from '../../../assets/icons/icon_home.svg';
import activities from '../../../assets/icons/icon_activities.svg';
import settings from '../../../assets/icons/icon_settings.svg';
import statistics from '../../../assets/icons/icon_statistic.svg';
import drinks from '../../../assets/icons/icon_drinks_tapbar.svg';

export const TabbarOrganizer = () => {
  const currentUser = useSelector((state) => state.global.user);
  return (
    <nav className="tabbar-container">
      <NavLink
        className={(navigation) => (navigation.isActive ? 'active_home' : null)}
        to="/"
      >
        <img src={home} alt="home" />
      </NavLink>
      {currentUser.rol === 'unitManager' ? (
        <NavLink
          className={(navigation) =>
            navigation.isActive ? 'active_inventory' : null
          }
          to={'/inventario/' + currentUser.idParty}
        >
          <img src={drinks} alt="drinks" />
        </NavLink>
      ) : (
        <NavLink
          className={(navigation) =>
            navigation.isActive ? 'active_activities' : null
          }
          to="/activities"
        >
          <img src={activities} alt="actividades" />
        </NavLink>
      )}
      <NavLink
        className={(navigation) =>
          navigation.isActive ? 'active_statistics' : null
        }
        to="/statistics"
      >
        <img src={statistics} alt="estadisticas" />
      </NavLink>
      <NavLink
        className={(navigation) =>
          navigation.isActive ? 'active_settings' : null
        }
        to="/settings"
      >
        <img src={settings} alt="settings" />
      </NavLink>
    </nav>
  );
};
