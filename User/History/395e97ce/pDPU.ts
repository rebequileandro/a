import axios from "axios";
import { NexDatesInterface } from "models";

export const editDate = async (data: {}[], id: string) => {
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
export const deleteDate = async (id: string) => {
  try {
    const response = await axios.put(
      "https://api.bizarrap.com/api/nextdates/add"
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
