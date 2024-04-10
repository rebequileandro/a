import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const { REACT_APP_API } = process.env;

export const slice = createSlice({
  name: "bartender",
  initialState: {
    order: [],
    items: [],
    status: false
  },
  reducers: {
    getOrder: (state, action) => {
      state.order = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setItems: (state, action) => {
      let isItem = state.items.filter(
        (e) => e.pedido._id === action.payload.pedido._id
      );
      if (!isItem.length) {
        state.items.push(action.payload);
      }
    },
    readItem: (state, action) => {
      let indexItem = state.items.findIndex(
        (e) => e.pedido._id === action.payload
      );
      let read = [...state.items];
      read[indexItem].pedido.readPayment = "true";
      state.items = read;
    },
    delibered: (state, action) => {
      let indexItem = state.items.findIndex(
        (e) => e.pedido._id === action.payload
      );
      let delivered = [...state.items];
      delivered[indexItem].pedido.orderDelivered = "true";
      state.items = delivered;
    },
  },
});

export const { getOrder, setStatus, setItems, readItem, delibered } =
  slice.actions;
export default slice.reducer;

export const getOrderBartender = (id) => async (dispatch) => {
  console.log("llego el dispatch")
  try {
    const response = await axios.get(`${REACT_APP_API}/barman/${id}`);
    console.log("RESPONSE BARTENDER", response)
    dispatch(getOrder(response.data));
    dispatch(setStatus(response.status));
    dispatch(delibered(id));
    return response;
  } catch (error) {
    dispatch(setStatus(error.response.data.message));
  }
};
export const readOrder = (id) => async (dispatch) => {
  try {
    const response = await axios.put(`${REACT_APP_API}/payment/read/${id}`);
    dispatch(getOrder(response.data));
    dispatch(readItem(id));
    return response;
  } catch (error) {
    console.log(error);
  }
};
