import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { APP_API } = process.env

export const slice = createSlice({
    name: 'table',
    initialState:{
        table: []
    },
    reducers:{
        getData: (state, action)=>{
            return  () => {
               const response =  axios.get('http://localhost:5000/data')
                console.log(response.data)
                state.table = response.data
                    
            }
        }
    }
})

export const { getData } = slice.actions
export default slice.reducer;