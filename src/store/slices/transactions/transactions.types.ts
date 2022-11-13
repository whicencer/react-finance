import { ITransaction } from "../../../app/typings/ITransaction";

export interface ITransactionsState {
  items: Array<ITransaction>;
  isLoading: boolean,
  error?: string;
}