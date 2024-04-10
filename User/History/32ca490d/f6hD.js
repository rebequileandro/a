import axios from "axios"

export const getAllRecap = async () => {
    try {
        const response = await axios.get(
            "https://api.bizarrap.com/api/bzrptour/all"
        );
        return response;
    } catch (error) {
        console.log(error)
        return error
    }
}

