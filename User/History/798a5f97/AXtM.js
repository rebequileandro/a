import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API } = process.env;
const activitiesDB = require("./activitiesDB.json");
const initialState = {
  eventsMainPage: [],
  eventsHistory: [],
  eventsDiscount: [],
  loading: false,
};
const slice = createSlice({
  name: "eventsFiestero",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
    setMainPageEvents: (state, action) => {
      state.eventsMainPage = action.payload;
    },
    setMainPageEventsHistory: (state, action) => {
      state.eventsHistory = action.payload;
    },
    setMainPageEventsDiscount: (state, action) => {
      state.eventsDiscount = action.payload;
    },
  },
});
export const {
  setLoading,
  setMainPageEvents,
  setMainPageEventsHistory,
  setMainPageEventsDiscount,
} = slice.actions;
export default slice.reducer;
export const getMainPageEvents = () => async (dispatch) => {
  try {
    const response = await axios(`${REACT_APP_API}/partyuser/party/recommendedparty`);
    console.log("RESPONSE", response.data)
    dispatch(setMainPageEvents(response));
  } catch (error) {
    console.log(error);
  }
};
export const getMainPageEventsHistory = () => (dispatch) => {
  try {
    const response = activitiesDB
    dispatch(setMainPageEventsHistory(response));
  } catch (error) {
    console.log(error);
  }
};
export const getMainPageEventsDiscount = () => (dispatch) => {
  try {
    const response = activitiesDB;
    dispatch(setMainPageEventsDiscount(response));
  } catch (error) {
    console.log(error);
  }
};
