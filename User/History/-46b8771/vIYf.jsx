import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../../redux/slices/global/user';

import Validate from '../../../../utils/validation';

const useLoginForm = () => {
  const dispatch = useDispatch();

  //Estados locales
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputErrors, setInputErrors] = useState({
    email: false,
    password: false
  });

  //Acción a concretar en el envío
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const emailValidation = Validate.email({ email });
    if (emailValidation) {
      setInputErrors({ ...inputErrors, email: emailValidation });
      return;
    }

    if (!password) {
      setInputErrors({ ...inputErrors, password: 'Ingresa tu contraseña' });
      return;
    }

    if (inputErrors.email || inputErrors.password) {
      return;
    }
    setLoading(true);
    try {
      const responsePartyUser = await axios.post(
        `${process.env.REACT_APP_API}/partyuser/login`,
        {
          email: email,
          password: password
        }
      );
      const responseOwner = await axios.post(
        `${process.env.REACT_APP_API}/organizer/login`,
        {
          email: email,
          password: password
        }
      );
      const responseTeam = await axios.post(
        `${process.env.REACT_APP_API}/team/login`,
        {
          email: email,
          password: password
        }
      );
      console.log(responsePartyUser);
      if (responsePartyUser.status === 'success') {
        setLoading(false);
        dispatch(logInUser(responsePartyUser.data.data));
      } else if (responsePartyUser.status === 'bad request') {
        setInputErrors({ ...inputErrors, password: responsePartyUser.message });
        setLoading(false);
      } else if (responseOwner.status === 'success') {
        setLoading(false);
        dispatch(logInUser(responseOwner.data.data));
      } else if (responseOwner.status === 'bad request') {
        setInputErrors({ ...inputErrors, password: responseOwner.message });
        setLoading(false);
      } else if (responseTeam.status === 'success') {
        setLoading(false);
        dispatch(logInUser(responseTeam.data.data));
      } else if (responseTeam.status === 'bad request') {
        setInputErrors({ ...inputErrors, password: responseTeam.message });
        setLoading(false);
      } else {
        setInputErrors({
          ...inputErrors,
          password: 'usuario no se encuentra registado'
        });
        setLoading(false);
      }
    } catch (err) {
      setInputErrors({
        ...inputErrors,
        password: 'Hubo un error de servidor'
      });
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    inputErrors,
    setInputErrors,
    handleSubmit
  };
};

export default useLoginForm;
