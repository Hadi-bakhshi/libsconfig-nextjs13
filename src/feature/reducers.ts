import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from './counterSlice/counterSlice';

export const rootReducer = combineReducers({
  counter: counterSlice,
});
