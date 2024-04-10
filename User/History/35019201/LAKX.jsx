// Main Login page container. Renders LoginCarousel or LoginMethodsPage depending on whether the user has already seen the welcome carousel or not.

import './Login.scss';
import { useEffect } from 'react';
import LoginCarousel from './LoginCarousel/LoginCarousel';
import LoginMethodsPage from './LoginMethodsPage/LoginMethodsPage';
import useLogin from './useLogin';
import { useState } from 'react';
import { Loading } from '../../../components/global/Loader/Loader';

function Login() {
  const { isFirstTime, setIsFirstTime, getAuthUser } = useLogin();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('login')) {
      getAuthUser();
    }
  }, []);

  return (
    <div className="login-container">
      {isFirstTime && <LoginCarousel setIsFirstTime={setIsFirstTime} />}
      {!isFirstTime && loading ? <Loading /> : <LoginMethodsPage />}
    </div>
  );
}

export default Login;
