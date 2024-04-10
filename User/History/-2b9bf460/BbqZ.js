import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_API } = process.env;

export const slice = createSlice({
    name: 'cashierClub',
    initialState: {},
    reducers: {
        setCashierClub: (state, action) => {
            return action.payload;
        }
    }
});

export const { setCashierClub } = slice.actions;
export default slice.reducer;

export const getCashierClub = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${REACT_APP_API}/organizer/party/${id}`);
        dispatch(setCashierClub(response.data));
    } catch (error) {
        console.log(error);
    }
};