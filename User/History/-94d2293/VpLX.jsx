import './MyAccount.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../redux/slices/global/user';
import { Header } from '../../../components/global/Header/Header';
import profilePicture from '../../../assets/global/icon_profile.svg';
export default function MyAccount() {
  const navigate = useNavigate();
  const user = useSelector(getCurrentUser);
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
  return (
    <div className="my-account">
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
                />
              ) : (
                <img
                  className="my-account__icon"
                  src={profilePicture}
                  alt="foto de perfil"
                />
              )}
            </div>
          </div>
        </div>
        <h3 className="heading-tertiary--sub my-account__user-name">
          {user.name}
        </h3>
      </div>
      <div className="my-account__menu-container"></div>
    </div>
  );
}
