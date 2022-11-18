/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { ITransaction } from '../../../app/typings/ITransaction';
import { CategoryExpensesPopup } from '../../../components/Popups/CategoryExpensesPopup';
import { DatePicker } from '../../../shared/ui/DatePicker';
import Flex from '../../../shared/ui/Flex';
import { firstBigLetter } from '../../../utils/firstBigLetter';
import { formatNumber } from '../../../utils/formatNumber';
import styles from './CategoriesExpenses.module.scss';
import { ICategoriesExpenses } from './CategoriesExpenses.types';

export const CategoriesExpenses = () => {
  const { items: transactions } = useTypedSelector(state => state.creditCards.transactions);
  const { symbol } = useTypedSelector(state => state.currencies.currentCurrency);
  const [{ month, year }, setCurrentDate] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() });
  
  const [currentTransactions, setTransactions] = useState<ITransaction[]>([]);
  const [currentCategory, setCurrentCategory] = useState('entertainments');
  const [currentCategorySum, setCurrentCategorySum] = useState('0');

  // Popup
  const [isCategoryExpensesActive, setIsCategoryExpensesActive] = useState(false);

  const allExpenseCategories = 'beauty,education,entertainments,food,health,investments,other,tech,transport,traveling,income'.split(',');

  let summaryExpense = 0;
  let summaryIncome = 0;
  
  const allTransactionsByCategory: ICategoriesExpenses = {};
  allExpenseCategories.forEach(category => {
    const transactionsByCategory = transactions.filter(transaction => {
      return transaction.category === category && transaction.date.getFullYear() === year && transaction.date.getMonth() === month;
    });

    allTransactionsByCategory[category] = transactionsByCategory;
    transactionsByCategory.forEach(transaction => {
      transaction.status === 'income'
        ? summaryIncome += transaction.sum
        : summaryExpense += transaction.sum;
    });
  });

  const monthsText = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',');

  return (
    <Flex direction='column' style={{ position: 'relative' }}>
      <Flex direction='column'>
        <DatePicker onChange={(month, year) => setCurrentDate({month, year})} />
        <p style={{ marginTop: 10 }}>Statistics on <span style={{ fontWeight: 600, color: '#959595' }}>{`${monthsText[month]} ${year}`}</span>: </p>
        <p>- Expense: <span style={{ color: '#EA3943' }}>{symbol+formatNumber(summaryExpense)}</span></p>
        <p>- Income: <span style={{ color: '#0cbe7a' }}>{symbol+formatNumber(summaryIncome)}</span></p>
      </Flex>
      <Flex alignItems='center' className={styles.categoriesExpenses}>
        {
          Object.keys(allTransactionsByCategory).map(category => {
            const transactions = allTransactionsByCategory[category];
            const categorySum = formatNumber(allTransactionsByCategory[category].map(transaction => transaction.sum).reduce((a,b) => a+b, 0));
            
            return (
              <span onClick={() => {
                setTransactions(transactions);
                setCurrentCategory(category);
                setCurrentCategorySum(categorySum);
                setIsCategoryExpensesActive(true);
              }} className={styles.categoriesExpenseItem} key={category} data-clue={`${firstBigLetter(category)}: ${symbol+categorySum}`}>
                <img src={require(`../../../assets/${category}.svg`)} alt={category} />
              </span>
            );
          })
        }
      </Flex>
      <CategoryExpensesPopup categorySum={currentCategorySum} transactions={currentTransactions} category={currentCategory} isActive={isCategoryExpensesActive} setActive={setIsCategoryExpensesActive} />
    </Flex>
  );
};
