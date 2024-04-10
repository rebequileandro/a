import './MyAccount.scss';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentUser,
  logOutUser
} from '../../../../redux/slices/global/user';
import { Header } from '../../../../components/global/Header/Header';
import profilePicture from '../../../assets/global/icon_profile.svg';
import arrow from '../../../../assets/icons/icon_arrow-white.svg';
import logout from '../../../../assets/icons/icon_logout.svg';
import routes from '../../../../models/routes.models';
export default function MyAccount() {
  const user = useSelector(getCurrentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = [
    {
      id: 1,
      title: 'Mis datos personales',
      slug: routes.global.account
    },
    {
      id: 2,
      title: 'Mail y número de teléfono',
      slug: 'terms-and-conditions'
    },
    {
      id: 3,
      title: 'Cambiar contraseña',
      slug: 'help'
    }
  ];
  const handleLogout = async () => {
    const dbs = await window.indexedDB.databases();
    dbs.forEach((db) => window.indexedDB.deleteDatabase(db.name));
    dispatch(
      logOutUser({
        navigate: () => {
          navigate('/');
          document.location.reload();
        }
      })
    );
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
        <h3 className="heading-tertiary--sub my-account__user-name">
          {user.name}
        </h3>
      </div>
      <div className="my-account__menu-container">
        {menu?.map((item, i) => (
          <Fragment key={item.id}>
            <div className="my-account__menu-item">
              <h3 className="heading-tertiary--main my-account__title--sub">
                {item.title}
              </h3>
              <img className="my-account__arrow" src={arrow} alt="arrow" />
            </div>
            {i < menu.length - 1 ? <hr className="my-account__line" /> : null}
          </Fragment>
        ))}
      </div>
      <div className="my-account__logout-container" onClick={handleLogout}>
        <div className="my-account__logout-border">
          <div className="my-account__profile-picture-bg">
            <div className="my-account__logout-icon-wrapper">
              <img className="my-account__icon-logout" src={logout} alt="" />
            </div>
          </div>
        </div>
        <h3 className="heading-tertiary--sub my-account__title">
          Contactar a soporte
        </h3>
        <img
          loading="lazy"
          className="my-account__arrow"
          src={arrow}
          alt="arrow"
        />
      </div>
    </div>
  );
}
