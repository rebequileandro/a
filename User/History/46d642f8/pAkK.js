import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const slice = createSlice({
    name: 'table',
    initialState:{
        table: []
    },
    reducers:{
        getData: async (state, action)=> {
            await axios.get('http://localhost:5000/data')
            .then(res => {
                state.table = res.data[0]
            })
        }
    }
})

export const { getData } = slice.actions
export default slice.reducer;