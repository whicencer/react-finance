import { categoriesIncomeSelect, categoriesSelect } from './selectOptions';

export const validateFields = (callback: any, sum: any, note: string, balance: string, category: string, status: string) => {
  let currentError = '';
  const categoriesExpense = categoriesSelect.map(category => category.value);
  const categoriesIncome = categoriesIncomeSelect.map(category => category.value);

  if (sum < 1) {
    currentError = 'Больше 0 указывай, дебыл';
  } else if (note.length > 80) {
    currentError = 'Ты бы ещё миллион символов написал, бублик';
  } else if (!balance) {
    currentError = 'Укажи баланс';
  } else if (status === 'income' && categoriesExpense.includes(category) || status === 'expense' && categoriesIncome.includes(category)) {
    currentError = 'Выберите правильную категорию';
  }
  
  currentError ? alert(currentError) : callback();
};