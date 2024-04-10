import axios from "axios";
import { NexDatesInterface } from "models";

export const newDate = async (data: NexDatesInterface) => {
  try {
    const response = await axios.put(
      "https://api.bizarrap.com/api/nextdates/add",
      data
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
