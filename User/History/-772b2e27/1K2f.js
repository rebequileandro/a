import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'cashier',
    initialState:{
        ticket: []
    },
    reducers:{
        getTicket: (state, action) => {
            state.prueba = action.payload
        }
    }
})

export const { getTicket } = slice.actions
export default slice.reducer;

export const getOrder = (id) => async (dispatch) => {
    try {
        await axios.get(`${REACT_APP_API}/payment/${id}`)
        .then(response => {
            dispatch(getTicket(response.data))
        })  
    } catch (error) {
        console.log(error)
    }
}