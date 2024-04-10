import './edit_my_account.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../../../../components/global/Header/Header';
import InputDiv from '../../../../../components/global/InputDiv/InputDiv';
import loadingAnimation from '../../../../../assets/loading.json';
import Lottie from 'lottie-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentUser,
  updatePassword
} from '../../../../../redux/slices/global/user';
import Validate from '../../../../../utils/validation';
import { StatusPopUp } from '../../../../../components/global/StatusPopUp/StatusPopUp';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const initialState = {
    password: '',
    newPassword: '',
    confirmNewPassword: ''
  };
  const [input, setInput] = useState(initialState);
  const [inputErrors, setInputErrors] = useState(initialState);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputErrors(initialState);
    const newInputErrors = { ...initialState };
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
      dispatch(
        updatePassword(
          {
            password: input.password,
            newPassword: input.newPassword
          },
          user.id ? user.id : user._id
        )
      ).then((response) => {
        setLoading(false);
        if (response.data?.status === 'success') {
          setStatus(response.data);
        }
        if (response.response.data.status === 'bad request') {
          setStatus(response.response.data);
        }
      });
    }
  };
  console.log('STATUS', status);
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
              type: 'password',
              name: 'password',
              value: input.password
            }}
            error={inputErrors.password}
          />
          <InputDiv
            onChange={handleChange}
            label={'Ingresar contraseña nueva:'}
            inputProps={{
              type: 'password',
              name: 'newPassword',
              value: input.newPassword
            }}
            error={inputErrors.newPassword}
          />
          <InputDiv
            onChange={handleChange}
            label={'Repetir contraseña nueva:'}
            inputProps={{
              type: 'password',
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
      {status ? (
        <StatusPopUp
          title={status.message}
          status={status.status === 'success' ? true : false}
          redirect={() => navigate(-1)}
          button={'Aceptar'}
        />
      ) : null}
    </>
  );
};

export default ChangePassword;
