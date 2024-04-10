//reducer combiner party user
import { combineReducers } from '@reduxjs/toolkit';
import marketplace from './marketplace';
import club from './club';
import order from './order';
import activities from './activities';
import checkout from './checkout';
import orderReady from './orderReady';
export default combineReducers({
  marketplace,
  club,
  order,
  activities,
  checkout,
  orderReady
});
