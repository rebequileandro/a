import './TabbarOrganizer.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../../models/routes.models';
import home from '../../../assets/icons/icon_home.svg';
import activities from '../../../assets/icons/icon_activities.svg';
import settings from '../../../assets/icons/icon_settings.svg';
import statistics from '../../../assets/icons/icon_statistic.svg';
import drinks from '../../../assets/icons/icon_drinks_tapbar.svg';

export const TabbarOrganizer = () => {
  const currentUser = useSelector((state) => state.global.user);
  return (
    <nav className="tabbar-space-organizer">
      <div className="tabbar-container">
        <NavLink
          className={(navigation) =>
            navigation.isActive ? 'active_home' : null
          }
          to={routes.owner.home}
        >
          <div className="icon-container-organizer">
            <img src={home} alt="home" />
          </div>
          <p>Inicio</p>
        </NavLink>
        {currentUser.rol === 'unitManager' ? (
          <NavLink
            className={(navigation) =>
              navigation.isActive ? 'active_inventory' : null
            }
            to={`${routes.owner.inventory}/${currentUser.idParty}`}
          >
            <div className="icon-container-organizer">
              <img src={drinks} alt="drinks" />
            </div>
            <p>Drinks</p>
          </NavLink>
        ) : (
          <NavLink
            className={(navigation) =>
              navigation.isActive ? 'active_activities' : null
            }
            to={routes.owner.activities}
          >
            <div className="icon-container-organizer">
              <img src={activities} alt="actividades" />
            </div>
            <p>Mis act.</p>
          </NavLink>
        )}
        <NavLink
          className={(navigation) =>
            navigation.isActive ? 'active_statistics' : null
          }
          to={routes.owner.statistics}
        >
          <div className="icon-container-organizer">
            <img src={statistics} alt="estadisticas" />
          </div>
          <p>Métricas</p>
        </NavLink>
        <NavLink
          className={(navigation) =>
            navigation.isActive ? 'active_settings' : null
          }
          to={routes.global.settings}
        >
          <div className="icon-container-organizer">
            <img src={settings} alt="settings" />
          </div>
          <p>Ajustes</p>
        </NavLink>
      </div>
    </nav>
  );
};
