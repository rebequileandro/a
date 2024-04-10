import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API } = process.env;
const activitiesDB = require("./activitiesDB.json");
const initialState = {
  eventsMainPage: [],
  eventsHistory: [],
  eventsDiscount: [],
  eventsRecommended: [],
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
    setMainPageEventsRecommended: (state, action) => {
      state.eventsRecommended = action.payload;
    },
  },
});
export const {
  setLoading,
  setMainPageEvents,
  setMainPageEventsHistory,
  setMainPageEventsDiscount,
  setMainPageEventsRecommended
} = slice.actions;
export default slice.reducer;
export const getMainPageEvents = () => async (dispatch) => {
  try {
    const response = await axios(`${REACT_APP_API}/partyuser/party/all`);
    dispatch(setMainPageEvents(response.data.data));
  } catch (error) {
    console.log(error);
  }
};
export const getMainPageEventsHistory = () => async (dispatch) => {
  try {
    const response = await axios(`${REACT_APP_API}/partyuser/activities/lastVisitedPlaces`);
    dispatch(setMainPageEventsHistory(response.data.data));
  } catch (error) {
    console.log(error);
  }
};
export const getMainPageEventsDiscount = () => async (dispatch) => {
  try {
    const response = await axios.post(`${REACT_APP_API}/partyuser/party/discountparties`);
    dispatch(setMainPageEventsDiscount(response.data.data));
  } catch (error) {
    console.log(error);
  }
};
export const getMainPageEventsRecommended = () => async (dispatch) => {
  try {
    const response = await axios.post(`${REACT_APP_API}/partyuser/party/recommendedparty`);
    dispatch(setMainPageEventsRecommended(response.data.data));
  } catch (error) {
    console.log(error)
  }
}
