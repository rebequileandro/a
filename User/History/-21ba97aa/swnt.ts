import { NewDateInterface } from "./../models/interface.models";
export const validationsNextDates = (data: NewDateInterface) => {
  if (!data.show) {
    return "Falta show";
  } else if (!data.city) {
    return "Falta ciudad";
  } else if (!data.country) {
    return "Falta país";
  } else if (!data.date) {
    return "Falta fecha";
  } else if (!data.link) {
    return "Falta link";
  }
};

export const validationsNewRecap = (data: any) => {
  if (!data.show) {
    return "Falta show";
  } else if (!data.city) {
    return "Falta ciudad";
  } else if (!data.country) {
    return "Falta país";
  } else if (!data.date) {
    return "Falta fecha";
  } else if (!data.filePolaroid) {
    return "Faltan imagenes polaroid";
  } else if (!data.filePortada) {
    return "Falta imagen de portada";
  } else {
    return false;
  }
};
