import './TabbarOrganizer.scss';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../../models/routes.models';
import home from '../../../assets/icons/icon_home.svg';
import activities from '../../../assets/icons/icon_activities.svg';
import settings from '../../../assets/icons/icon_settings.svg';
import dashboard from '../../../assets/icons/icon_statistic.svg';
import drinks from '../../../assets/icons/icon_drinks_tapbar.svg';

export const TabbarOrganizer = () => {
  const currentUser = useSelector((state) => state.global.user);
  const organizer = useSelector((state) => state.organizer.organizer);
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
  return (
    <nav className="tabbar-space-organizer">
      <div
        className={
          isOpenKeyboard ? 'hide-tabbar-organizer' : 'tabbar-container'
        }
      >
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
          to={`${routes.owner.statistics}/${organizer.details?._id}`}
        >
          <div className="icon-container-organizer">
            <img src={dashboard} alt="estadisticas" />
          </div>
          <p>P.Control</p>
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
