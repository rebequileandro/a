const creditCardValidation = {
  number: (num) => {
    if (!/[\d][0-9]{13,19}/.test(num) || num.length > 19) {
      return 'El número de tu tarjeta debe tener entre 14 y 19 caracteres';
    }
  },
  name: (name) => {
    if (name.length < 6 || name.length > 40) {
      return 'El nombre debe tener entre 6 y 40 caracteres';
    }
  },
  dni: (dni) => {
    if (!/^[1-9][0-9]{6,8}$/.test(dni)) {
      return 'Número de documento inválido';
    }
  },
  expiration: (date) => {
    let newDate = new Date();
    let currentYear = newDate.getFullYear();
    let currentMonth = newDate.getMonth();
    if (!/\d\d\/\d{2}\W/.test(date + ' ')) {
      console.log('nocumple con la catidad de caracteres', date);
      return 'Fecha de expiración inválida';
    } else if (date.slice(-2) < currentYear.toString().slice(-2)) {
      return 'Fecha de expiración inválida';
    } else if (
      date.slice(0, 2) <= currentMonth &&
      date.slice(-2) <= currentYear.toString().slice(-2)
    ) {
      return 'Fecha de expiración inválida';
    }
  },
  expirationFromDateObject: (dateString) => {
    if (!dateString) {
      return 'Fecha inválida';
    }

    const now = new Date();
    const date = new Date(dateString);

    const oneMonthInMs = 2629800000;

    if (
      !date ||
      !date.getTime ||
      date.getTime() + oneMonthInMs < now.getTime()
    ) {
      return 'Fecha inválida';
    }
  },
  code: (code) => {
    if (!/([0-9]{3,4})/.test(code) || code.length > 4) {
      return 'Código de seguridad inválido';
    }
  }
};
export default creditCardValidation;
