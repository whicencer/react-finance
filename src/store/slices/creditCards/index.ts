import { createSlice } from '@reduxjs/toolkit';
import { ICardData } from '../../../app/typings/ICardData';

const initialState: ICardData[] = [];


const creditCardsSlice = createSlice({
  name: 'creditCards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCard } = creditCardsSlice.actions;
export default creditCardsSlice.reducer;