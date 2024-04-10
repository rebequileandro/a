import './edit_my_account.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../../../../components/global/Header/Header';
import InputDiv from '../../../../../components/global/InputDiv/InputDiv';
import loadingAnimation from '../../../../../assets/loading.json';
import Lottie from 'lottie-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../../../redux/slices/global/user';
import Validate from '../../../../../utils/validation';

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
  const [inputErrors, setInputErrors] = useState({
    password: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInputErrors = { ...inputErrors };
    const passwordValidate = Validate.password({ password: input.newPassword });
    const passwordValidateConfirm = Validate.confirmPassword({
      password: input.newPassword,
      confirmPassword: input.confirmNewPassword
    });
    !input.password &&
      (newInputErrors.password = 'Ingresa tu contraseña actual');
    passwordValidate && (newInputErrors.newPassword = passwordValidate);
    passwordValidateConfirm &&
      (newInputErrors.confirmNewPassword = passwordValidateConfirm);
    !input.confirmNewPassword &&
      (newInputErrors.confirmNewPassword = 'Las contraseñas no coinciden');
    if (
      newInputErrors.password ||
      newInputErrors.newPassword ||
      newInputErrors.confirmNewPassword
    ) {
      setInputErrors(newInputErrors);
    } else {
      setLoading(true);
    }
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
            onChange={handleChange}
            label={'Ingresa tu contraseña actual para confirmar:'}
            inputProps={{
              name: 'password',
              value: input.password
            }}
            error={inputErrors.password}
          />
          <InputDiv
            onChange={handleChange}
            label={'Ingresar contraseña nueva:'}
            inputProps={{
              name: 'newPassword',
              value: input.newPassword
            }}
            error={inputErrors.newPassword}
          />
          <InputDiv
            onChange={handleChange}
            label={'Repetir contraseña nueva:'}
            inputProps={{
              name: 'confirmNewPassword',
              value: input.confirmNewPassword
            }}
            error={inputErrors.confirmNewPassword}
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
