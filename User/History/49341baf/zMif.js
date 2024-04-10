//-------example-:)------//
//const result = formatDate("2022-08-09T16:47:49.051Z")
//result ----------> "9 de Agosto"
export const formatDate = (date) => {
    const setDate = new Date(date)
    const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
    return `${setDate.getDate()} de ${month[setDate.getMonth()]}`;
}
export const formatDateLongDay = (date) => {
    const setDate = new Date(date)
    const day = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return `${day[setDate.getDay()]} ${formatDate(date)}`
}