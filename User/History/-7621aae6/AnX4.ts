import axios from "axios";
export const newDate = async (data: {}) => {
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
