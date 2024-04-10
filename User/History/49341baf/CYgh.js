//-------example-------//
//const result = formatDate("2022-08-09T16:47:49.051Z")
//result ----------> "09 de Agosto"
export const formatDate = (date) => {
    const setDate = date ? new Date(date) : new Date()
    const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
    return `${setDate.getDate()} de ${month[setDate.getMonth()]}`;
}
//-------example-------//
//const result = formatDateLongDay("2022-08-09T16:47:49.051Z")
//result ----------> "martes 09 de Agosto"
export const formatDateLongDay = (date) => {
    const setDate = date ? new Date(date) : new Date()
    const day = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return `${day[setDate.getDay()]} ${formatDate(date)}`
}
//-------example-------//
//const result = formatDateNumber("2022-08-09T16:47:49.051Z")
//result ----------> "09/08/2022"
export const formatDateNumber = (date) => {
    const setDate = new Date(date).toLocaleDateString('en-GB', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    });
    return setDate;
};