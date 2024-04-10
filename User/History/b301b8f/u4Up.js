import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'orderReady',
    initialState: false,
    reducers: {
        setOrderReady: (state, action) => {
            return action.payload
        }
    }
})
export const { setOrderReady } = slice.actions
export default slice.reducer;