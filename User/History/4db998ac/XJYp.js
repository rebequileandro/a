import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { logInUser } from '../../../redux/slices/global/user';

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
      const response = await axios.get(
        `${process.env.REACT_APP_API}/auth/login/success`
      );
      dispatch(logInUser(response.user));
    } catch (error) {
      console.log(error);
    }
  };

  return { isFirstTime, setIsFirstTime, getAuthUser };
}
