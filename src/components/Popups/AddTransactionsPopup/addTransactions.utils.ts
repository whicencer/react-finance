import { categoriesIncomeSelect, categoriesSelect } from './selectOptions';

export const validateFields = (callback: any, sum: any, note: string, balance: string, category: string, status: string) => {
  let currentError = '';
  const categoriesExpense = categoriesSelect.map(category => category.value);
  const categoriesIncome = categoriesIncomeSelect.map(category => category.value);

  if (sum < 1) {
    currentError = 'Your sum should be greater than 0';
  } else if (note.length > 80) {
    currentError = 'Note length should be less than 80 symbols';
  } else if (!balance) {
    currentError = 'Choose your balance';
  } else if (status === 'income' && categoriesExpense.includes(category) || status === 'expense' && categoriesIncome.includes(category)) {
    currentError = 'Choose correct category';
  }
  
  currentError ? alert(currentError) : callback();
};