import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const slice = createSlice({
    name: 'prueba',
    initialState: {
        prueba: [],
        status: false
    },
    reducers: {
        setPrueba: (state, action) => {
            state.prueba = action.payload
        },
        setPrueba2: (state, action) => {
            const { data } = action.payload
            state.prueba = data;
        },
        setStatus: (state, action) => {
            state.status = action.payload
        }
    }
})
export const { setPrueba, setPrueba2, setStatus } = slice.actions
export default slice.reducer;


export const prueba = (id) => async (dispatch) => {
    const response = await axios.get(`${REACT_APP_API}/acceso/facebook/auth/facebook`, id)
    dispatch(setPrueba2(response.data))
}