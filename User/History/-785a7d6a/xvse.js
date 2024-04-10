import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_API } = process.env;

export const slice = createSlice({
  name: 'cashier',
  initialState: {
    order: [],
    card: null,
    status: false
  },
  reducers: {
    setAllOrders: (state, action) => {
      state.order = action.payload;
    },
    getTicket: (state, action) => {
      state.order = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCard: (state, action) => {
      state.card = action.payload;
    }
  }
});

export const { setAllOrders, getTicket, setStatus, setCard } = slice.actions;
export default slice.reducer;

export const getCardCashier = (state) => {
  return state.cashier.order.card;
};

export const getOrders = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${REACT_APP_API}/cashier/${id}`);
    dispatch(setAllOrders(response.data.data));
  } catch (error) {
    console.log(error);
  }
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
