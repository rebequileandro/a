//reducers
import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'prueba',
    initialState:{
        prueba: []
    },
    reducers:{
        getAllProducto: (state, action) => {
            state.prueba = action.payload
        },
    }
})

export const { getAllProducto } = slice.actions
export default slice.reducer;
