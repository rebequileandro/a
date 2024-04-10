import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChat: (state, actions) => actions.payload,

    },
})

export const { setChat } = chatSlice.actions

export default chatSlice.reducer

export const currentchat = (state) => state.chat