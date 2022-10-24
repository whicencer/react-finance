import { ICardData } from "../../../app/typings/ICardData";
import { IStoreTransaction } from "../../../app/typings/IStoreTransaction";

export interface ICardsState {
  cards: Array<ICardData>,
  transactions: Array<IStoreTransaction>
}