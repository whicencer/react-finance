import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from '../..';
import { ITransaction } from '../../../app/typings/ITransaction';
import { ITransactionsState } from './transactions.types';

const initialState: ITransactionsState  = {
  items: [],
  isLoading: false
};


const transactionsSlice = createSlice({
  name: 'creditCards',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<ITransaction>) => {
      const cards = store.getState().creditCards;
      const card = cards.items.find((card) => card.id === action.payload.balance);

      state.items.unshift(action.payload);
      
      if (card !== undefined) {
        const resultSum = action.payload.status === 'expense' ? card.balance - action.payload.sum : card.balance + action.payload.sum;
        card.balance = resultSum;
      }
    },
    setTransactions: (state, action) => {
      state.items = [...action.payload];
    },
    deleteTransaction: (state, action: PayloadAction<ITransaction>) => {
      const cards = store.getState().creditCards;

      const idInState = state.items.findIndex(el => el.id === action.payload.id);
      const transactionBalanceId = cards.items.findIndex(el => el.id === action.payload.balance);
      
      state.items.splice(idInState, 1);
      action.payload.status === 'income'
        ? cards.items[transactionBalanceId].balance -= action.payload.sum
        : cards.items[transactionBalanceId].balance += action.payload.sum;
    }
  },
});

export const { addTransaction, setTransactions, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;