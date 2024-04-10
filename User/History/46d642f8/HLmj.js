import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { APP_API } = process.env

export const slice = createSlice({
    name: 'table',
    initialState:{
        table: []
    },
    reducers:{
        getData: async (state)=> {
            await axios.get('http://localhost:5000/data')
            .then(res => {
                console.log(res.data)
                state.table = res.data
            })
        }
    }
})

export const { getData } = slice.actions
export default slice.reducer;