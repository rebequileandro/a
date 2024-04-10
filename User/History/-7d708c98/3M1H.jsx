import { useState } from 'react';
import InputDiv from '../../../../../components/global/InputDiv/InputDiv';
import Button from '../../../../../components/global/Button/Button';
import { useParams, useNavigate } from 'react-router-dom';

import Validate from '../../../../../utils/validation';
import { StatusPopUp } from '../../../../../components/global/StatusPopUp/StatusPopUp';

import logo from '../../../../../assets/logo_wedrink.png';

import './ChangePasswordForm.scss';
import axios from 'axios';

const FIELDS = {
  password: '',
  confirmPassword: ''
};
const { REACT_APP_API } = process.env;

export default function ChangePasswordForm() {
  const [errors, setErrors] = useState(FIELDS);
  const [data, setData] = useState(FIELDS);
  const [loading, setLoading] = useState(false);
  const { idUser, token } = useParams();
  const [popupContent, setPopupContent] = useState(false);
  const navigate = useNavigate();

  const validate = (type) => {
    const validationError = Validate[type](data);
    if (validationError) setErrors({ ...errors, [type]: validationError });
  };

  const createSetState = (field) => (value) => {
    setData({ ...data, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordError = Validate['password'](data);
    const confirmPasswordError = Validate['confirmPassword'](data);

    if (passwordError) setErrors({ ...errors, password: passwordError });
    if (confirmPasswordError)
      setErrors({ ...errors, confirmPassword: confirmPasswordError });
    if (passwordError || confirmPasswordError) return;

    setLoading(true);

    try {
      const response = await axios.post(
        `${REACT_APP_API}/forgotpassword/reset-password/${idUser}/${token}`,
        {
          password: data.password,
          password2: data.confirmPassword
        }
      );

      if (response.data.status === 'success') {
        setPopupContent({
          status: true,
          title: 'Tu contraseña se actualizó con éxito',
          description: 'Te redirigemos a la página de inicio de sesión',
          button: 'Aceptar',
          redirect: () => navigate('/')
        });
      } else {
        throw new Error('Hubo un error de servidor');
      }
    } catch (err) {
      console.log(err.message);
      setPopupContent({
        status: false,
        title: 'Hubo un error al cambiar tu contraseña',
        description: 'Por favor intentalo de nuevo',
        button: 'Aceptar',
        redirect: () => setPopupContent(false)
      });
      setLoading(false);
    }
  };

  return (
    <>
      <div className="forgot-password layout-primary">
        <img src={logo} className="logo" alt="Logo de WeDrink" />
        <div className="change-password-form">
          <h1>Nueva contraseña</h1>

          {/* PASSWORD */}
          <InputDiv
            inputProps={{
              type: 'password',
              name: 'password_reset_password',
              id: 'password_reset_password',
              value: data.password
            }}
            label="Contraseña"
            setState={createSetState('password')}
            error={errors.password}
            onBlur={() => validate('password')}
          />

          {/* REPEAT PASSWORD */}
          <InputDiv
            inputProps={{
              type: 'password',
              name: 'password_reset_confirm_password',
              id: 'password_reset_confirm_password',
              value: data.confirmPassword
            }}
            label="Confirmar contraseña"
            setState={createSetState('confirmPassword')}
            error={errors.confirmPassword}
            onBlur={() => validate('confirmPassword')}
          />

          <Button type="submit" onClick={handleSubmit} loading={loading}>
            Cambiar contraseña
          </Button>
        </div>
      </div>
      <StatusPopUp
        isOpen={popupContent}
        title={popupContent.title}
        description={popupContent.description}
        button={popupContent.button}
        redirect={popupContent.redirect}
        status={popupContent.status}
      />
    </>
  );
}
