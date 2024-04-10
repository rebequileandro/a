import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const { REACT_APP_API } = process.env

export const slice = createSlice({
    name: 'bartender',
    initialState:{
        order: [],
        items: [],
        status: false
    },
    reducers:{
        getOrder: (state, action) => {
            state.order = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        },
        setItems: (state, action) => {
            let isItem = state.items.filter(e => e._id === action.payload._id)
           
                state.items = [...state.items, action.payload]
            
        }
    }
})

export const { getOrder, setStatus, setItems } = slice.actions
export default slice.reducer;


export const getOrderBarman = (id) => async (dispatch) => {
    try {
        await axios.get(`${REACT_APP_API}/barman/${id}`)
        .then(response => {
            dispatch(setStatus(response.status))
            dispatch(getOrder(response.data))
        })
    } catch (error) {
            dispatch(setStatus(error.response.data.message))
    }
}