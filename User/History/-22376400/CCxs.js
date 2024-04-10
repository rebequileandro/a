import { createSlice } from "@reduxjs/toolkit";

const initialState = null
export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            return action.payload
        }
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer

// export const currentUser = (state) => state.user