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
      if (response.success === false) {
        setInputErrors({ ...inputErrors, password: response.message });
        setLoading(false);
      } else {
        setLoading(false);
        dispatch(logInUser(response.data.data));
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
