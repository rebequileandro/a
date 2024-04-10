//reducers
import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'prueba',
    initialState: {
        prueba: []
    },
    reducers: {
        setPrueba: (state, action) => {
            state.prueba = action.payload
        }
    }
})
export const { setPrueba } = slice.actions
export default slice.reducer;
