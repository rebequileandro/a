import { createSlice } from "@reduxjs/toolkit";

export const ORDER_STATUS = {
  PAYMENT_PENDING: "PAYMENT_PENDING",
  ORDER_CONFIRMED: "ORDER_CONFIRMED",
  IN_PREPARATION: "IN_PREPARATION",
  GET_READY: "GET_READY",
  ORDER_READY: "ORDER_READY",
};

export const orderTimeout = 30;

const slice = createSlice({
  name: "order",
  initialState: [],

  reducers: {
    initOrder: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
    updateStatus: (state, action) => {
      const { id, status } = action.payload;
      console.log("ENTRO EN LA ACCION", action)
      const order = state.find((ord) => ord.id === id);

      if (order) {
        console.log("ENCONTRO LA ORDEN", order)
        clearInterval(order.intervalID);
        order.status = status;
      }
    },
    deliverOrder: (state, action) => {
      const id = action.payload;
      const order = state.find((ord) => ord.id === id);

      console.log(order);
      clearInterval(order.intervalID);

      return state.filter((ord) => ord.id !== id);
    },
    updateTimeLeft: (state, action) => {
      const { id, timeLeft } = action.payload;
      const order = state.find((ord) => ord.id === id);

      order.timeLeft = timeLeft;
    },
    updateIntervalID: (state, action) => {
      const { id, intervalID } = action.payload;
      const order = state.find((ord) => ord.id === id);

      if (order) {
        order.intervalID = intervalID;
      }
    },
  },
});

export const {
  initOrder,
  updateStatus,
  deliverOrder,
  updateTimeLeft,
  updateIntervalID,
} = slice.actions;
export default slice.reducer;

export const getOrder = (state) => state.order;
export const getOrderExists = (state) => (state.order.length ? true : false);
