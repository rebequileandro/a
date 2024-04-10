import axios from "axios"

const sendNewPassword = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/user/reset-password/`, data)
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}
export default sendNewPassword