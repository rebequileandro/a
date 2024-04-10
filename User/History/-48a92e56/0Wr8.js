import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_API, REACT_APP_PRUEBA_DOWN } = process.env;

export const slice = createSlice({
  name: 'cashier',
  initialState: {
    order: [],
    status: false
  },
  reducers: {
    getTicket: (state, action) => {
      state.order = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    }
  }
});

export const { getTicket, setStatus } = slice.actions;
export default slice.reducer;

export const getOrder = (id, getIdBartender) => async (dispatch) => {
  try {
    const response = await axios.get(`${REACT_APP_API}/cashier/${id}`);
    dispatch(getTicket(response.data.data.payment));
    if (getIdBartender) {
      dispatch(
        sendNotification({
          id: response.data.data.payment.bartender,
          title: 'Nuevo pedido',
          message: '🎉'
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
};
export const cashierPayment = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(`${REACT_APP_API}/cashier/${id}`, data);
    dispatch(setStatus(response.status));
    dispatch(getOrder(id, true));
    return response;
  } catch (error) {
    console.log(error);
    dispatch(setStatus(error.response.data.message));
  }
};