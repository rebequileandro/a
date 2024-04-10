export const formatDate = (date) => {
    const setDate = new Date(date)
    const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
    return `${setDate.getDate()} de ${month[setDate.getMonth()]}`
}