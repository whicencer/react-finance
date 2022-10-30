import { ITransaction } from "../../../app/typings/ITransaction";

export interface ITransactionContextMenuProps {
  x: number;
  y: number;
  transaction: ITransaction;
  currentBalance: number;
}