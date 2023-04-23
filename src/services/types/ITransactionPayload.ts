export interface ITransactionPayload {
  status: 'income' | 'expense';
  sum: number;
  note: string;
  balanceId: string;
  category: 
    'entertainments' |
    'beauty' |
    'health' |
    'food' |
    'health' |
    'tech' |
    'education' |
    'investments' |
    'traveling' |
    'transaport' |
    'income' |
    'other';
}