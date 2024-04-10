import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../../../redux/slices/global/user';

import Validate from '../../../../../utils/validation';

const { REACT_APP_API } = process.env;

const FIELDS = {
  email: '',
  password: ''
};

export default function useLoginForm() {
  const dispatch = useDispatch();

  const [data, setData] = useState(FIELDS);
  const [errors, setErrors] = useState(FIELDS);
  const [loading, setLoading] = useState(false);
  const setError = (field, msg) => setErrors({ ...errors, [field]: msg });

  // SetState creator for input divs
  const createSetState = (field) => (value) => {
    setData({ ...data, [field]: value });
    setError(field, '');
  };

  // Post login data to endpoint
  const postLogin = async (endpoint) =>
    await axios.post('31.220.31.8/api' + endpoint, data);

  // Evaluate server response for login
  // -- Returns true if a user has been found in the db
  const handleResponse = (response) => {
    if (response.data.status === 'success') {
      setLoading(false);
      dispatch(logInUser(response.data.data));
      return true;
    }

    if (response.data.status === 'bad request') {
      setErrors({ ...errors, password: response.data.message });
      return true;
    }

    return false;
  };

  /*****************
   * HANDLE SUBMIT *
   *****************/
  const handleSubmit = async () => {
    // Frontend Validation:
    const newErrors = {
      email: Validate.email(data),
      password: Validate.password(data)
    };

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    // If all good, send data to the server
    try {
      setLoading(true);
      const responsePartyUser = await postLogin('/partyuser/login');
      const responseOwner = await postLogin('/organizer/login');
      const responseTeam = await postLogin('/global/team/login');

      // handleResponse() checks if a user has been found for each endpoint. If no user found in any of the endpoints, then the user is not registered
      if (
        !handleResponse(responsePartyUser) &&
        !handleResponse(responseOwner) &&
        !handleResponse(responseTeam)
      ) {
        setError('password', 'Usuario no registrado');
      }

      setLoading(false);
    } catch (err) {
      console.log('ERRORRRRRRR', err);
      if (err.response.data.message === 'Usuario no registrado') {
        setError('password', err.response.data.message);
        setLoading(false);
      } else {
        setError('password', 'Hubo un error de servidor');
        setLoading(false);
      }
    }
  };

  return {
    data,
    createSetState,
    loading,
    errors,
    handleSubmit
  };
}
