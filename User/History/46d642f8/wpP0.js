import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const slice = createSlice({
    name: 'table',
    initialState:{
        table: []
    },
    reducers:{
        getData: (state, action)=>{
            return async () =>{
                await axios.get('http://localhost:5000/data')
                .then(data => {
                    state.table = []
                })
            }
        }
    }
})

export const { getData } = slice.actions
export default slice.reducer;