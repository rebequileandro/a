// import { current } from '@reduxjs/toolkit';

const Validate = {
  name: (signUpData) => {
    const data = signUpData.name;
    if (data.length >= 50) return 'Este campo no debe tener más de 50 letras';

    if (/\d/.test(data)) return 'Tu nombre no puede contener números';

    if (/[`!@#$%^&*()_+\-=[\]{};:"\\|,<>/?~]/.test(data))
      return 'Tu nombre no puede contener caracteres especiales';

    return false;
  },

  email: (signUpData) => {
    const data = signUpData.email;
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(data))
      return 'Por favor ingresa un email válido';

    return false;
  },

  zipCode: (signUpData) => {
    const data = signUpData.zipCode;
    if (data.length > 12) return 'Por favor ingresa un código postal válido';

    return false;
  },

  password: (signUpData) => {
    const data = signUpData.password;
    if (data.length < 6) return 'Tu contraseña debe tener 6 caracteres o más';

    if (data.toLowerCase() === data || data.toUpperCase() === data)
      return 'Tu contraseña debe incluir por lo menos una letra mayúscula y una minúscula';

    return false;
  },

  confirmPassword: (signUpData) => {
    const password = signUpData.password;
    const confirmPassword = signUpData.confirmPassword;

    if (password !== confirmPassword) return 'Las contraseñas no coinciden';

    return false;
  },

  cuit: (signUpData) => {
    const data = signUpData.cuit;

    if (data.length > 14) return 'Por favor ingresa un CUIT válido';

    return false;
  },

  birthday: (signUpData) => {
    const date = signUpData.birthday;

    if (!date) {
      return 'Por favor ingresa una fecha válida';
    }
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const now = new Date();

    const currentYear = now.getFullYear();
    const days = ((18 * 12) * 30) + (now.getMonth() * 30) + now.getDate();
    const age = (((currentYear - year) * 12) * 30) + ((12 - month) * 30) + parseInt(30 - day)

    if (
      !year ||
      year > currentYear ||
      year < 1900 ||
      !month ||
      month > 12 ||
      month < 0 ||
      !day ||
      day > 31 ||
      day < 1
    ) {
      return 'Por favor ingresa una fecha válida';
    }
    if ((days - age) > 0) {
      return 'Por favor ingresa una fecha válida';
    }
    return false;
  }
};

export default Validate;
