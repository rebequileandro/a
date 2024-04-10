import axios from "axios"
export const getAudiod = async (url) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}`, { url }, {
            responseType: "blob",
        })
        return window.URL.createObjectURL(new Blob([response.data]))
    } catch (error) {
        console.log(error)
    }
}