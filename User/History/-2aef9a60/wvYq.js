export const getNextDates = async () => {
    try {
        const response = await axios.get(
            "https://api.bizarrap.com/api/nextdates/all"
        );
        return response.data.data;
    } catch (error) {
        console.log(error)
        return error
    }
}