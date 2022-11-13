import { PayloadAction } from "@reduxjs/toolkit";
import { ICardsState } from "../../creditCards.typings";

export const deleteCardReducer = (state: ICardsState, action: PayloadAction<string>) => {
  const idInState = state.transactions.items.findIndex(el => el.id === action.payload);
  const updateTransactions = state.transactions.items.filter(transaction => transaction.balance !== action.payload);

  state.cards.items.splice(idInState, 1);
  state.transactions.items = updateTransactions;
};