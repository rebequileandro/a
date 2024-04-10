import './Settings.scss';
import Arrow from '../../../assets/icons/icon_arrow-white.svg';
import { Fragment } from 'react';
import help from '../../../assets/global/icon_ayuda.svg';
import myAccountIcon from '../../../assets/global/icon_profile.svg';
import payment from '../../../assets/global/icon_payment.svg';
import support from '../../../assets/global/icon_support.svg';
import { logOutUser } from '../../../redux/slices/global/user';
import logoutIcon from '../../../assets/icons/icon_logout.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../components/global/Header/Header';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';

const menu = [
  {
    id: 1,
    title: 'Mi cuenta',
    slug: 'account'
  },
  {
    id: 3,
    title: 'Términos y condiciones',
    slug: 'terms-and-conditions'
  },
  {
    id: 4,
    title: 'Políticas de privacidad',
    slug: 'help'
  }
];

export default function Settings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const handleLogout = async () => {
  //   const dbs = await window.indexedDB.databases();
  //   dbs.forEach((db) => window.indexedDB.deleteDatabase(db.name));
  //   dispatch(
  //     logOutUser({
  //       navigate: () => {
  //         navigate('/');
  //         document.location.reload();
  //       }
  //     })
  //   );
  // };
  return (
    <>
      <Header title={'Ajustes'} />
      <div className="settings-paryUser layout-primary">
        <div className="settings-paryUser__menu">
          {menu.map((menuItem, i) => (
            <Fragment key={menuItem.id}>
              <div
                className="settings-paryUser__menu-item"
                onClick={() => navigate('/' + menuItem.slug)}
                key={menuItem.id}
              >
                <h3 className="heading-tertiary--main settings-paryUser__title--sub">
                  {menuItem.title}
                </h3>
                <img
                  className="settings-paryUser__arrow"
                  src={Arrow}
                  alt="arrow"
                />
              </div>
              {i < menu.length - 1 ? (
                <hr className="settings-paryUser__line" />
              ) : null}
            </Fragment>
          ))}
        </div>
        <div className="settings-paryUser__support-container ">
          <div className="settings-paryUser__support-wrapper-icon">
            <div className="settings-paryUser__support-icon-background">
              <div className="settings-paryUser__support-icon">
                <img className="settings-paryUser__icon" src={support} alt="" />
              </div>
            </div>
          </div>
          <h3 className="heading-tertiary--sub settings-paryUser__title">
            Contactar a soporte
          </h3>
          <img className="settings-paryUser__arrow" src={Arrow} alt="arrow" />
        </div>
        <Tabbar />
      </div>
    </>
  );
}
