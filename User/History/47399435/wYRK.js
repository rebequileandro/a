import { createSlice } from '@reduxjs/toolkit'

const initialState = []


export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChat: (state, actions) => actions.payload,
        updateChat: (state, actions) => {
            let stateCopy = [...state.conversation]
            stateCopy.push(actions.payload)
            state.conversation = stateCopy;
        },
        loadMoreMessages: (state, actions) => {
            let stateCopy = [...actions.payload, ...state.conversation]
            state.conversation = stateCopy;
        },
    },
})

export const { setChat, updateChat, loadMore } = chatSlice.actions

export default chatSlice.reducer

export const chat = (state) => state.chat