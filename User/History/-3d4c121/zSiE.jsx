import './edit_my_account.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../../../../components/global/Header/Header';
import InputDiv from '../../../../../components/global/InputDiv/InputDiv';
import loadingAnimation from '../../../../../assets/loading.json';
import Lottie from 'lottie-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../../../redux/slices/global/user';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const user = useSelector(getCurrentUser);

  const [input, setInput] = useState({
    email: user.email,
    password: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header title={'Mi cuenta'} backbutton={() => navigate(-1)} />
      <div className="account layout-primary">
        <h2 className="heading-secondary-sub--upper account__title">
          Mail Y Número de teléfono
        </h2>
        <form onSubmit={handleSubmit} className="account__form">
          <InputDiv
            label={'Ingresa tu contraseña actual para confirmar:'}
            inputProps={{
              name: 'password'
            }}
          />
          <InputDiv
            label={'Ingresar contraseña nueva:'}
            inputProps={{
              name: 'newPassword'
            }}
          />
          <InputDiv
            label={'Repetir contraseña nueva:'}
            inputProps={{
              name: 'confirmNewPassword'
            }}
          />
          <div className="account__buttons-container">
            <button className="btn-primary--l account__save-btn" type="submit">
              {loading ? (
                <Lottie
                  animationData={loadingAnimation}
                  className="account__loading-animation"
                  loop={true}
                />
              ) : (
                'Guardar cambios'
              )}
            </button>
            <div className="anchor-primary--bold">
              <Link to={-1}>Cancelar</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
