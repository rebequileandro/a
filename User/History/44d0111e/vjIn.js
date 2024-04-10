import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user.slice'
import chat from './slices/chat.slice'

export const store = configureStore({
    reducer: {
        user,
        chat
    },
})