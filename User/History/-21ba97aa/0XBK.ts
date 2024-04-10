import { NexDatesInterface } from "./../models/interface.models";
export const validationsNextDates = (data: NexDatesInterface) => {
  if (!data.city) {
    return "Falta ciudad";
  } else if (!data.country) {
    return "Falta país";
  } else if (!data.date) {
    return "Falta fecha";
  } else if (!data.show) {
    return "Falta show";
  } else if (!data.link) {
    return "Falta link";
  }
};
