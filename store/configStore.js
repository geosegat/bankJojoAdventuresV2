import {configureStore} from '@reduxjs/toolkit';
import cpfSlice from './slices/cpfSlice';
import tokenSlice from './slices/tokenSlice';
import cpfPixReceivedSlice from './slices/cpfPixReceivedSlice';
import balanceSlice from './slices/balanceSlice';

const store = configureStore({
  reducer: {
    cpf: cpfSlice,
    token: tokenSlice,
    cpfPixReceived: cpfPixReceivedSlice,
    balance: balanceSlice,
  },
});

export default store;
