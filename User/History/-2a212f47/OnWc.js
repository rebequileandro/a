const creditCardValidation = {
    number: (num) => {
        if (!/[\d][0-9]{14,17}/.test(num)) {
            return "El número de tu tarjeta debe tener entre 15 y 17 caracteres"
        }
    },
    dni: (dni) => {
        if (!/^[1-9][0-9]{6,8}$/.test(dni)) {
            return "Número de documento inválido"
        }
    },
    expiration: (date) => {
        let newDate = new Date()
        let currentYear = newDate.getFullYear()
        let currentMonth = newDate.getMonth()

        if (!/(\d{2})\/(\d{2})\D/.test(date)) {
            return "Fecha de expiración inválida"
        }
        else if (date.slice(-2) < currentYear.toString().slice(-2)) {
            return "Fecha de expiración inválida"
        }
        else if (date.slice(0, 2) > currentMonth && date.slice(-2) > currentYear.toString().slice(-2)) {
            return "Fecha de expiración inválida"
        }
    }
}
export default creditCardValidation