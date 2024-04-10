//reducers
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

export const {setPrueba} = pruebaSlice.actions
export default pruebaSlice.reducer;

//actions

export const getPrueba = () => (dispatch) =>{
    //functions dispatch(setPrueba(response.data))
}