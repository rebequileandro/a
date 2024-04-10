import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import ORDER_STATUS from '../../../models/order-stages.model';

const { REACT_APP_API } = process.env;
const initialState = {
  order: [],
  allOrders: [],
  status: false
};
export const slice = createSlice({
  name: 'bartender',
  initialState: initialState,
  reducers: {
    getOrder: (state, action) => {
      state.order = action.payload;
    },
    clearOrder: (state) => {
      state.order = initialState.order;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setItems: (state, action) => {
      let isItem = state.allOrders.filter((e) => e._id === action.payload._id);
      if (!isItem.length) {
        state.allOrders.push(action.payload);
      }
    },

    setAllOrders: (state, action) => {
      state.allOrders = action.payload;
    },
    readItem: (state, action) => {
      let indexItem = state.allOrders.findIndex(
        (e) => e._id === action.payload
      );
      let read = [...state.allOrders];
      read[indexItem].readPayment = 'true';
      state.allOrders = read;
    },
    updateOrderStage: (state, action) => {
      const { status, id } = action.payload
      let order = state.allOrders.find(e => e._id === id)
      if (order) order.orderStages = status
    }
  }
});

export const {
  getOrder,
  setStatus,
  setItems,
  readItem,
  setAllOrders,
  clearOrder,
  updateOrderStage
} = slice.actions;
export default slice.reducer;

export const getOrderBartender = (id) => async (dispatch) => {
  try {
    dispatch(setStatus(false))
    const response = await axios.get(`${REACT_APP_API}/cashier/${id}`);
    if (response.data.data.payment.orderStages === ORDER_STATUS.ORDER_DELIVERED) {
      dispatch(setStatus("Las bebidas ya fueron entregadas"))
    } else if (response.data.data.payment.orderStages === ORDER_STATUS.PAYMENT_PENDING) {
      dispatch(setStatus("No realizo el pago"))
    } else {
      dispatch(getOrder(response.data.data.payment));
    }
    return response;
  } catch (error) {
    console.log(error);
    dispatch(setStatus('Error general'));
  }
};
export const deliverOrder = (id, barra) => async (dispatch) => {
  try {
    const response = await axios.post(`${REACT_APP_API}/bartender/${id}`, {
      nameBarra: barra
    });
    setBartenderOrderStages(id, ORDER_STATUS.ORDER_DELIVERED);
    dispatch(getOrder(response.data.data.order));
    dispatch(setStatus(response.status));
    return response;
  } catch (error) {
    error.response.data?.message
      ? dispatch(setStatus(error.response.data.message))
      : dispatch(setStatus('Error general'));
    return error
  }
};

export const readOrder = (id) => async (dispatch) => {
  dispatch(readItem(id));
  try {
    await axios.put(`${REACT_APP_API}/bartender/read/${id}`);
  } catch (error) {
    console.log(error);
  }
  dispatch(updateOrderStage({ status: ORDER_STATUS.IN_PREPARATION, id: id }))
};
export const getAllOrders = (data, type) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API}/bartender/orders/bybartender`,
      data
    );
    dispatch(setAllOrders(response.data.data.Order));

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const setBartenderOrderStages = (id, data) => async () => {

  try {
    const response = await axios.put(
      `${REACT_APP_API}/partyuser/payment/orderstages/${id}`,
      {
        orderStages: data
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
