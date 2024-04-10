import './Login.scss';

import LoginCarousel from './LoginCarousel/LoginCarousel';
import LoginForm from './LoginForm/LoginForm';
import LoginPage from './LoginPage/LoginPage';
import Welcome from './Welcome/Welcome';
import { useState } from 'react';

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  if (loading) return <div>loading..</div>;
  else
    return (
      <div>
        {showLogin ? (
          login ? (
            <LoginPage />
          ) : (
            <Welcome setLoading={setLoading} setLogin={setLogin} />
          )
        ) : (
          <LoginCarousel setShowLogin={setShowLogin} />
        )}
      </div>
    );
}

export default Login;
