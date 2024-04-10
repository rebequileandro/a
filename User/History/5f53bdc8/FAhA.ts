export const allMonths = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

//-------example-------//
//const result = formatDate("2022-08-09T16:47:49.051Z")
//result ----------> "09 de Agosto 2022"
// export const formatDate = (date) => {
//     const setDate = date ? new Date(date + 'T00:00:00Z') : new Date();
//     setDate.setMinutes(setDate.getMinutes() + setDate.getTimezoneOffset());
//     return `${setDate.getUTCDate()} de ${allMonths[setDate.getUTCMonth()]} ${setDate.getUTCFullYear()}`;
// }
export const formatDate = (date: string | number | Date) => {
  const options: object = { day: "numeric", month: "long", year: "numeric" };

  const setDate = date ? new Date(date + "T00:00:00") : new Date();
  const formattedDate = setDate.toLocaleDateString("es-AR", options);

  return formattedDate;
};

export const formatDateMont = (date: string | number | Date) => {
  const setDate = date ? new Date(date + "T00:00:00Z") : new Date();
  setDate.setMinutes(setDate.getMinutes() + setDate.getTimezoneOffset());
  return `${allMonths[setDate.getMonth()]}`;
};
//-------example-------//
//const result = formatDateLongDay("2022-08-09T16:47:49.051Z")
//result ----------> "martes 09 de Agosto"
export const formatDateLongDay = (date: string | number | Date) => {
  const setDate = date ? new Date(date) : new Date();
  const day = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  return `${day[setDate.getDay()]} ${formatDate(date)}`;
};

//-------example-------//
//const result = formatDateNumber("2022-08-09T16:47:49.051Z")
//result ----------> "09/08/2022"
export const formatDateNumber = (date: string | number | Date) => {
  const options: object = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
  };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
    new Date(date)
  );
  return formattedDate;
};

//calendar
// export function createCalendar(year: string | number | Date) {
//     let calendar = [];

//     // Genera el calendario
//     for (let i = 0; i < allMonths.length; i++) {
//         let month = allMonths[i];
//         let monthObj = {
//             month: month,
//             days: []
//         };
//         // Crea una fecha para el primer día del mes actual
//         let firstDayOfMonth = new Date(year, i, 1);

//         // Obtiene el día de la semana del primer día del mes (0 = Domingo, 1 = Lunes, ...)
//         let firstDayOfWeek = firstDayOfMonth.getDay();

//         // Calcula el número de días en el mes actual
//         let daysInMonth = new Date(year, i + 1, 0).getDate();

//         // Agrega espacios en blanco para que el primer día coincida con el día de la semana correcto
//         for (let j = 0; j < firstDayOfWeek; j++) {
//             monthObj.days.push("");
//         }

//         // Genera los días del mes actual
//         for (let day = 1; day <= daysInMonth; day++) {
//             monthObj.days.push(day);
//         }

//         calendar.push(monthObj);
//     }

//     return calendar;
// }
