import axios from "axios"

export const getChat = async (id) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/user/chat/all/${id}`)
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}
export const sendMessagge = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/user/chat`, data)
        return response
    } catch (error) {
        console.log("ERROROROROOR", error)
        return error
    }
}