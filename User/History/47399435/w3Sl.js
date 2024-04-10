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
            console.log(actions.payload)
            const newData = state.conversation.map(e => {
                if (e._id === idChat) {
                    console.log(e._id, idChat)
                    e = data[0]
                } else {
                    return e
                }
            })
            newData.push(data[1])
            state.conversation = state.conversation;
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