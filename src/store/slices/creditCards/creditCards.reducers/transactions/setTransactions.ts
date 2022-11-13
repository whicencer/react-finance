import { ICardsState } from "../../creditCards.typings";

export const setTransactionsReducer = (state: ICardsState, action: any) => {
  state.transactions.items = [...action.payload];
};