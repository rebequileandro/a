import './SignUpForm.scss';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Lottie from 'lottie-react';
import { TextField } from '@mui/material';

import loadingAnimation from '../../../../assets/loading.json';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import validateSignUpForm from './validateSignUpForm';
import { logInUser } from '../../../../redux/store/slices/user';
import InputDiv from '../../../../components/global/InputDiv/InputDiv';
import Validate from '../../../../utils/validation';

const initialState = {
  name: '',
  email: '',
  role: 'fiestero',
  password: '',
  confirmPassword: '',
  birthday: '',
  tyc: false
};

export default function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

      const rawResponse = await fetch(
        process.env.REACT_APP_API + '/register/fiestero',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: signUpData.name,
            email: signUpData.email,
            password: signUpData.password,
            rol: signUpData.role
          })
        }
      );

      const user = await rawResponse.json();

      if (user.success === false) {
        setInputErrors({ ...inputErrors, tyc: user.message });
        setLoading(false);
      } else {
        setLoading(false);
        dispatch(logInUser(user));
        navigate('/');
      }
    }
  };

  return (
    <div className="sign-up-form">
      <div className="sign-up-border">
        <div className="sign-up-content">
          <form action="/">
            {step === 1 ? (
              <div className="step">
                {/* NOMBRE COMPLETO */}
                <InputDiv
                  inputProps={{
                    type: 'text',
                    name: 'signup_name',
                    id: 'signup_name',
                    spellCheck: 'false',
                    value: signUpData.name
                  }}
                  label="Nombre completo"
                  setState={createSetState('name')}
                  error={inputErrors.name}
                  onBlur={() => validate('name')}
                />

                {/* EMAIL */}
                <InputDiv
                  inputProps={{
                    type: 'email',
                    name: 'signup_email',
                    id: 'signup_email',
                    spellCheck: 'false',
                    value: signUpData.email
                  }}
                  label="Email"
                  setState={createSetState('email')}
                  error={inputErrors.email}
                  onBlur={() => validate('email')}
                />
              </div>
            ) : step === 2 ? (
              <div className="step">
                {/* PASSWORD */}
                <InputDiv
                  inputProps={{
                    type: 'password',
                    name: 'signup_password',
                    id: 'signup_password',
                    value: signUpData.password
                  }}
                  label="Contraseña"
                  setState={createSetState('password')}
                  error={inputErrors.password}
                  onBlur={() => validate('password')}
                />

                {/* REPEAT PASSWORD */}
                <InputDiv
                  inputProps={{
                    type: 'password',
                    name: 'signup_confirm_password',
                    id: 'signup_confirm_password',
                    value: signUpData.confirmPassword
                  }}
                  label="Confirmar contraseña"
                  setState={createSetState('confirmPassword')}
                  error={inputErrors.confirmPassword}
                  onBlur={() => validate('confirmPassword')}
                />
              </div>
            ) : (
              <div className="step">
                {/* BIRTHDAY */}
                <div
                  className={`input-div datepicker ${
                    inputErrors.birthday && 'error'
                  }`}
                >
                  <label>Fecha de nacimiento</label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      className="mui-datepicker"
                      value={signUpData.birthday}
                      onChange={(newDate) => {
                        setSignUpData({ ...signUpData, birthday: newDate });
                        setInputErrors({ ...inputErrors, birthday: '' });
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          inputProps={{
                            ...params.inputProps,
                            placeholder: 'dd/mm/aaaa'
                          }}
                        />
                      )}
                      disableFuture
                      inputFormat={'dd/MM/yyyy'}
                      minDate={new Date('1900-00-00')}
                    />
                  </LocalizationProvider>
                  {inputErrors.birthday && (
                    <p className="error">*{inputErrors.birthday}</p>
                  )}
                </div>

                {/* TÉRMINOS Y CONDICIONES */}
                <div className="check-input">
                  <div className="input-wrapper">
                    <div
                      className={
                        signUpData.tyc ? 'checkbox checked' : 'checkbox'
                      }
                      name="tyc"
                      onClick={() => {
                        setSignUpData({ ...signUpData, tyc: !signUpData.tyc });
                        setInputErrors({ ...inputErrors, tyc: '' });
                      }}
                    ></div>
                  </div>
                  <label htmlFor="tyc">
                    Acepto la{' '}
                    <a href="/">
                      constitución, políticas y condiciones de Shooza
                    </a>
                  </label>
                </div>
                {inputErrors.tyc && (
                  <p className="check-input-error">*{inputErrors.tyc}</p>
                )}
              </div>
            )}

            <div className="submit-wrapper">
              <input
                className={
                  loading ? 'btn btn--primary loading' : 'btn btn--primary'
                }
                type="submit"
                value="Siguiente"
                id="signup_submit"
                onClick={handleNext}
              />
              {loading && (
                <Lottie
                  animationData={loadingAnimation}
                  className="loading-animation"
                  loop={true}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
