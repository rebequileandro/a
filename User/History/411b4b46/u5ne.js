// Login methods array used in LoginMethodsPage.jsx

import icon_google from '../../../../assets/login/icon_google.svg';
import icon_facebook from '../../../../assets/login/icon_facebook.svg';
import icon_mail from '../../../../assets/login/icon_mail.svg';
import icon_instagram from '../../../../assets/login/icon_instagram.svg';
import icon_apple from '../../../../assets/login/icon_apple.svg';
import routes from '../../../../models/routes.models';
const { REACT_APP_API } = process.env;

const loginGoogle = () => window.open(`${REACT_APP_API}/auth/google`, '_self');

const loginFacebook = () =>
  window.open(`${REACT_APP_API}/auth/facebook`, '_self');

const loginInstagram = () =>
  window.open(`${REACT_APP_API}/auth/instagram`, '_self');

const loginApple = () => window.open(`${REACT_APP_API}/auth/apple`, '_self');

const loginMethodsApple = [
  {
    id: 1,
    name: 'Google',
    label: 'Inicia sesión con Google',
    icon: icon_google,
    onClick: loginGoogle
  },
  {
    id: 2,
    name: 'Facebook',
    label: 'Inicia sesión con Facebook',
    icon: icon_facebook,
    onClick: loginFacebook
  },
  {
    id: 3,
    name: 'Apple',
    label: 'Inicia sesión con Apple',
    icon: icon_apple,
    onClick: loginApple
  },
  {
    id: 4,
    name: 'Email',
    label: 'Continúa con correo electrónico',
    icon: icon_mail,
    href: routes.global.loginWithEmail
  }
]
const loginMethodsAndroid = loginMethodsApple.filter(e => e.id !== 3)

export const loginMethods = navigator.userAgent.match(/Android/i) ? loginMethodsAndroid : loginMethodsApple
