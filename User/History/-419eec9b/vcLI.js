import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const { REACT_APP_API } = process.env

export const slice = createSlice({
    name: 'barman',
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