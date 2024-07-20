import { configureStore } from '@reduxjs/toolkit';
import temoignageReducer from './temoignageSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    temoignage: temoignageReducer,
  },
});

console.log(store.getState());

export default store;
