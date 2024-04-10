import React, { useEffect } from 'react'
import './Welcome.scss'
import wedrink_logo from '../../../assets/logo_wedrink.png'
import icon_google from '../../../assets/login/icon_google.svg'
import icon_facebook from '../../../assets/login/icon_facebook.svg'
import icon_mail from '../../../assets/login/icon_mail.svg'
import { useDispatch } from 'react-redux'
import { logInUser } from '../../../redux/store/slices/user'
const { REACT_APP_API } = process.env
const Welcome = ({setLogin}) => {
  const dispatch = useDispatch();
  const loginGoogle = () => {
    window.open(`${REACT_APP_API}/auth/google`, "_self");
  };
  const loginFacebook = () => {
    window.open(`${REACT_APP_API}/auth/facebook`, "_self");
  };
  const getUser = async () => {
    fetch(`${REACT_APP_API}/auth/login/success`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        console.log(resObject);
        dispatch(logInUser(resObject.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="welcome-container">
      <div className="logo-container">
        <img src={wedrink_logo} alt="WeDrink" />
      </div>
      <h2 className="welcome">¡Bienvenido!</h2>
      <div className="login-btn-container">
        <button className="login-btn" onClick={() => loginGoogle()}>
          <img src={icon_google} alt="google"/>
          <span>Inicia sesión con Google</span>
        </button>
        <button className="login-btn" onClick={() => loginFacebook()}>
          <img src={icon_facebook} alt="facebook" />
          <span>Inicia sesión con Facebook</span>
        </button>
        <button className="login-btn" onClick={() => setLogin("mail")}>
          <img src={icon_mail} alt="mail" />
          <span>Continua con correo electrónico</span>
        </button>
      </div>
    </div>
  );
}

export default Welcome