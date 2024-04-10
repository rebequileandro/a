import { createSlice } from "@reduxjs/toolkit";

const initialState = null
export const chatSlice = createSlice({
    name: "chat",
    initialState: initialState,
    reducers: {
        setChat: (state, action) => {
            return action.payload
        }
    }
})
export const { setChat } = chatSlice.actions
export default chatSlice.reducer