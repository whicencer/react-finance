import { ICardData } from '@typings/ICardData';
import { ITransaction } from '@typings/ITransaction';

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