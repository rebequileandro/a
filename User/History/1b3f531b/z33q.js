import axios from "axios"
export const getAudiod = async (url) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API}`, { url }, {
            responseType: "blob",
        })
    } catch (error) {
        console.log(error)
    }
}