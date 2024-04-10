import { createSlice } from "@reduxjs/toolkit";

export const mcSlice = createSlice({
    name: "mc",
    initialState: "initial",
    reducers: {
        setModaData: (state, action) => {
            return action.payload;
        },
    },
});

export const { setModaData } = mcSlice.actions;
export default mcSlice.reducer