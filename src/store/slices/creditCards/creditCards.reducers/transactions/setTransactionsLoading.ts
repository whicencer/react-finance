import { PayloadAction } from "@reduxjs/toolkit";
import { ICardsState } from "../../creditCards.typings";

export const setTransactionsLoadingReducer = (state: ICardsState, action: PayloadAction<boolean>) => {
  state.transactions.isLoading = action.payload;
};