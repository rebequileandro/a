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