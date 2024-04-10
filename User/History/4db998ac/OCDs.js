import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { logInUser } from '../../../redux/slices/global/user';

const { REACT_APP_API } = process.env;

export default function useLogin() {
  const dispatch = useDispatch();

  // Check on localStorage if the user has seen the welcome carousel
  const [isFirstTime, _setIsFirstTime] = useState(
    localStorage.getItem('isFirstTime') ? false : true
  );

  // Set method to persist isFirstTime
  const setIsFirstTime = (data) => {
    _setIsFirstTime(data);
    localStorage.setItem('isFirstTime', data);
  };

  const getAuthUser = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API}/auth/login/success`, {
        withCredentials: true
      });
      console.log("LOGIN REDES", response)
      dispatch(logInUser(response.data.data.user));
    } catch (error) {
      console.log(error);
    }
  };

  return { isFirstTime, setIsFirstTime, getAuthUser };
}
