// Login form. Prompts the user for email and password, and logs the user in if the credentials are valid.
import './LoginForm.scss';
import InputDiv from '../../../../../components/global/InputDiv/InputDiv';
import Button from '../../../../../components/global/Button/Button';
import { Link } from 'react-router-dom';
import routes from '../../../../../models/routes.models';
import useLoginForm from './useLoginForm';
import { motion } from 'framer-motion';

function LoginForm({ animateLogin }) {
  const { data, createSetState, loading, errors, handleSubmit } =
    useLoginForm();

  return (
    <>
      <motion.div
        initial={animateLogin ? { opacity: 0, x: -30 } : false}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ opacity: { bounce: 0 } }}
        className="login-form"
      >
        <form onSubmit={handleSubmit}>
          {/* EMAIL INPUT */}
          <InputDiv
            inputProps={{
              type: 'email',
              spellCheck: 'false',
              value: data.email
            }}
            label="Email"
            setState={createSetState('email')}
            error={errors.email}
          />

          {/* PASSWORD INPUT */}
          <InputDiv
            inputProps={{
              type: 'password',
              value: data.password
            }}
            label="Contraseña"
            setState={createSetState('password')}
            error={errors.password}
          />

          <Button type="submit" loading={loading}>
            Aceptar
          </Button>
        </form>
      </motion.div>

      {/* FORGOT PASSWORD */}
      <motion.div
        className="reset-password-btns"
        initial={animateLogin ? { opacity: 0, x: -30 } : false}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ opacity: { bounce: 0 } }}
      >
        <Link to={routes.global.forgotPassword + '/email'} className="link">
          ¿Olvidaste tu contraseña?
        </Link>
      </motion.div>
    </>
  );
}

export default LoginForm;
