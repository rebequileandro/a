import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import routes from '../../../../models/routes.models';
import Button from '../../../../components/global/Button/Button';
import InputDiv from '../../../../components/global/InputDiv/InputDiv';
import { StatusPopUp } from '../../../../components/global/StatusPopUp/StatusPopUp';
import Validate from '../../../../utils/validation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import logo from '../../../../assets/logo_wedrink.png';
import './ForgotPassword.scss';

const FIELDS = {
  email: '',
  codArea: '',
  tel: ''
};

const { REACT_APP_API } = process.env;

export default function PasswordReset() {
  const { method } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(FIELDS);
  const [data, setData] = useState(FIELDS);
  const [popupContent, setPopupContent] = useState(false);

  const createSetState = (field) => (value) => {
    setData({ ...data, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  const validate = (type) => {
    const validationError = Validate[type](data);

    if (validationError) setErrors({ ...errors, [type]: validationError });
  };

  const handleSubmit = async () => {
    const error = Validate['email'](data);
    if (error) {
      setErrors({ ...errors, email: error });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(REACT_APP_API + '/forgotpassword', {
        email: data.email
      });

      if (response.data.status === 'success') {
        setPopupContent({
          status: true,
          title: 'Recupera la contraseña',
          description:
            'Te enviamos un correo electrónico para que puedas actualizar tu contraseña.',
          redirect: () => navigate('/'),
          button: 'Aceptar'
        });
      } else {
        throw new Error('Hubo un error o el email no existe');
      }
    } catch (err) {
      console.log(err.message);
      setPopupContent({
        status: false,
        title: 'Hubo un error al enviarte el correo',
        description: 'Intentalo nuevamente para recibir el correo',
        redirect: () => setPopupContent(false),
        button: 'Aceptar'
      });
    }
    setLoading(false);
  };

  return (
    <>
      <div className="forgot-password layout-primary">
        <img src={logo} className="logo" alt="Logo de WeDrink" />

        <h1 className="heading">Recupera tu contraseña</h1>

        <p className="content">
          Ingresa{' '}
          {method === 'email'
            ? 'la dirección de email asociada'
            : 'el número de telefono asociado'}{' '}
          a tu cuenta
        </p>

        {/* EMAIL */}
        {method === 'email' && (
          <InputDiv
            inputProps={{
              type: 'email',
              spellCheck: 'false',
              value: data.email
            }}
            label="Email"
            setState={createSetState('email')}
            error={errors.email}
            onBlur={() => validate('email')}
          />
        )}

        {/* TEL */}
        {method === 'tel' && (
          <div className="tel-inputs">
            <InputDiv
              inputProps={{
                type: 'number',
                value: data.codArea
              }}
              label="Cód. área:"
              setState={createSetState('codArea')}
              error={errors.codArea}
            />

            <InputDiv
              inputProps={{
                type: 'number',
                value: data.tel,
                placeholder: '1123456789'
              }}
              label="Número de teléfono:"
              setState={createSetState('tel')}
              error={errors.tel}
            />
          </div>
        )}

        <Button type="submit" onClick={handleSubmit} loading={loading}>
          Aceptar
        </Button>

        <Link to={routes.global.loginWithEmail} className="link highlight">
          Volver a inicio de sesión
        </Link>

        {/* {method === 'email' && (
          <Link to={routes.global.forgotPassword + '/tel'} className="link">
            ¿Olvidaste tu correo electrónico?
          </Link>
        )} */}
      </div>
      <StatusPopUp
        isOpen={popupContent}
        status={popupContent.status}
        title={popupContent.title}
        description={popupContent.description}
        redirect={popupContent.redirect}
        button={popupContent.button}
      />
    </>
  );
}
