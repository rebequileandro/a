import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';
import mercadoPago from '../../../assets/icons/Checkout/mercado-pago.svg';
const { REACT_APP_API } = process.env;
// import getCookie from '../../../utils/getCookie';

const initialState = {
  paymentMethod: {
    name: 'Vincular mercado pago',
    icon: mercadoPago
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
    setMyCards: (state, action) => {
      state.myCards = action.payload
    }
  }
});
export const { setMethod, setMyCards } = slice.actions;
export default slice.reducer;

export const getAllCards = (id = '6339b99a417ab37501248f10') => async (dispatch) => {
  const response = await axios.get(`${process.env.REACT_APP_API}/partyuser/mercadopago/allcards/${id}`);
  dispatch(setMyCards(response.data.data))
}