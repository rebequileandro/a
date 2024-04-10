import axios from "axios";

export const loginRequest = async (data) => {
    const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API}/organizer/login`,
        data: data,
    });
    console.log(response)
}