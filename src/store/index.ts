import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import creditCards from './slices/creditCards';

export const store = configureStore({
  reducer: {
    user: userSlice,
    creditCards: creditCards,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch