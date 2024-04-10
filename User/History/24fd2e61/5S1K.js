import axios from "axios"

const sendForgotPassword = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/user/forgot-password/`, data)
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}
export default sendForgotPassword