import axios from "axios"




export const login = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/user/login`, data)
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}
export const signup = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/user/register`, data)
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}