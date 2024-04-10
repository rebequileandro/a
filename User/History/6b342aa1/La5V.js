import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    logInUser: (state, action) => {
     // console.log(action.payload);
      return action.payload;
    },
    logOutUser: (state, action) => {
      state = null;
    },
  },
});

export const { logInUser, logOutUser } = slice.actions;
export default slice.reducer;

export const getCurrentUser = (state) => state.user;
