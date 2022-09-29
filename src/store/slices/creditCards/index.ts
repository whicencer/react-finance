import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardData } from '../../../app/typings/ICardData';

const initialState:{cards: ICardData[]}  = {
  cards: []
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
    deleteCard: (state, action) => {
      const idInState = state.cards.findIndex(el => el.id === action.payload);
      state.cards.splice(idInState, 1);
    },
  },
});

export const { addCard, changeCardTheme, deleteCard, setCards } = creditCardsSlice.actions;
export default creditCardsSlice.reducer;