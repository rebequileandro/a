import axios from "axios"
export const getAudiod = async () => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API}`,)
    } catch (error) {
        console.log(error)
    }
}