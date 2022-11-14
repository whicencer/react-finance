import { createSlice } from '@reduxjs/toolkit';
import { ICardsState } from './creditCards.typings';
import { changeCardNameReducer } from './creditCards.reducers/cards/changeCardName';
import { deleteCardReducer } from './creditCards.reducers/cards/deleteCard';
import { changeCardThemeReducer } from './creditCards.reducers/cards/changeCardTheme';
import { setCardsReducer } from './creditCards.reducers/cards/setCards';
import { addCardReducer } from './creditCards.reducers/cards/addCard';
import { deleteTransactionReducer } from './creditCards.reducers/transactions/deleteTransaction';
import { setTransactionsReducer } from './creditCards.reducers/transactions/setTransactions';
import { addTransactionReducer } from './creditCards.reducers/transactions/addTransaction';
import { setCardsLoadingReducer } from './creditCards.reducers/cards/setCardsLoading';

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
    setCards: setCardsReducer,
    changeCardTheme: changeCardThemeReducer,
    deleteCard: deleteCardReducer,
    changeCardName: changeCardNameReducer,
    deleteTransaction: deleteTransactionReducer,
    setTransactions: setTransactionsReducer,
    addTransaction: addTransactionReducer,
    setCardsLoading: setCardsLoadingReducer
  },
});

export const { addCard, setCardsLoading, changeCardTheme, deleteCard, setCards, changeCardName, deleteTransaction, setTransactions, addTransaction } = creditCardsSlice.actions;
export default creditCardsSlice.reducer;