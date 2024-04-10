import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_API } = process.env;

export const slice = createSlice({
    name: 'cashierClub',
    initialState: {},
    reducers: {
        setCashierClub: (state, action) => {
            state = action.payload;
        }
    }
});

export const { setCashierClub } = slice.actions;
export default slice.reducer;
