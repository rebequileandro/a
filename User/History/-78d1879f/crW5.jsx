import './Settings.scss';
import Arrow from '../../../assets/icons/icon_arrow-white.svg';
import { Fragment, useState } from 'react';
import support from '../../../assets/global/icon_support.svg';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../components/global/Header/Header';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';
import routes from '../../../models/routes.models';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentUser,
  updateStatusWorkBartender
} from '../../../redux/slices/global/user';
import { TabbarOrganizer } from '../../../components/owner-manager/Tabbar/TabbarOrganizer';
import { menuOwner, menuPartyUser, menuTeam } from './menu-settings';
import { TabbarBartender } from '../../../components/bartender/Tabbar/Tabbar';
import { TabbarCashier } from '../../../components/cashier/Tabbar/TabbarCashier';
import { ToggleSwitch } from '../../../components/global/ToggleSwitch/ToggleSwitch';
import { statusWorkBartender } from './services/settings.services';
import NotificationRequestPermission from '../../../components/global/Notification_Request_Permission/NotificationRequestPermission';
export default function Settings() {
  const user = useSelector(getCurrentUser);
  const [checked, setChecked] = useState(
    user?.statusWork && JSON.parse(user?.statusWork)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu =
    user.rol === 'organizador'
      ? menuOwner
      : user.rol === 'fiestero'
      ? menuPartyUser
      : menuTeam;

  const handleChangeSwitch = async (e) => {
    setChecked(e.target.checked);
    await statusWorkBartender(user.id ? user.id : user._id, e.target.checked);
    dispatch(updateStatusWorkBartender(JSON.stringify(e.target.checked)));
  };
  return (
    <>
      <Header
        title={'Ajustes'}
        backbutton={
          user.rol === 'cashier' && (() => navigate(routes.cashier.home))
        }
      />
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
        {user.rol === 'bartender' && (
          <div className="settings-paryUser__row-container">
            <h3 className="heading-tertiary-sub settings-paryUser__title">
              Estado:{' '}
              {checked ? (
                <span className="settings-paryUser__bartender-status">
                  Trabajando
                </span>
              ) : (
                'Descansando'
              )}
            </h3>
            <ToggleSwitch checked={checked} onChange={handleChangeSwitch} />
          </div>
        )}
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
      </div>
      {user.rol === 'organizador' ? (
        <TabbarOrganizer />
      ) : user.rol === 'fiestero' ? (
        <Tabbar />
      ) : user.rol === 'bartender' ? (
        <TabbarBartender />
      ) : (
        <TabbarCashier />
      )}
      <NotificationRequestPermission />
    </>
  );
}
