import React, { useEffect } from 'react';
import './Welcome.scss';
import wedrink_logo from '../../../../assets/logo_wedrink.svg';
import icon_google from '../../../../assets/login/icon_google.svg';
import icon_facebook from '../../../../assets/login/icon_facebook.svg';
import icon_mail from '../../../../assets/login/icon_mail.svg';
import icon_instagram from '../../../../assets/login/icon_instagram.svg';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { logInUser } from '../../../../redux/slices/global/user';

const { REACT_APP_API } = process.env;
const Welcome = ({ setLogin, setLoading }) => {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API}/auth/login/success`, {
        withCredentials: true
      });
      console.log('LOGIN SUCCESS', response);
      dispatch(logInUser(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const loginGoogle = () => {
    const googleWindow = window.open(`${REACT_APP_API}/auth/google`, '_self');
    googleWindow.onbeforeunload = () => {
      setLoading(true);
      getUser();
    };
    console.log('window open', googleWindow);
  };
  const loginFacebook = () => {
    const facebookleWindow = window.open(
      `${REACT_APP_API}/auth/facebook`,
      '_self'
    );
    facebookleWindow.onbeforeunload = () => {
      setLoading(true);
      getUser();
      alert('close window');
    };
  };
  const loginInstagram = () => {
    const instagramWindow = window.open(
      `${REACT_APP_API}/auth/instagram`,
      '_self'
    );
    instagramWindow.close = () => {
      setLoading(true);
      getUser();
    };
  };

  return (
    <div className="welcome-container layout-primary">
      <div className="logo-container">
        <img src={wedrink_logo} alt="WeDrink" />
        <h2 className="heading-secondary-sub">¡Bienvenido!</h2>
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
        {/* <button className="login-btn" onClick={() => loginInstagram()}>
          <img src={icon_instagram} alt="instagram" />
          <span>Inicia sesión con Instagram</span>
        </button> */}
        <button className="login-btn" onClick={() => setLogin('mail')}>
          <img src={icon_mail} alt="mail" />
          <span>Continua con correo electrónico</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
