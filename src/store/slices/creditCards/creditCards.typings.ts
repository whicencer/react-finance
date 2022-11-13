import { ICardData } from "../../../app/typings/ICardData";
import { ITransaction } from "../../../app/typings/ITransaction";

export interface ICardsState {
  cards: {
    items: Array<ICardData>;
    isLoading: boolean;
    error?: string;
  },
  transactions: {
    items: Array<ITransaction>;
    isLoading: boolean,
    error?: string;
  }
}