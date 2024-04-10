
import { createSlice } from "@reduxjs/toolkit";

export const pruebaSlice = createSlice({
    name: 'prueba',
    initialState:{
        prueba: []
    },
    reducers:{
        setPrueba: (state, action) => {
            state.prueba = action.payload
        }
    }
})

export default pruebaSlice.reducer;