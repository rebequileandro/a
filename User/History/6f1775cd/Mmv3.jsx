import './Settings.scss';
import Arrow from '../../../assets/icons/icon_arrow-white.svg';
import { Fragment } from 'react';
import support from '../../../assets/global/icon_support.svg';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../components/global/Header/Header';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';
import routes from '../../../models/routes.models';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../redux/slices/global/user';
import { TabbarOrganizer } from '../../../components/owner-manager/Tabbar/TabbarOrganizer';
import { menuOwner, menuPartyUser } from './menu-settings';
export default function Settings() {
  const user = useSelector(getCurrentUser);
  const navigate = useNavigate();
  const menu = user.rol === 'organizador' ? menuOwner : menuPartyUser;
  return (
    <>
      <Header title={'Ajustes'} />
      <div className="settings-paryUser layout-primary">
        <div className="settings-paryUser__menu-container">
          {menu.map((menuItem, i) => (
            <Fragment key={i}>
              <div
                className="settings-paryUser__menu-item"
                onClick={() => navigate(menuItem.slug)}
                key={menuItem.id}
              >
                <h3 className="heading-tertiary-main settings-paryUser__title--sub">
                  {menuItem.title}
                </h3>
                <img
                  className="settings-paryUser__arrow"
                  src={Arrow}
                  alt="arrow"
                  loading="lazy"
                />
              </div>
              {i < menu.length - 1 ? (
                <hr className="settings-paryUser__line" />
              ) : null}
            </Fragment>
          ))}
        </div>
        <div
          className="settings-paryUser__row-container"
          onClick={() => navigate(routes.global.support)}
        >
          <div className="settings-paryUser__wrapper-icon">
            <div className="settings-paryUser__wrapper-icon-bg">
              <div className="settings-paryUser__icon-bg">
                <img
                  loading="lazy"
                  className="settings-paryUser__icon"
                  src={support}
                  alt=""
                />
              </div>
            </div>
          </div>
          <h3 className="heading-tertiary-sub settings-paryUser__title">
            Contactar a soporte
          </h3>
          <img
            loading="lazy"
            className="settings-paryUser__arrow"
            src={Arrow}
            alt="arrow"
          />
        </div>
        {user.rol === 'organizador' ? (
          <TabbarOrganizer />
        ) : user.rol === 'fiestero' ? (
          <Tabbar />
        ) : (
          user.rol === 'bartender' && <TabbarBartender />
        )}
      </div>
    </>
  );
}
