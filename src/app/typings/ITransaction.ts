export interface ITransaction {
  status: 'income' | 'expense',
  sum: number,
  balance: string,
  category: string,
  note: string,
}