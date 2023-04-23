import { PayloadAction } from "@reduxjs/toolkit";
import { ITransaction } from "../../../../../app/typings/ITransaction";
import { ICardsState } from "../../creditCards.typings";

export const addTransactionReducer = (state: ICardsState, action: PayloadAction<ITransaction>) => {
  const card = state.cards.items.find((card) => card.card_id === action.payload.balanceId);

  state.transactions.items.unshift(action.payload);
  
  if (card !== undefined) {
    const resultSum = action.payload.status === 'expense' ? card.balance - action.payload.sum : card.balance + action.payload.sum;
    card.balance = resultSum;
  }
};