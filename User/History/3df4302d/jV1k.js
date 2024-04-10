export function validate(input) {
    let errors = {}
    !input.card && (errors.card = 'Es necesario completar este campo.')
    !input.number && (errors.number = 'El numero de la tarjeta es incorrecto.') 
    !input.holder && (errors.holder = 'Es necesario conpletar este campo.')
    !input.dni && (errors.dni = 'Es necesario conpletar este campo.')
    !input.date && (errors.date = 'La fecha de vencimiento no es valida.')
    !input.code && (errors.code = 'El código es incorrecto.')
    if(/^([0-9])*$/.test(input.card)) {
        errors.card = 'Ingrese un nombre valido'
    }
    return errors
}