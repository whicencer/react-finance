import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from '../..';
import { ICardsState } from './creditCards.typings';

const initialState: ICardsState  = {
  items: [],
  isLoading: false
};


const creditCardsSlice = createSlice({
  name: 'creditCards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.items.push(action.payload);
    },
    setCards: (state, action) => {
      state.items = [...action.payload];
    },
    changeCardTheme: (state, action: PayloadAction<{ id: string, themeId: number }>) => {
      const card = state.items.find((card) => card.id === action.payload.id);
      
      if (card !== undefined) {
        card.themeId = action.payload.themeId;
      }
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      const transactions = store.getState().transactions;
      const idInState = state.items.findIndex(el => el.id === action.payload);
      const updateTransactions = transactions.items.filter(transaction => transaction.balance !== action.payload);

      state.items.splice(idInState, 1);
      transactions.items = updateTransactions;
    },
    changeCardName: (state, action: PayloadAction<{ id: string, newName: string }> ) => {
      const card = state.items.find(card => card.id === action.payload.id);

      if (card !== undefined) {
        card.cardName = action.payload.newName;
      }
    },
  },
});

export const { addCard, changeCardTheme, deleteCard, setCards, changeCardName } = creditCardsSlice.actions;
export default creditCardsSlice.reducer;