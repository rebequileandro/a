// Main Login page container. Renders LoginCarousel or LoginMethodsPage depending on whether the user has already seen the welcome carousel or not.

import './Login.scss';

import { useState } from 'react';

import LoginCarousel from './LoginCarousel/LoginCarousel';
import LoginMethodsPage from './LoginMethodsPage/LoginMethodsPage';
import axios from 'axios';
import { logInUser } from '../../../redux/slices/global/user';

function Login() {
  // Check on localStorage if the user has seen the welcome carousel
  const [hasSeenCarousel, setHasSeenCarousel] = useState(
    localStorage.getItem('hasSeenCarousel') || false
  );

  // Set method to persist hasSeenCarousel
  const setHasSeenCarouselPersist = (data) => {
    setHasSeenCarousel(data);
    localStorage.setItem('hasSeenCarousel', data);
  };
  const getUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/auth/login/success`
      );
      dispatch(logInUser(response.user));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="login-container">
      {!hasSeenCarousel ? (
        <LoginCarousel setHasSeenCarousel={setHasSeenCarouselPersist} />
      ) : (
        <LoginMethodsPage />
      )}
    </div>
  );
}

export default Login;
