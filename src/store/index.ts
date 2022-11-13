import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user';
import creditCards from './slices/creditCards';
import currencies from './slices/currencies';
import { cryptoApi } from '../services/cryptoApi';

export const store = configureStore({
  reducer: {
    user: userSlice,
    creditCards: creditCards,
    currencies: currencies,
    [cryptoApi.reducerPath]: cryptoApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    }).concat(cryptoApi.middleware);
  }
});

export type AppDispatch = typeof store.dispatch