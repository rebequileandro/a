import axios from "axios"
export const getAudiod = async (url, quality) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}`, { url, quality }, {
            responseType: "blob",
        })
        return response;
    } catch (error) {
        console.log(error)
        return error;
    }
}