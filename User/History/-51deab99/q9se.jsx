// Page for selecting the preferred login method into WeDrink
import './LoginMethodsPage.scss';
import wedrinkLogo from '../../../../assets/shooza.svg';
import { loginMethods } from './getLoginMethods';
import LoginMethodButton from './LoginMethodButton/LoginMethodButton';
import { motion } from 'framer-motion';

export default function LoginMethodsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.5 } }}
      className="login-methods layout-primary"
    >
      {/* HEAD */}
      <div className="login-methods__header">
        <img
          className="login-methods__header__image"
          src={wedrinkLogo}
          alt="WeDrink"
        />
        <h2>shooza</h2>
        <h2 className="login-methods__header__title">¡Bienvenido!</h2>
      </div>

      {/* BUTTONS */}
      <div className="login-methods__buttons">
        {loginMethods.map((method) => (
          <LoginMethodButton key={method.id} method={method} />
        ))}
      </div>
    </motion.div>
  );
}
