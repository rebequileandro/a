import { combineReducers } from '@reduxjs/toolkit';
import user from './user';
import category from './category';
import notifications from "./notifications";
export default combineReducers({
  user,
  category,
  notifications
});
