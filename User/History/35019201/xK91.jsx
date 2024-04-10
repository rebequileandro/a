import './Login.scss';

import LoginCarousel from './LoginCarousel/LoginCarousel';
import LoginPage from './LoginPage/LoginPage';
import Welcome from './Welcome/Welcome';
import { useEffect, useState } from 'react';
import { Loading } from '../../../components/global/Loader/Loader';
import { logInUser } from '../../../redux/slices/global/user';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const { REACT_APP_API } = process.env;

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${REACT_APP_API}/auth/login/success`, {
        withCredentials: true
      });
      dispatch(logInUser(response.data.data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  if (loading) return <Loading />;
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
