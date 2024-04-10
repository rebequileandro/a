import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API } = process.env
export const slice = createSlice({
    name: 'organizer',
    initialState:{
        myParty: [],
        details: {}
    },

    reducers:{
        getAllParty: (state, action)=>{
            state.myParty = action.payload
        },
        detailsParty: (state, action) =>{
            state.details = action.payload
        }
    }
})

export const { getAllParty, detailsParty} = slice.actions
export default slice.reducer;


export const  fetchParty = () => async (dispatch) => {
    await axios.get(`${ REACT_APP_API}/party/all`)
    .then(response => {
         dispatch(getAllParty(response.data))
    })
}

export const  postNewParty = (party) => async () => {
   const response = await axios.post(`${ REACT_APP_API}/party/add`, party)
   return response;
}

export const  editParty = (party, id) => async () => {
    const response = await axios.put(`${ REACT_APP_API}/party/${id}`, party)
    return response;
 }
 export const  getDetailsParty = (id) => async (dispatch) => {
    await axios.get(`${ REACT_APP_API}/party/${id}`)
    .then(response => {
        dispatch(detailsParty(response.data))
        console.log(response)
   })
 }