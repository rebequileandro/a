import './SignUpForm.scss';

import Lottie from 'lottie-react';

import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import loadingAnimation from '../../../../assets/loading.json';

import useSignUpForm from '../Hooks/useSignUpForm';
import InputDiv from '../../../../components/global/InputDiv/InputDiv';

export default function SignUpForm() {
  const {
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
  } = useSignUpForm();

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
                onClick={step <= 2 ? handleNext : handleSubmit}
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
