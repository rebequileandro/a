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

export const getOrder = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${REACT_APP_API}/cashier/${id}`);
    dispatch(getTicket(response.data.data.payment));
  } catch (error) {
    console.log(error);
  }
};
export const cashierPayment = (id, data) => async (dispatch) => {
  try {
    console.log('entre en el try de cashierpayment', 'id', id, 'data', data);
    const response = await axios.put(`${REACT_APP_API}/cashier/${id}`, data);
    console.log('soy response del back putito', response);
    dispatch(setStatus(response.status));
    dispatch(getOrder(id));
    return response;
  } catch (error) {
    console.log(error);
    dispatch(setStatus(error.response.data.message));
  }
};
export const sendNotification = (data) => async () => {
  try {
    const response = await axios.post(`${REACT_APP_API}/webpush/new-message`, data);
    console.log('soy response notification', response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
