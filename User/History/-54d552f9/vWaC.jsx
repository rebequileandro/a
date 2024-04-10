// Login container for logging in OR creating an account with email and password.
import './LoginWithEmail.scss';
import { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './SignUpForm/SignUpForm';
import logo from '../../../../assets/shooza.svg';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import PrimarySwitch from '../../../../components/global/Toggle/PrimarySwitch';

export default function LoginWithEmail() {
  // State for switching between login and signup page
  const [selectedPage, setSelectedPage] = useState('Inicia sesión');
  const [animateLogin, setAnimateLogin] = useState(false);
  const [isLogin, isSignup] = [
    selectedPage === 'Inicia sesión',
    selectedPage === 'Crea una cuenta'
  ];

  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      className="login-page layout-primary"
    >
      {/* Head */}
      <img className="login-page__logo" src={logo} alt="" />
      <PrimarySwitch
        selected={selectedPage}
        setSelected={setSelectedPage}
        option1="Inicia sesión"
        option2="Crea una cuenta"
        size="l"
      />
      {/* Body (forms) */}
      <AnimatePresence>
        {isLogin && <LoginForm animateLogin={animateLogin} />}
        {isSignup && <SignUpForm setAnimateLogin={setAnimateLogin} />}
      </AnimatePresence>
    </motion.div>
  );
}
