import axios from "axios";
interface DataInterface {
  username: string;
  password: string;
}
export const sumbitLogin = async (data: DataInterface) => {
  try {
    const response = await axios.post(
      "https://api.bizarrap.com/api/login",
      data
    );

    if (response.status === 200) {
      window.sessionStorage.setItem("user", response.data.data);
    }
  } catch (error) {
    return error;
  }
};
