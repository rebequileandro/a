const validations = {
  name: (name) => {
    if (!name) return 'Completa este campo';

    if (name.length > 30)
      return 'Este campo no debe tener más de 30 caracteres';

    if (name.length < 5) return 'Este campo debe contener más de 5 caracteres';

    if (/\d/.test(name)) return 'Tu nombre no puede contener números';

    if (/[`!@#$%^&*()_+\-=[\]{};:"\\|,<>/?~]/.test(name))
      return 'Tu nombre no puede contener caracteres especiales';

    return "";
  },

  email: (email) => {


    if (!email) {
      return 'Por favor ingresa un email válido';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)) {
      return 'Por favor ingresa un email válido';
    }
    return "";
  },

  zipCode: (signUpData) => {
    const data = signUpData.zipCode;
    if (data.length > 12) return 'Por favor ingresa un código postal válido';

    return "";
  },

  password: (password) => {

    if (!password || password?.length < 8) return 'Tu contraseña debe tener 8 caracteres o más';

    if (password.toLowerCase() === password || password.toUpperCase() === password)
      return 'Tu contraseña debe incluir por lo menos una letra mayúscula y una minúscula';

    return "";
  },

  confirmPassword: (password, confirmPassword) => {

    if (password !== confirmPassword) return 'Las contraseñas no coinciden';

    return "";
  },

  cuit: (signUpData) => {


    if (signUpData.length > 14) return 'Por favor ingresa un CUIT válido';

    return "";
  },

  birthday: (signUpData) => {
    const date = new Date(signUpData);
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
    return "";
  },
  codArea: ({ codArea }) => {
    if (codArea.length > 3) {
      return 'Código inválido';
    }
    return "";
  },
  tel: (tel) => {
    if (tel.length > 15 || tel.length < 8) {
      return 'Ingresa un número válido';
    }
    return "";
  }
};

const formValidate = (formData) => {
  const validationsResult = Object.keys(formData).map(input => {
    const validator = validations[input]
    if (input === "confirmPassword") {
      const result = validator(formData["password"], formData[input])
      return {
        [input]: result
      }
    } else if (validator) {
      const result = validator(formData[input])
      return {
        [input]: result
      }
    } else {
      if (!formData[input].length || formData[input].length < 3) {
        return {
          [input]: "Completa este campo"
        }
      } else {
        return {
          [input]: false
        }
      }
    }
  })
  return validationsResult.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

export default formValidate;
