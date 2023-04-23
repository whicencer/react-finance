import { PayloadAction } from "@reduxjs/toolkit";
import { ICardsState } from "../../creditCards.typings";

export const deleteCardReducer = (state: ICardsState, action: PayloadAction<string>) => {

  const idInState = state.cards.items.findIndex(el => el.card_id === action.payload);
  const updateTransactions = state.transactions.items.filter(transaction => transaction.balanceId !== action.payload);

  state.cards.items.splice(idInState, 1);
  state.transactions.items = updateTransactions;
};