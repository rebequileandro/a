import axios from "axios"

export const getChat = async (id) => {
    try {
        const response = axios.get(`${process.env.REACT_APP_API}/user/chat/all/${id}`)
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}