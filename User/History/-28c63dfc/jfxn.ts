import axios from "axios";

export const getAllDates = async () => {
  try {
    const response = await axios("https://api.bizarrap.com/api/nextdates/all");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
