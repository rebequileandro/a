import axios from "axios"

export const getAllRecap = async () => {
    try {
        const response = await axios.get(
            "https://api.bizarrap.com/api/bzrptour/all"
        );
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
}