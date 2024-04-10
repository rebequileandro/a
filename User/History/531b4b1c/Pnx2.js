import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import process from 'process';
import ORDER_STATUS from '../../../models/order-stages.model';

const { REACT_APP_API } = process.env;

export const orderTimeout = 600;
const initialState = [];
const slice = createSlice({
  name: 'order',
  initialState,

  reducers: {
    initOrder: (state, action) => {
      state.push(action.payload);
    },
    clearOrders: () => initialState,

    updateStatus: (state, action) => {
      const { id, status } = action.payload;
      const order = state.find((ord) => ord.id === id);

      if (order) {
        clearInterval(order.intervalID);
        order.status = status;
      }
    },

    deliverOrder: (state, action) => {
      const id = action.payload;
      const order = state.find((ord) => ord.id === id);

      clearInterval(order?.intervalID);
    },
    deleteOrder: (state, action) => {
      const id = action.payload;
      return state.filter((ord) => ord.id !== id);
    },
    updateTimeLeft: (state, action) => {
      const { id, timeLeft } = action.payload;
      const order = state.find((ord) => ord.id === id);
      if (order) order.timeLeft = timeLeft;
    },
    updateIntervalID: (state, action) => {
      const { id, intervalID } = action.payload;
      const order = state.find((ord) => ord.id === id);

      if (order) {
        order.intervalID = intervalID;
      }
    },
    updateOrderReady: (state, action) => {
      const order = state.find((ord) => ord.id === action.payload);
      order && (order.orderReady = true);
    }
  }
});

export const {
  initOrder,
  updateStatus,
  deliverOrder,
  updateTimeLeft,
  updateIntervalID,
  clearOrders,
  updateOrderReady,
  deleteOrder,

} = slice.actions;
export default slice.reducer;

export const getOrder = (state) => state.partyUser.order;
export const getOrderExists = (state) =>
  state.partyUser.order.length ? true : false;

export const orderStatus = (data) => async (dispatch, selector) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API}/partyuser/payment/activeorder`,
      data
    );
    response.data.data.map((e) => {
      const checkorder = selector().partyUser.order.filter(
        (i) => i.id === e._id
      );

      if (!checkorder.length) {
        const timestamp = new Date(e.created).getTime();
        const now = new Date().getTime();
        const timeLeft = orderTimeout - Math.floor((now - timestamp) / 1000);

        dispatch(
          initOrder({
            id: e._id,
            timestamp: timestamp,
            number: e.idOrder,
            status: e?.orderStages,
            orderReady: e?.orderStages === ORDER_STATUS.ORDER_READY,
            total: e.total,
            imageBar: e.imageBarra,
            nameBar: e.nameBarra,
            nameFloor: e?.namePista,
            idOrder: e.idOrder,
            loaded: false,
            products: e.orderPayment.map((prod, id) => ({
              id,
              title: prod.title,
              quantity: prod.quantity,
              image: prod.imageDrink
            }))
          })
        );
      } else if (e.orderStages) {
        dispatch(
          updateStatus({
            id: e._id,
            status: e.orderStages
          })
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const paymentExpire = (id) => async (dispatch) => {
  try {
    await axios.put(`${REACT_APP_API}/partyuser/payment/expired/${id}`);
    dispatch(deleteOrder(id));
  } catch (error) {
    console.log(error);
  }
};
