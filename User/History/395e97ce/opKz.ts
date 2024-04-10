import { NewDateInterface } from "./../../../models/interface.models";
import axios from "axios";

let user: any = window.sessionStorage.getItem("user");
let token = JSON.parse(user).token;

export const editDate = async (data: NewDateInterface, id: string) => {
  try {
    const response = await axios.put(
      `https://api.bizarrap.com/api/nextdates/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteDate = async (id: string) => {
  try {
    const response = await axios.delete(
      `https://api.bizarrap.com/api/nextdates/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
