import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const { REACT_APP_API } = process.env;
const activitiesDB = require("./activitiesDB.json");
const initialState = {
  eventsMainPage: [],
  eventsRecommended: [],
  eventsHistory: [],
  eventsDiscount: [],
  eventsRecommended: [],
  loading: false,
};
const slice = createSlice({
  name: 'eventsFiestero',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
    setMainPageEvents: (state, action) => {
      state.eventsMainPage = action.payload;
    },
    setMainPageEventsRecommended: (state, action) => {
      state.eventsRecommended = action.payload;
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
  setMainPageEventsRecommended,
  setMainPageEventsHistory,
  setMainPageEventsDiscount,
} = slice.actions;
export default slice.reducer;
export const getMainPageEvents = () => async (dispatch) => {
  try {
    const response = await axios(`${REACT_APP_API}/partyuser/party/all`, {
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlYW5kcm9yZWJlQGdtYWlsLmNvbSIsImlkIjoiNjMyMjI4NjViZGMzZDU5MTZkYmNjNTVmIiwiaWF0IjoxNjYzNjE2NjA1fQ.VwkpVumLDufHNzrHQas68Ai8VCtGOT50TWyggX8Pudc"
      }
    });
    dispatch(setMainPageEvents(response.data.data));
  } catch (error) {
    console.log(error);
  }
};
export const getMainPageEventsHistory = (id) => async (dispatch) => {
  try {
    const response = await axios(`${REACT_APP_API}/partyuser/activities/lastVisitedPlaces`, {
      idClientePayment: id
    });
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
