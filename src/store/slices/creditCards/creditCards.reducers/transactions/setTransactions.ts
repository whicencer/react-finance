import { PayloadAction } from "@reduxjs/toolkit";
import { ITransaction } from "../../../../../app/typings/ITransaction";
import { ICardsState } from "../../creditCards.typings";

export const setTransactionsReducer = (state: ICardsState, action: PayloadAction<ITransaction[]>) => {
  state.transactions.items = [...action.payload];
};