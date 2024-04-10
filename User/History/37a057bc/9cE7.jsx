import React from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInUser } from '../../../../redux/slices/global/user';

import Validate from '../../../../utils/validation';
import validateSignUpForm from '../SignUpForm/validateSignUpForm';

const initialState = {
  name: '',
  email: '',
  role: 'fiestero',
  password: '',
  confirmPassword: '',
  birthday: '',
  tyc: false
};

const useSignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Estados locales
  const [signUpData, setSignUpData] = useState(initialState);
  const [inputErrors, setInputErrors] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const createSetState = (field) => (value) => {
    setSignUpData({ ...signUpData, [field]: value });
    setInputErrors({ ...inputErrors, [field]: '' });
  };

  const validateEmptyField = (field) =>
    !signUpData[field] ? 'Por favor completa este campo.' : '';

  const validate = (field) => {
    if (!signUpData[field]) {
      setInputErrors({
        ...inputErrors,
        [field]: 'Por favor completa este campo'
      });
      return;
    }

    if (Validate[field]) {
      const message = Validate[field](signUpData);
      if (message) setInputErrors({ ...inputErrors, [field]: message });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validation = validateSignUpForm(
      signUpData,
      inputErrors,
      setInputErrors,
      validateEmptyField,
      step
    );

    if (validation) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateSignUpForm(
      signUpData,
      inputErrors,
      setInputErrors,
      validateEmptyField
    );

    if (validation) {
      setLoading(true);
      try {
        console.log('DATA', {
          name: signUpData.name,
          email: signUpData.email,
          password: signUpData.password,
          rol: signUpData.role,
          dateOfBirth: '13/06/1998',
          phone: 1154596266
        });
        const rawResponse = await fetch(
          process.env.REACT_APP_API + '/partyuser/register/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: signUpData.name,
              email: signUpData.email,
              password: signUpData.password,
              rol: signUpData.role,
              dateOfBirth: signUpData.birthday,
              phone: 1154596266
            })
          }
        );
        const user = await rawResponse.json();
        console.log('REGISTER USER', user);
        if (user.status === 'error') {
          setInputErrors({ ...inputErrors, tyc: user.data[0].message });
          setLoading(false);
        } else {
          setLoading(false);
          dispatch(logInUser(user));
          navigate('/');
        }
      } catch (error) {
        console.log('REGISTER', error);
        setInputErrors({ ...inputErrors, tyc: error.data[0].message });
      }
    }
  };

  return {
    signUpData,
    inputErrors,
    loading,
    step,
    createSetState,
    validateEmptyField,
    validate,
    handleNext,
    handleSubmit,
    setSignUpData,
    setInputErrors
  };
};

export default useSignUpForm;
