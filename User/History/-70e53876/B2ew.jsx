import Validate from '../../../../../utils/validation';
import { logInUser } from '../../../../../redux/slices/global/user';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import validateStep from './validateSignUpForm';
import axios from 'axios';

const initialState = {
  name: '',
  email: '',
  role: 'fiestero',
  password: '',
  confirmPassword: '',
  birthday: '',
  codArea: '',
  tel: '',
  countryFlag: '',
  tyc: false
};

const { REACT_APP_API } = process.env;

const useSignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Estados locales
  const [data, setData] = useState({
    ...initialState,
    codArea: '54',
    countryFlag: '🇦🇷'
  });
  const [errors, setErrors] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const createSetState = (field) => (value) => {
    setData({ ...data, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  const validate = (field) => {
    //si data.field no tiene nada, setea el error de ese campo para enviar el mensaje de error
    if (!data[field]) {
      setErrors({
        ...errors,
        [field]: 'Por favor completa este campo'
      });
      return;
    }
    //valida el campo y setea error con el mensaje que retorna Validate si no es un valor apropiado
    if (Validate[field]) {
      const message = Validate[field](data);
      setErrors({ ...errors, [field]: message });
    }
  };

  const handlePrev = () => {
    step === 1 ? navigate(-1) : setStep(step - 1);
  };

  const handleNext = async () => {
    let validation;
    if (step === 1) {
      try {
        const response = await axios.post(
          `${REACT_APP_API}/global/validatemail`,
          {
            email: data.email
          }
        );
        validation = validateStep.one(data, setErrors);
      } catch (error) {
        if (error.response.status === 400) {
          setErrors({ ...errors, email: error.response.data.message });
        }
      }
    }
    if (step === 2) {
      validation = validateStep.two(data, setErrors);
    }
    if (validation) setStep(step + 1);
  };

  const handleSubmit = async () => {
    const validation = validateStep.three(data, setErrors);

    if (validation) {
      setLoading(true);

      const birthDay = `${data.birthday.getDate()}`;
      const birthMonth = `${data.birthday.getMonth() + 1}`;
      const birthYear = data.birthday.getFullYear();

      const postData = {
        name: data.name,
        email: data.email.toLowerCase(),
        phone: {
          flag: data.countryFlag,
          prefix: `+${data.codArea}`,
          number: data.tel
        },
        password: data.password,
        rol: data.role,
        dateOfBirth: `${birthDay.padStart(2, '0')}/${birthMonth.padStart(
          2,
          '0'
        )}/${birthYear}`
      };

      // console.log(postData);

      try {
        const response = await axios.post(
          REACT_APP_API + '/partyuser/register/',
          postData
        );

        if (response.data.status !== 'success') {
          throw new Error(response.data.message);
        }

        setLoading(false);
        dispatch(logInUser(response.data.data));
        navigate('/');
      } catch (error) {
        console.log('REGISTER', error.response?.data);
        setErrors({
          ...errors,
          tyc: error.response?.data?.message || error.message
        });
        setLoading(false);
      }
    }
  };
  console.log(data.birthday);
  return {
    data,
    errors,
    loading,
    step,
    createSetState,
    validate,
    handleNext,
    handlePrev,
    handleSubmit,
    setData,
    setErrors
  };
};

export default useSignUpForm;
