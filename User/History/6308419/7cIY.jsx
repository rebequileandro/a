import './LoginPage.scss';

import Logo from '../../../../assets/logo_wedrink.png';

import { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';

export default function LoginPage() {
  const [selectedPage, setSelectedPage] = useState('login');

  const selectorStyles = {
    transform: selectedPage === 'login' ? 'none' : 'translateX(100%)'
  };

  return (
    <div className="login-page layout-primary">
      <img className="logo" src={Logo} alt="" />
      <div className="page-selector-container">
        < className="page-selector">
          
            <div className="selector" style={selectorStyles}></div>
            <button
              className="button"
              onClick={() => setSelectedPage('login')}
              style={{ opacity: selectedPage === 'login' ? 1 : 0.5 }}
            >
              Inicia sesión
            </button>
            <button
              className="button"
              onClick={() => setSelectedPage('signup')}
              style={{ opacity: selectedPage === 'signup' ? 1 : 0.5 }}
            >
              Crea una cuenta
            </button>
          
        </div>
      </div>

      {selectedPage === 'login' ? <LoginForm /> : <SignUpForm />}
    </div>
  );
}
