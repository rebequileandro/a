import { createSlice } from '@reduxjs/toolkit';
import getCookie from '../../../utils/getCookie';
import axios from 'axios';
const { REACT_APP_API } = process.env;

const slice = createSlice({
  name: 'club',
  initialState: null,
  reducers: {
    setClub: (state, action) => {
      return action.payload;
    },
    exitClub: (state, action) => {
      state = null;
      return null;
    }
  }
});

export const { setClub, exitClub } = slice.actions;
export default slice.reducer;

export const getCurrentClub = (state) => state.partyUser.club;

export const httpGetClubById = (id) => async (dispatch) => {
  const response = await axios.get(
    REACT_APP_API + '/partyuser/party/' + id,
    null,
    { 'auth-token': getCookie('__token') }
  );
  dispatch(setClub(response.data.data));
};
