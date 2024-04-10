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
    console.log(response);
    if (response.status === 200) {
      window.sessionStorage.setItem("user", JSON.stringify(response.data.data));
      // window.location.reload();
    }
  } catch (error) {
    return error;
  }
};
