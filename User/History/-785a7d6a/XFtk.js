import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_API } = process.env;

export const slice = createSlice({
  name: 'cashier',
  initialState: {
    orders: [],
    card: null,
    status: false
  },
  reducers: {
    setAllOrders: (state, action) => {
      state.orders = action.payload
    },
    addItemCashier: (state, action) => {
      let isItem = state.orders?.filter((e) => e._id === action.payload._id);
      if (!isItem?.length) {
        state.orders.push(action.payload);
      }
    },
    readItemCashier: (state, action) => {
      let indexItem = state.orders.findIndex(
        (e) => e._id === action.payload
      );
      let read = [...state.orders];
      read[indexItem].readPayment = 'true';
      state.orders = read;
    },
    getTicket: (state, action) => { state.orders = action.payload },
    setStatus: (state, action) => { state.status = action.payload },
    setCard: (state, action) => { state.card = action.payload }

  }
});

export const { setAllOrders, getTicket, setStatus, setCard, addItemCashier, readItemCashier } = slice.actions;
export default slice.reducer;

export const getCardCashier = (state) => {
  return state.cashier.order.card;
};

export const getOrders = (idParty, idUser) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API}/cashier/order/all?idParty=${idParty}&idCashier=${idUser}`);
    console.log(response)
    dispatch(setAllOrders(response.data.data.orders));
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deliverOrder = (id, barra) => async (dispatch) => {
};

export const readOrderCashier = (id) => async (dispatch) => {
  dispatch(readItemCashier(id));
};







// export const cashierPayment = (id, data) => async (dispatch) => {
//   try {
//     const response = await axios.put(`${REACT_APP_API}/cashier/${id}`, data);
//     dispatch(setStatus(response.status));
//     dispatch(getOrder(id));
//     return response;
//   } catch (error) {
//     console.log(error);
//     dispatch(
//       setStatus({
//         statusCode: error.response.status,
//         description: error.response.data.description,
//         missingItems: error.response.data.productosFaltantes
//       })
//     );
//     return error;
//   }
// };

export const setCashierOrderStages = (id, data) => async () => {
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
