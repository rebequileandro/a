//-------example-:)------//
//const result = formatDate("2022-08-09T16:47:49.051Z")
//result ----------> "09 de Agosto"
export const formatDate = (date) => {
    const setDate = date ? new Date(date) : new Date()
    const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
    return `${setDate.getDate()} de ${month[setDate.getMonth()]}`;
}
//-------example-:)------//
//const result = formatDate("2022-08-09T16:47:49.051Z")
//result ----------> "martes 09 de Agosto"
export const formatDateLongDay = (date) => {
    const setDate = date ? new Date(date) : new Date()
    const day = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return `${day[setDate.getDay()]} ${formatDate(date)}`
}