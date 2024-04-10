import axios from "axios";
import { NexDatesInterface } from "models";

export const newDate = async (data: NexDatesInterface) => {
  try {
    const response = await axios.post(
      "https://api.bizarrap.com/api/nextdates/add",
      data
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
