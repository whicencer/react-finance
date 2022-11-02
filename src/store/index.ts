import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user';
import creditCards from './slices/creditCards';
import currencies from './slices/currencies';

export const store = configureStore({
  reducer: {
    user: userSlice,
    creditCards: creditCards,
    currencies: currencies
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type AppDispatch = typeof store.dispatch