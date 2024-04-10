import axios from "axios";
interface NewDateInterface {
  city: string;
  country: string;
  flag: string;
  date: string;
  show: string;
  availability: boolean;
  link: string;
}
export const newDate = async (data: NewDateInterface) => {
  try {
    const response = await axios.post(
      "https://api.bizarrap.com/api/nextdates/add",
      data
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
