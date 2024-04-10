import { createSlice } from '@reduxjs/toolkit'

const initialState = []


export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChat: (state, actions) => actions.payload,
        updateChat: (state, actions) => [...state, actions.payload],
    },
})

export const { setChat, updateChat } = chatSlice.actions

export default chatSlice.reducer

export const chat = (state) => state.chat