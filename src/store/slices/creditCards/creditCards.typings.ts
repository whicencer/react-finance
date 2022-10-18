import { ICardData } from "../../../app/typings/ICardData";
import { ITransaction } from "../../../app/typings/ITransaction";

export interface ICardsState {
  cards: Array<ICardData>,
  transactions: Array<ITransaction>
}