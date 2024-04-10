import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const { REACT_APP_API } = process.env

export const slice = createSlice({
    name: 'cashier',
    initialState:{
        order: [],
        status: false
    },
    reducers:{
        getTicket: (state, action) => {
            state.order = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        }
    }
})

export const { getTicket, setStatus } = slice.actions
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
export const  cashierPayment= (id, data) => async (dispatch) => {
    try {
        await axios.put(`${REACT_APP_API}/cashier/${id}`, data)
        .then(response => {
            dispatch(setStatus(response.status))
        })  
    } catch (error) {
        dispatch(setStatus(response.status))
        console.log(error)
    }
}