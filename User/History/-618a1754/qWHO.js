import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const slice = createSlice({
    name: 'organizer',
    initialState:{
        myParty: [],
    },

    reducers:{
        getAllParty: (state, action)=>{
            state.myParty = action.payload
        }
    }
})

export const { getAllParty } = slice.actions
export default slice.reducer;



export const  fetchParty = () => async (dispatch) => {
    await axios.get(`${process.env.local.REACT_APP_API}/party/all`)
    .then(response => {
         dispatch(getAllParty(response.data))
    })
}

export const  postNewParty = (party) => async () => {
   const response = await axios.post('https://api.wedrinkapp.com/api/party/add', party)
   return response;
}