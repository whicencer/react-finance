export interface ITransaction {
  CreatedAt: Date,
  status: string,
  sum: number,
  balanceId: string,
  category: string,
  note: string,
  id: string
}