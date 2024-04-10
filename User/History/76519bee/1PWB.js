import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "club",
  // initialState: {
  //   _id: "629a77f4f9e1a51b23698943",
  //   addressParty: "Avenida",
  //   nameParty: "last night",
  // },
  initialState: null,
  reducers: {
    setClub: (state, action) => {
      return action.payload;
    },
    exitClub: (state, action) => {
      state = null;
      return null;
    },
  },
});

export const { setClub, exitClub } = slice.actions;
export default slice.reducer;

export const getCurrentClub = (state) => state.partyUser.club;
