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
        updateChatVoice: (state, actions) => {
            const { data, idChat } = actions.payload
            let newData = state.conversation.map(e => e._id === idChat ? data[0] : e)
            newData.push(data[1])
            state.conversation = newData;
        },
        loadMoreMessages: (state, actions) => {
            let stateCopy = { ...actions.payload }
            stateCopy.conversation = [...actions.payload.conversation.reverse(), ...state.conversation]
            return stateCopy;
        },
    },
})

export const { setChat, updateChat, loadMoreMessages, updateChatVoice } = chatSlice.actions

export default chatSlice.reducer

export const chat = (state) => state.chat