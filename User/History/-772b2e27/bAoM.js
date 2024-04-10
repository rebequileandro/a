import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const { REACT_APP_API } = process.env

export const slice = createSlice({
    name: 'cashier',
    initialState:{
        order: []
    },
    reducers:{
        getTicket: (state, action) => {
            state.order = [action.payload]
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