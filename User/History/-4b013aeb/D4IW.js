import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getCookie from '../../../utils/getCookie';
const { REACT_APP_API } = process.env;

const slice = createSlice({
  name: 'user',
  initialState: null,

  reducers: {
    logInUser: (state, action) => {
      // if (action.payload.token) {
      //   document.cookie = `__token=${action.payload.token}; path=/; secure; samesite=strict;`;
      //   delete action.payload.token;
      // }
      document.cookie = `__token=${"no hay token pa"}`;
      return action.payload;
    },
    logOutUser: (state, action) => {
      if (action.payload.navigate) {
        action.payload.navigate();
      }
      return null;
    },
    updateUser: (state, action) => { },
    verifyUser: (state, action) => {
      state.emailValidated = 'true';
    }
  }
});

export const { logInUser, logOutUser, verifyUser } = slice.actions;
export default slice.reducer;

export const getCurrentUser = (state) => state.global.user;

export const userRol = (rol) => {
  if (rol === "fiestero" || rol === "partyUser") {
    return "partyuser"
  } else if (rol === "organizador" || rol === "owner") {
    return "organizer"
  } else if (rol === "bartender" || rol === "cashier") {
    return "team"
  }
}

export const updateSettings = (data, id) => async (dispatch, selector) => {
  const rol = userRol(selector().global.user.rol)
  const url = rol === 'team' ? "team/settings/bar-cash" : `${rol}/setting`
  try {
    const response = await axios.put(
      `${REACT_APP_API}/${url}/${id}`,
      data,
      {
        headers: {
          'auth-token': getCookie('__token')
        }
      }
    );
    dispatch(logInUser(response.data.data));
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const updatePassword = (data, id) => async (dispatch, selector) => {
  const rol = userRol(selector().global.user.rol)
  const url = rol === 'team' ? "team/settings/bar-cash/changepassword" : `${rol}/setting/changepassword/`

  try {
    const response = await axios.put(
      `${REACT_APP_API}/${url}/${id}`,
      data,
      {
        headers: {
          'auth-token': getCookie('__token')
        }
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const getUserById = (id) => async (dispatch) => {
  try {
    const response = await axios(`${REACT_APP_API}/partyuser/user/${id}`);
    console.log("get user by id", response)
    dispatch(logInUser(response.data.data))
  } catch (error) {
    console.log(error);
    return error;
  }
}
export const profileImage = (id, data) => async (dispatch) => {
  console.log("DATA IMAGE", data)
  try {
    const response = await axios(`${REACT_APP_API}/partyuser/setting/addimage/${id}`);
    console.log("response upload image", response)
  } catch (error) {
    console.log(error);
  }
}