import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, actions) => {
            return actions.payload
        },
        upDateUser: (state, actions) => {
            let newState = { ...state, ...actions.payload }
            return newState
        }
    },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer

export const currentUser = (state) => state.user