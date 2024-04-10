import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "club",
  // initialState: {
  //   _id: "629a77f4f9e1a51b23698943",
  //   addressParty: "Avenida",
  //   nameParty: "last night",
  // },
  initialState: {
    discountStatus: 'false',
    recommendedParty: 'false',
    userpartyChoose: 'false',
    _id: '62f23fdd956d41cf981269f7',
    imageParty: 'https://wedrink.s3.sa-east-1.amazonaws.com/IMG_20220801_184734_656.jpg',
    nameParty: 'S-testing ',
    idOrganizer: '62c9a39ac91d17b0eb000c00',
    addressParty: 'Desarrollo 142',
    statusParty: 'true',
    bartender: '[{"email":"lean_bartender2@gmail.com","name":"Leandro","square":"Entrada ","id":1660042826370}]',
    unitManager: '{"name":"Leandro","email":"Leandrko@gmail.com"}',
    cashier: '[{"email":"lean_cajero1@gmail.com","name":"Lean","square":"Entrada ","id":1660042826370}]',
    created: '2022-08-09T11:07:09.693Z',
    __v: 0,
    accessToken: 'APP_USR-1228194246381160-080916-3b457a4f5bfc1f91e37f3248eabd4b79-251406759'
  },
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
