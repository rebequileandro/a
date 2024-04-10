// Main Login page container. Renders LoginCarousel or LoginMethodsPage depending on whether the user has already seen the welcome carousel or not.

import './Login.scss';
import { useEffect } from 'react';
import LoginCarousel from './LoginCarousel/LoginCarousel';
import LoginMethodsPage from './LoginMethodsPage/LoginMethodsPage';
import useLogin from './useLogin';

function Login() {
  const { isFirstTime, setIsFirstTime, getAuthUser } = useLogin();

  useEffect(() => {
    if (localStorage.getItem('login')) {
      getAuthUser();
    }
  }, []);

  return (
    <div className="login-container">
      {isFirstTime && <LoginCarousel setIsFirstTime={setIsFirstTime} />}
      {!isFirstTime && <LoginMethodsPage />}
    </div>
  );
}

export default Login;
