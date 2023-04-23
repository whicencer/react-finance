import { PayloadAction } from "@reduxjs/toolkit";
import { ICardsState } from "../../creditCards.typings";

export const changeCardNameReducer = (state: ICardsState, action: PayloadAction<{ id: string, newName: string }> ) => {
  const card = state.cards.items.find(card => card.card_id === action.payload.id);

  if (card !== undefined) {
    card.cardName = action.payload.newName;
  }
};