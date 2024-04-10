import axios from "axios"
const { REACT_APP_API } = process.env
export const statusWorkBartender = async (id, status) => {
    try {
        const response = await axios.put(`${REACT_APP_API}/bartender/setting/statuswork/${id}`, {
            statusWork: JSON.stringify(status)
        })
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}