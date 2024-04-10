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
            console.log(APP_API)
            return async () => {
               const response = await axios.get(`${APP_API}`)
                console.log(response.data)
                state.table = response.data
                    

            }
        }
    }
})

export const { getData } = slice.actions
export default slice.reducer;