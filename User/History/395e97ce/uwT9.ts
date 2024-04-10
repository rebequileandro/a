import { NewDateInterface } from "./../../../models/interface.models";
import axios from "axios";
export const editDate = async (data: NewDateInterface, id: string) => {
  try {
    const response = await axios.put(
      `https://api.bizarrap.com/api/nextdates/${id}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const editAvailability = async (
  data: { availability: boolean },
  id: string
) => {
  try {
    const response = await axios.put(
      `https://api.bizarrap.com/api/nextdates/${id}`,
      data
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const deleteDate = async (id: string) => {
  try {
    const response = await axios.delete(
      `https://api.bizarrap.com/api/nextdates/delete/${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
