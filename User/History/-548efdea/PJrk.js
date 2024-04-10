import axios from "axios"
const { REACT_APP_API } = process.env
export const statusWorkBartender = async (id, status) => {
    try {
        const response = axios.put(`${REACT_APP_API}/bartender/setting/statuswork/${id}`, {
            statusWork: status
        })
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}