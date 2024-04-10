import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUser: (state, actions) => actions.payload,

    },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer