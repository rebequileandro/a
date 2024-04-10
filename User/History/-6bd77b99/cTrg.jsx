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
  const dispatch = useDispatch()

  return (
    <div className="welcome-container">
      <div className="logo-container">
        <img src={wedrink_logo} alt="WeDrink" />
      </div>
      <h2 className="welcome">¡Bienvenido!</h2>
      <div className="login-btn-container">
        <button className="login-btn" >
          <img src={icon_google} alt="google"/>
          <span>Inicia sesión con Google</span>
        </button>
        <button className="login-btn">
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