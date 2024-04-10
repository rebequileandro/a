import axios from "axios";

export const newDate = async () => {
  try {
    const response = await axios("https://api.bizarrap.com/api/nextdates/add");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
