import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import ORDER_STATUS from "../../../models/order-stages.model";

const { REACT_APP_API } = process.env;

export const slice = createSlice({
  name: "bartender",
  initialState: {
    order: [],
    ordersDelivered: [],
    ordersPending: [],
    status: false,
  },
  reducers: {
    getOrder: (state, action) => {
      state.order = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setItems: (state, action) => {
      let isItem = state.ordersPending.filter(
        (e) => e._id === action.payload._id
      );
      if (!isItem.length) {
        state.ordersPending.unshift(action.payload);
      }
    },
    setOrdersPending: (state, action) => {
      state.ordersPending = action.payload.reverse()
    },
    setOrdersDelivered: (state, action) => {
      state.ordersDelivered = action.payload.reverse()
    },
    readItem: (state, action) => {
      let indexItem = state.ordersPending.findIndex(
        (e) => e._id === action.payload
      );
      let read = [...state.ordersPending];
      read[indexItem].readPayment = "true";
      state.ordersPending = read;
    }
  },
});

export const { getOrder, setStatus, setItems, readItem, setOrdersPending, setOrdersDelivered } =
  slice.actions;
export default slice.reducer;

export const getOrderBartender = (id, barra) => async (dispatch) => {
  try {
    const response = await axios.post(`${REACT_APP_API}/bartender/${id}`, {
      nameBarra: barra
    });
    dispatch(getOrder(response.data.data.order));
    dispatch(setStatus(response.status));
    setBartenderOrderStages(id, ORDER_STATUS.ORDER_DELIVERED)
    return response;
  } catch (error) {
    console.log(error)
    error.response.data?.message ?
      dispatch(setStatus(error.response.data.message))
      :
      dispatch(setStatus("Error general"))
  }
};
export const readOrder = (id) => async (dispatch) => {
  dispatch(readItem(id));
  try {
    await axios.put(`${REACT_APP_API}/bartender/read/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const getAllOrders = (data, type) => async (dispatch) => {
  try {
    const response = await axios.post(`${REACT_APP_API}/bartender/orders/bybartender`, data);
    if (type === 'delivered') {
      dispatch(setOrdersDelivered(response.data.data.Order));
    } else {
      dispatch(setOrdersPending(response.data.data.Order));
    }
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const setBartenderOrderStages = (id, data) => async () => {
  try {
    const response = await axios.put(`${REACT_APP_API}/partyuser/payment/orderstages/${id}`, {
      orderStages: data
    });
    return response;
  } catch (error) {
    console.log(error)
  }
};