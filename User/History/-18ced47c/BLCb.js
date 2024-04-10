import axios from "axios";

export const loginRequest = async (data) => {
    try {
        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_API}/organizer/login`,
            data: data,
        });
        if (response.data.data.rol === "adminShooza") {
            return response.data.data
        } else {
            return "Usuario no válido"
        }
    } catch (error) {
        console.log(error)
    }

}