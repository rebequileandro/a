import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        login: (state, actions) => actions.payload,
    },
})

export const { login } = userSlice.actions

export default userSlice.reducer