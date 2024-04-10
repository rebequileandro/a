const formValidate = {
  name: ({ name }) => {
    if (!name) return 'Completa este campo';

    if (name.length > 20)
      return 'Este campo no debe tener más de 20 caracteres';

    if (name.length < 5) return 'Este campo debe contener más de 5 caracteres';

    if (/\d/.test(name)) return 'Tu nombre no puede contener números';

    if (/[`!@#$%^&*()_+\-=[\]{};:"\\|,<>/?~]/.test(name))
      return 'Tu nombre no puede contener caracteres especiales';

    return false;
  },

  email: (signUpData) => {
    const data = signUpData.email;
    console.log(data)

    if (!data || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(data)) {
      return 'Por favor ingresa un email válido';

    }
    return false;
  },

  zipCode: (signUpData) => {
    const data = signUpData.zipCode;
    if (data.length > 12) return 'Por favor ingresa un código postal válido';

    return false;
  },

  password: (signUpData) => {
    const data = signUpData.password;
    if (!data || data?.length < 8) return 'Tu contraseña debe tener 8 caracteres o más';

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
    const date = new Date(signUpData.birthday);
    if (!date) {
      return 'Por favor ingresa una fecha válida';
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const now = new Date();
    const currentYear = now.getFullYear();
    const days = 18 * 12 * 30 + now.getMonth() * 30 + now.getDate();
    const age =
      (currentYear - year) * 12 * 30 + (12 - month) * 30 + parseInt(30 - day);
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
    if (days - age > 0) {
      return 'Debes de ser mayor de edad para utilizar la aplicacion';
    }
    return false;
  },
  codArea: ({ codArea }) => {
    if (codArea.length > 3) {
      return 'Código inválido';
    }
    return false;
  },
  tel: ({ tel }) => {
    if (tel.length > 15 || tel.length < 8) {
      return 'Ingresa un número válido';
    }
    return false;
  }
};

export default formValidate;
