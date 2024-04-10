import Validate from '../../../../../utils/validation';
import { logInUser } from '../../../../../redux/slices/global/user';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import validateStep from './validateSignUpForm';
import axios from 'axios';
import { removeSpaces } from '../../../../../utils/regex';
//TODOS LOS DATOS DE TELEFONO ESTAN COMENTADOS PARA AGILIZAR LOGIN "POR EL MOMENTO!" NO BORRAR
const initialState = {
  name: '',
  email: '',
  role: 'fiestero',
  password: '',
  confirmPassword: '',
  birthday: '',
  // codArea: '',
  // tel: '',
  // countryFlag: '',
  tyc: false
};

const { REACT_APP_API } = process.env;

const useSignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Estados locales
  // const [data, setData] = useState({
  //   ...initialState,
  //   codArea: '54',
  //   countryFlag: '🇦🇷'
  // });
  const [data, setData] = useState(initialState);
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
    sessionStorage.setItem('formData', JSON.stringify(data));
    step === 1 ? navigate(-1) : setStep(step - 1);
  };

  const handleNext = async () => {
    let validation;
    sessionStorage.setItem('formData', JSON.stringify(data));

    if (step === 1) {
      try {
        const response = await axios.post(
          `${REACT_APP_API}/global/validatemail`,
          {
            email: removeSpaces(data.email).toLowerCase()
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateStep.three(data, setErrors);
    if (validation) {
      setLoading(true);
      const postData = {
        name: data.name,
        email: removeSpaces(data.email).toLowerCase(),
        // phone: {
        //   flag: data.countryFlag,
        //   prefix: `+${data.codArea}`,
        //   number: data.tel
        // },
        password: data.password,
        rol: data.role,
        dateOfBirth: data.birthday
      };
      try {
        const response = await axios.post(
          REACT_APP_API + '/partyuser/register/',
          postData
        );
        //al enviar los datos eliminamos el sessionStorage que guarda la info para evitar memory leaks
        window.sessionStorage.removeItem('formData');

        if (response.data.status !== 'success') {
          throw new Error(response.data.message);
        }

        setLoading(false);
        dispatch(logInUser(response.data.data));
        navigate('/');
      } catch (error) {
        console.log(error.response?.data);
        setErrors({
          ...errors,
          tyc: error.response?.data?.message || error.message
        });
        setLoading(false);
      }
    }
  };

  return {
    data,
    errors,
    loading,
    step,
    setStep,
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
