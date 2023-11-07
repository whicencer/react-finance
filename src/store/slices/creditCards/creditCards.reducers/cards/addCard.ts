import { PayloadAction } from "@reduxjs/toolkit";
import { ICardData } from "@typings/ICardData";
import { ICardsState } from "../../creditCards.typings";

export const addCardReducer = (state: ICardsState, action: PayloadAction<ICardData>) => {
  state.cards.items.push(action.payload);
};