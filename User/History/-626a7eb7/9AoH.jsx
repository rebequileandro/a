import './Settings.scss';
import Arrow from '../../../assets/icons/icon_arrow-white.svg';
import help from '../../../assets/global/icon_ayuda.svg';
import myAccountIcon from '../../../assets/global/icon_profile.svg';
import payment from '../../../assets/global/icon_payment.svg';
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
    slug: 'account',
    icon: <img src={myAccountIcon} alt="Mi Cuenta" />
  },
  {
    id: 2,
    title: 'Ayuda',
    slug: 'help',
    icon: <img src={help} alt="Ayuda" />
  },
  {
    id: 2,
    title: 'Métodos de pago',
    slug: 'payment',
    icon: <img src={payment} alt="Ayuda" />
  }
];

export default function Settings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <>
      <Header title={'Ajustes'} />
      <div className="settings-paryUser layout-primary">
        <div className="settings-paryUser__menu">
          {menu.map((menuItem, i) => (
            <>
              <div
                className="settings-paryUser__menu-item"
                onClick={() => navigate('/' + menuItem.slug)}
                key={menuItem.id}
              >
                <div className="icon">{menuItem.icon}</div>
                <h3 className="heading-tertiary--main title">
                  {menuItem.title}
                </h3>
                <img className="arrow" src={Arrow} alt="arrow" />
              </div>
              {i < menuItem.length - 1 ? <hr className="line" /> : null}
            </>
          ))}
        </div>

        <div className="logout" onClick={handleLogout}>
          <img src={logoutIcon} alt="" />
          <h3>Cerrar sesión</h3>
        </div>
        <Tabbar />
      </div>
    </>
  );
}
