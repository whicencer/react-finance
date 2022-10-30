import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITransaction } from '../../../app/typings/ITransaction';
import { ICardsState } from './creditCards.typings';

const initialState: ICardsState  = {
  cards: [],
  transactions: []
};


const creditCardsSlice = createSlice({
  name: 'creditCards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    setCards: (state, action) => {
      state.cards = [...action.payload];
    },
    changeCardTheme: (state, action: PayloadAction<{ id: string, themeId: number }>) => {
      const card = state.cards.find((card) => card.id === action.payload.id);
      
      if (card !== undefined) {
        card.themeId = action.payload.themeId;
      }
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      const idInState = state.cards.findIndex(el => el.id === action.payload);
      state.cards.splice(idInState, 1);
    },
    addTransaction: (state, action: PayloadAction<ITransaction>) => {
      state.transactions.unshift(action.payload);
    },
    setTransactions: (state, action) => {
      state.transactions = [...action.payload];
    },
    deleteTransaction: (state, action: PayloadAction<ITransaction>) => {
      const idInState = state.transactions.findIndex(el => el.id === action.payload.id);
      const transactionBalanceId = state.cards.findIndex(el => el.id === action.payload.balance);
      
      state.transactions.splice(idInState, 1);
      action.payload.status === 'income'
        ? state.cards[transactionBalanceId].balance -= action.payload.sum
        : state.cards[transactionBalanceId].balance += action.payload.sum;
    }
  },
});

export const { addCard, changeCardTheme, deleteCard, setCards, addTransaction, setTransactions, deleteTransaction } = creditCardsSlice.actions;
export default creditCardsSlice.reducer;