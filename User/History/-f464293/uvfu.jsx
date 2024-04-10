import React, { useEffect } from 'react';
import './Welcome.scss';
import wedrink_logo from '../../../../assets/logo_wedrink.svg';
import icon_google from '../../../../assets/login/icon_google.svg';
import icon_facebook from '../../../../assets/login/icon_facebook.svg';
import icon_mail from '../../../../assets/login/icon_mail.svg';
import icon_instagram from '../../../../assets/login/icon_instagram.svg';

const { REACT_APP_API } = process.env;
const Welcome = ({ setLogin }) => {
  const loginGoogle = () => {
    window.open(`${REACT_APP_API}/auth/google`, '_self');
  };
  const loginFacebook = () => {
    window.open(`${REACT_APP_API}/auth/facebook`, '_self');
  };
  const loginInstagram = () => {
    window.open(`${REACT_APP_API}/auth/instagram`, '_self');
  };
  return (
    <div className="welcome-container layout-primary">
      <div className="logo-container">
        <img src={wedrink_logo} alt="WeDrink" />
        <h2 className="heading-secondary--sub">¡Bienvenido!</h2>
      </div>
      <div className="login-btn-container">
        <button className="login-btn" onClick={() => loginGoogle()}>
          <img src={icon_google} alt="google" />
          <span>Inicia sesión con Google</span>
        </button>
        <button className="login-btn" onClick={() => loginFacebook()}>
          <img src={icon_facebook} alt="facebook" />
          <span>Inicia sesión con Facebook</span>
        </button>
        <button className="login-btn" onClick={() => loginInstagram()}>
          <img src={icon_instagram} alt="instagram" />
          <span>Inicia sesión con Instagram</span>
        </button>
        <button className="login-btn" onClick={() => setLogin('mail')}>
          <img src={icon_mail} alt="mail" />
          <span>Continua con correo electrónico</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
