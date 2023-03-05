import { ITransaction } from '../../../../app/typings/ITransaction';

export interface ICategoriesExpenses {
  [key: string]: ITransaction[];
}
