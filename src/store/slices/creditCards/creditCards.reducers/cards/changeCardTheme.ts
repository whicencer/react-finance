import { PayloadAction } from "@reduxjs/toolkit";
import { ICardsState } from "../../creditCards.typings";
import { ThemesId } from '@typings/ThemesIdEnum';

export const changeCardThemeReducer = (state: ICardsState, action: PayloadAction<{ id: string, themeId: ThemesId }>) => {
  const card = state.cards.items.find((card) => card.card_id === action.payload.id);
  
  if (card !== undefined) {
    card.themeId = action.payload.themeId;
  }
};