import axios from "axios"

const { REACT_APP_API } = process.env
export const logIn = async (data) => {
    try {
        const response = await axios.post(`${REACT_APP_API}/user/login`, data)
        if (response.status === 200) {
            return response.user
        }
    } catch (error) {
        console.log(error)
    }
}