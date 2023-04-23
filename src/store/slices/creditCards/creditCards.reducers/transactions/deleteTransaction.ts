import { PayloadAction } from "@reduxjs/toolkit";
import { ITransaction } from "../../../../../app/typings/ITransaction";
import { ICardsState } from "../../creditCards.typings";

export const deleteTransactionReducer = (state: ICardsState, action: PayloadAction<ITransaction>) => {
  const idInState = state.transactions.items.findIndex(el => el.id === action.payload.id);
  const transactionBalanceId = state.cards.items.findIndex(el => el.card_id === action.payload.balanceId);
  
  state.transactions.items.splice(idInState, 1);
  action.payload.status === 'income'
    ? state.cards.items[transactionBalanceId].balance -= action.payload.sum
    : state.cards.items[transactionBalanceId].balance += action.payload.sum;
};