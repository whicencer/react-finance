export interface FormDataState {
  status: 'income' | 'expense';
  sum: number;
  note: string;
  balanceId: string;
  category: Category;
}

export interface Response {
  message:     string;
  ok:          boolean;
  transaction: Transaction;
}

export interface Transaction {
  ID:        number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  id:        string;
  balanceId: string;
  category:  string;
  note:      string;
  status:    string;
  sum:       number;
  user_id:   number;
}

export enum Category {
  ENTERTAINMENTS = 'entertainments',
  BEAUTY = 'beauty',
  HEALTH = 'health',
  FOOD = 'food',
  TECH = 'tech',
  EDUCATION = 'education',
  INVESTMENTS = 'investments',
  TRAVELING = 'traveling',
  INCOME = 'income',
  OTHER = 'other'
}