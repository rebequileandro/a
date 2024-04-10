import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getCookie from "../../../utils/getCookie";
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
        "auth-token": getCookie('__token')
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
    }, {
      headers: {
        "auth-token": getCookie('__token')
      }
    });
    dispatch(setMainPageEventsHistory(response.data.data));
  } catch (error) {
    console.log(error);
  }
};
export const getMainPageEventsDiscount = () => async (dispatch) => {
  try {
    const response = await axios.post(`${REACT_APP_API}/partyuser/party/discountparties`, {
      headers: {
        "auth-token": getCookie('__token')
      }
    });
    dispatch(setMainPageEventsDiscount(response.data.data));
  } catch (error) {
    console.log(error);
  }
};
export const getMainPageEventsRecommended = () => async (dispatch) => {
  try {
    const response = await axios.post(`${REACT_APP_API}/partyuser/party/recommendedparty`, {
      headers: {
        "auth-token": getCookie('__token')
      }
    });
    dispatch(setMainPageEventsRecommended(response.data.data));
  } catch (error) {
    console.log(error)
  }
}
