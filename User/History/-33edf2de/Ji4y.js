import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        login: (state, actions) => {
            state = actions.payload
        },
    },
})

export const { login } = counterSlice.actions

export default userSlice.reducer