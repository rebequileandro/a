import axios from "axios";
import { NewDateInterface } from "models/interface.models";

export const newDate = async (data: NewDateInterface) => {
  let user: any = window.sessionStorage.getItem("user");
  let token = JSON.parse(user).token;
  // try {
  //   const response = await axios.post(
  //     "https://api.bizarrap.com/api/nextdates/add",
  //     data,{ headers: {
  //       Authorization: `Bearer ${token}`
  //     }}
  //   );
  //   return response;
  // } catch (error) {
  //   console.log(error);
  //   return error;
  // }
};
