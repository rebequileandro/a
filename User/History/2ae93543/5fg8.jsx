import './LoginForm.scss';
import Lottie from 'lottie-react';

import useLoginForm from '../Hooks/useLoginForm';
import Validate from '../../../../utils/validation';
import loadingAnimation from '../../../../assets/loading.json';
import InputDiv from '../../../../components/global/InputDiv/InputDiv';

function LoginForm() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    inputErrors,
    setInputErrors,
    handleSubmit
  } = useLoginForm();

  return (
    <div className="login-form">
      <form action="/" onSubmit={handleSubmit}>
        <InputDiv
          inputProps={{
            type: 'email',
            name: 'login_email',
            id: 'login_email',
            spellCheck: 'false',
            value: email
          }}
          label="Email"
          setState={setEmail}
          error={inputErrors.email}
          onBlur={() => {
            setInputErrors({
              ...inputErrors,
              email: Validate.email({ email })
            });
          }}
          onChange={() => setInputErrors({ password: false, email: false })}
        />

        <InputDiv
          inputProps={{
            type: 'password',
            name: 'login_password',
            id: 'login_password',
            value: password
          }}
          label="Contraseña"
          setState={setPassword}
          error={inputErrors.password}
          onChange={() => setInputErrors({ email: false, password: false })}
        />

        {/* <a className="password-reset" href="/">
          ¿Olvidaste tu contraseña?
        </a> */}

        <div className="submit-wrapper">
          <input
            type="submit"
            value="Aceptar"
            id="login_submit"
            className={
              loading ? 'btn btn--primary loading' : 'btn btn--primary'
            }
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
  );
}

export default LoginForm;
