import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';
import mercadoPago from '../../../assets/icons/Checkout/mercado-pago.svg';
import getCookie from '../../../utils/getCookie';
const { REACT_APP_API } = process.env;
// import getCookie from '../../../utils/getCookie';

const initialState = {
  paymentMethod: {
    name: 'Vincular mercado pago',
    icon: mercadoPago
  },
  danceFloorBar: {
    floors: [],
    bars: [],
    selected: {
      floor: '',
      bar: 'Elige donde retirar'
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
      state.myCards = action.payload
    }
  }
});
export const { setMethod, setBar, sendFloorBar, resetStatesCheckout, setMyCards } =
  slice.actions;
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

export const getMyCards = (id = '6339b99a417ab37501248f10') => async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/partyuser/mercadopago/allcards/${id}`);
    dispatch(setMyCards(response.data.data))
  } catch (error) {
    console.log(error)
  }
}