import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const slice = createSlice({
    name: 'table',
    initialState:{
        table: []
    },
    reducers:{
        getData: async (state, action)=>{
            try {
                const response = await axios.get('http://localhost:5000/data')
                console.log(response.data)
                state.table = response.data
            } catch (error) {
                console.error(error)
            }
           
        }
    }
})

export const { getData } = slice.actions
export default slice.reducer;