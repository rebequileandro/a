import axios from "axios"

export const getChat = async (id, page) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/user/chat/all/${id}?page=${page ? page : 1}`)
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
        console.log(error)
        return error
    }
}

export const sendVoiceMessagge = async (file, id) => {
    try {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("userId", id)

        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_API}/user/chat/voice`,
            data: formData,
        });
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}