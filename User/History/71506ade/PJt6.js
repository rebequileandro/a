import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';
import mercadoPago from '../../../assets/icons/Checkout/mercado-pago.svg';
import getCookie from '../../../utils/getCookie';
const { REACT_APP_API } = process.env;

export const INITIAL_LABELS = {
  method: 'Vincular Mercado Pago',
  bar: 'Elige dónde retirar'
};

const initialState = {
  paymentMethod: {
    name: INITIAL_LABELS.method,
    icon: mercadoPago
  },
  danceFloorBar: {
    floors: [],
    bars: [],
    selected: {
      floor: '',
      bar: INITIAL_LABELS.bar
    }
  },
  myCards: []
};

export const slice = createSlice({
  name: 'checkout',
  initialState: initialState,
  reducers: {
    setMethod: (state, action) => {
      const { icon, name } = action.payload;

      state.paymentMethod.name = name;
      state.paymentMethod.icon = icon;
    },
    setBar: (state, action) => {
      const allInfo = action.payload;
      state.danceFloorBar.floors = [...allInfo].map((floor) => floor.pista);
      state.danceFloorBar.bars = [...allInfo].map((bar) => bar.barras).flat();
    },
    sendFloorBar: (state, action) => {
      const { floor, bar } = action.payload;

      state.danceFloorBar.selected.floor = floor;
      state.danceFloorBar.selected.bar = bar;
    },
    resetStatesCheckout: (state) => {
      state.danceFloorBar = initialState.danceFloorBar;
    },
    setMyCards: (state, action) => {
      state.myCards = action.payload;
    }
  }
});
export const {
  setMethod,
  setBar,
  sendFloorBar,
  resetStatesCheckout,
  setMyCards
} = slice.actions;
export default slice.reducer;

export const getAllDanceFloor = (id) => async (dispatch) => {
  // dispatch(resetStates());
  try {
    const response = await axios.get(
      `${REACT_APP_API}/partyuser/party/allbarras/${id}`,
      {
        headers: {
          'auth-token': getCookie('__token')
        }
      }
    );
    dispatch(setBar(response.data.data));
  } catch (error) {
    console.log(error);
  }
};
export const getMethod = (state) => state.partyUser.checkout.paymentMethod;
export const getFloorBar = (state) =>
  state.partyUser.checkout.danceFloorBar.selected;
export const getCards = (state) => state.partyUser.checkout.myCards;

export const getMyCards =
  (id) =>
    async (dispatch) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/partyuser/mercadopago/allcards/${id}`
        );
        dispatch(setMyCards(response.data.data));
      } catch (error) {
        console.log(error);
      }
    };
