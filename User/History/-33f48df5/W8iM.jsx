import './my_account.scss';
import '../Settings.scss';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentUser,
  logOutUser
} from '../../../../redux/slices/global/user';
import { Header } from '../../../../components/global/Header/Header';
import profilePicture from '../../../../assets/global/icon_profile.svg';
import arrow from '../../../../assets/icons/icon_arrow-white.svg';
import logout from '../../../../assets/icons/icon_logout.svg';
import routes from '../../../../models/routes.models';
import axios from 'axios';
const { REACT_APP_API } = process.env;
export default function MyAccount() {
  const user = useSelector(getCurrentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = [
    {
      id: 1,
      title: 'Mis datos personales',
      slug: routes.global.personalInformation
    },
    {
      id: 2,
      title: 'Mail y número de teléfono',
      slug: routes.global.personalInformation
    },
    {
      id: 3,
      title: 'Cambiar contraseña',
      slug: 'help'
    }
  ];
  const handleLogout = async () => {
    try {
      await axios(`${REACT_APP_API}/api/auth/logout`);
      dispatch(logOutUser());
      window.indexedDB.deleteDatabase('WeDrink');
      document.location.reload();
    } catch (error) {
      window.indexedDB.deleteDatabase('WeDrink');
      dispatch(
        logOutUser({
          navigate: () => {
            navigate('/');
            document.location.reload();
          }
        })
      );
    }
  };
  return (
    <div className="my-account layout-primary">
      <Header backbutton={() => navigate('/settings')} title={'Mi cuenta'} />
      <div className="my-account__profile-container">
        <div className="my-account__profile-picture-wrapper">
          <div className="my-account__profile-picture-bg">
            <div className="my-account__profile-picture">
              {user?.image ? (
                <img
                  className="my-account__image"
                  src={user.image}
                  alt="foto de perfil"
                  loading="lazy"
                />
              ) : (
                <img
                  className="my-account__icon"
                  src={profilePicture}
                  alt="foto de perfil"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
        <h3 className="heading-tertiary-sub my-account__user-name">
          {user.name}
        </h3>
      </div>
      <div className="my-account__menu-wrapper">
        <div className="settings-paryUser__menu-container">
          {menu?.map((item, i) => (
            <Fragment key={item.id}>
              <div
                className="settings-paryUser__menu-item"
                onClick={() => navigate(item.slug)}
              >
                <h3 className="heading-tertiary-main settings-paryUser__title--sub">
                  {item.title}
                </h3>
                <img
                  className="settings-paryUser__arrow"
                  src={arrow}
                  alt="arrow"
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
          onClick={handleLogout}
        >
          <div className="settings-paryUser__wrapper-icon">
            <div className="settings-paryUser__wrapper-icon-bg">
              <div className="settings-paryUser__icon-bg">
                <img
                  loading="lazy"
                  className="settings-paryUser__icon"
                  src={logout}
                  alt=""
                />
              </div>
            </div>
          </div>
          <h3 className="heading-tertiary-sub settings-paryUser__title--sub">
            Cerrar sesión
          </h3>
          <img
            loading="lazy"
            className="settings-paryUser__arrow"
            src={arrow}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
}
