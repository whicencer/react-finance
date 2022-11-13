import { ICardsState } from "../../creditCards.typings";

export const setCardsReducer = (state: ICardsState, action: any) => {
  state.cards.items = [...action.payload];
};