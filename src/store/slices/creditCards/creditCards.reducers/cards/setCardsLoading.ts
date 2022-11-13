import { PayloadAction } from "@reduxjs/toolkit";
import { ICardsState } from "../../creditCards.typings";

export const setCardsLoadingReducer = (state: ICardsState, action: PayloadAction<boolean>) => {
  state.cards.isLoading = action.payload;
};