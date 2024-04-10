import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const {APP_API} = process.env

export const slice = createSlice({
    name: 'table',
    initialState:{
        table: []
    },
    reducers:{
        getData: (state, action)=>{
            return async function(dispatch) {
                await axios.get(`${APP_API}`)
                .then(data => {
                    console.log(data)
                    dispatch(
                        state.table = action.data
                    )
                })
            }
        }
    }
})

export const { getData } = slice.actions
export default slice.reducer;