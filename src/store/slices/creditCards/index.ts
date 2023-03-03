import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardsState } from './creditCards.typings';
import { changeCardNameReducer } from './creditCards.reducers/cards/changeCardName';
import { deleteCardReducer } from './creditCards.reducers/cards/deleteCard';
import { changeCardThemeReducer } from './creditCards.reducers/cards/changeCardTheme';
import { addCardReducer } from './creditCards.reducers/cards/addCard';
import { deleteTransactionReducer } from './creditCards.reducers/transactions/deleteTransaction';
import { setTransactionsReducer } from './creditCards.reducers/transactions/setTransactions';
import { addTransactionReducer } from './creditCards.reducers/transactions/addTransaction';
import { setTransactionsLoadingReducer } from './creditCards.reducers/transactions/setTransactionsLoading';
import { fetchCards } from './creditCards.actions/fetchCards';
import { ICardData } from '../../../app/typings/ICardData';
import { ITransaction } from '../../../app/typings/ITransaction';
import { fetchTransactions } from './creditCards.actions/fetchTransactions';

const initialState: ICardsState  = {
  cards: {
    items: [],
    isLoading: false
  },
  transactions: {
    items: [],
    isLoading: false
  }
};


const creditCardsSlice = createSlice({
  name: 'creditCards',
  initialState,
  reducers: {
    addCard: addCardReducer,
    changeCardTheme: changeCardThemeReducer,
    deleteCard: deleteCardReducer,
    changeCardName: changeCardNameReducer,
    deleteTransaction: deleteTransactionReducer,
    setTransactions: setTransactionsReducer,
    addTransaction: addTransactionReducer,
    setTransactionsLoading: setTransactionsLoadingReducer
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCards.pending, state => {
        state.cards.isLoading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action: PayloadAction<ICardData[]>) => {
        state.cards.items = action.payload;
        state.cards.isLoading = false;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.cards.isLoading = false;
        state.cards.error = action.error.message;
      })
      .addCase(fetchTransactions.pending, state => {
        state.transactions.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<ITransaction[]>) => {
        state.transactions.items = action.payload;
        state.transactions.isLoading = false;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.transactions.isLoading = false;
        state.transactions.error = action.error.message;
      });
  }
});

export const { addCard, setTransactionsLoading, changeCardTheme, deleteCard, changeCardName, deleteTransaction, setTransactions, addTransaction } = creditCardsSlice.actions;
export default creditCardsSlice.reducer;