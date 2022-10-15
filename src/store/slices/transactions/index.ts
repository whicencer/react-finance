import { createSlice } from "@reduxjs/toolkit";
import { ITransactionsState } from "./transactions.typings";

const initialState: ITransactionsState = {
  transactions: [
    {balance: 'Card1', category: 'Entertainments', status: 'expense', sum: 100, note: 'Купил подписку на ютуб Банана'}
  ]
};

const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;