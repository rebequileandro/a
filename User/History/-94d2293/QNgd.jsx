import './MyAccount.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../redux/slices/global/user';
import { Header } from '../../../components/global/Header/Header';
import profilePicture from '../../../assets/global/icon_profile.svg';
export default function MyAccount() {
  const navigate = useNavigate();
  const user = useSelector(getCurrentUser);
  return (
    <div className="my-account">
      <Header backbutton={() => navigate('/settings')} title={'Mi cuenta'} />
      <div>
        <div>
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
    </div>
  );
}
