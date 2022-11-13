import { ICardData } from "../../../app/typings/ICardData";

export interface ICardsState {
  items: Array<ICardData>;
  isLoading: boolean,
  error?: string;
}