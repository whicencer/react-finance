/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { ITransaction } from '@typings/ITransaction';
import { CategoryExpensesPopup } from '@components/Popups/CategoryExpensesPopup';
import { icons } from '@shared/categoryImages';
import Flex from '@shared/ui/Flex';
import { firstBigLetter } from '@utils/firstBigLetter';
import { formatNumber } from '@utils/formatNumber';
import { monthsText } from '../../transactions.constants';
import { allExpenseCategories } from './CategoriesExpenses.constants';
import styles from './CategoriesExpenses.module.scss';
import { ICategoriesExpenses } from './CategoriesExpenses.types';

export const CategoriesExpenses: React.FC<{ currentDate: { month: number, year: number } }> = ({ currentDate }) => {
  const { month, year } = currentDate;
  const { items: transactions } = useTypedSelector(state => state.creditCards.transactions);
  const { symbol } = useTypedSelector(state => state.currencies.currentCurrency);
  
  const [categoryTransactions, setCategoryTransactions] = useState<ITransaction[]>([]);
  const [currentCategory, setCurrentCategory] = useState('entertainments');
  const [currentCategorySum, setCurrentCategorySum] = useState('0');

  // Popup
  const [isCategoryExpensesActive, setIsCategoryExpensesActive] = useState(false);

  let summaryExpense = 0;
  let summaryIncome = 0;
  
  const allTransactionsByCategory: ICategoriesExpenses = {};
  allExpenseCategories.forEach(category => {
    const transactionsByCategory = transactions.filter(transaction => {
      return transaction.category === category
        && transaction.date.getFullYear() === year
        && transaction.date.getMonth() === month;
    });

    allTransactionsByCategory[category] = transactionsByCategory;
    transactionsByCategory.forEach(transaction => {
      transaction.status === 'income'
        ? summaryIncome += transaction.sum
        : summaryExpense += transaction.sum;
    });
  });

  return (
    <Flex direction='column' style={{ position: 'relative' }}>
      <Flex direction='column'>
        <p style={{ marginTop: 10 }}>Statistics on <span style={{ fontWeight: 600, color: '#959595' }}>{`${monthsText[month]} ${year}`}</span>: </p>
        <p>Expense: <span style={{ color: '#EA3943' }}>{symbol+formatNumber(summaryExpense)}</span></p>
        <p>Income: <span style={{ color: '#0cbe7a' }}>{symbol+formatNumber(summaryIncome)}</span></p>
      </Flex>
      <Flex alignItems='center' className={styles.categoriesExpenses}>
        {
          Object.keys(allTransactionsByCategory).map(category => {
            const transactions = allTransactionsByCategory[category];
            const categorySum = formatNumber(allTransactionsByCategory[category].map(transaction => transaction.sum).reduce((a,b) => a+b, 0));
            
            return (
              <span onClick={() => {
                setCategoryTransactions(transactions);
                setCurrentCategory(category);
                setCurrentCategorySum(categorySum);
                setIsCategoryExpensesActive(true);
              }} className={styles.categoriesExpenseItem} key={category} data-clue={`${firstBigLetter(category)}: ${symbol+categorySum}`}>
                <img src={icons[category]} alt={category} />
              </span>
            );
          })
        }
      </Flex>
      <CategoryExpensesPopup categorySum={currentCategorySum} transactions={categoryTransactions} category={currentCategory} isActive={isCategoryExpensesActive} setActive={setIsCategoryExpensesActive} />
    </Flex>
  );
};
