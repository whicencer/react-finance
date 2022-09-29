import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardData } from '../../../app/typings/ICardData';

const initialState: ICardData[] = [];


const creditCardsSlice = createSlice({
  name: 'creditCards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    changeCardTheme: (state, action: PayloadAction<{ id: string, themeId: number }>) => {
      const card = state.find((card) => card.id === action.payload.id);
      
      if (card !== undefined) {
        card.themeId = action.payload.themeId;
      }
    },
    deleteCard: (state, action) => {
      const idInState = state.findIndex(el => el.id === action.payload);
      state.splice(idInState, 1);
    },
  },
});

export const { addCard, changeCardTheme, deleteCard } = creditCardsSlice.actions;
export default creditCardsSlice.reducer;