import axios from "axios"

export const getUser = async (userId) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/user/profile/${userId}`);
        return response;
    } catch (error) {
        console.log(error)
    }
}