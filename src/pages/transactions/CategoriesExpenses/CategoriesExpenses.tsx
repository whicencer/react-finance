/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { DatePicker } from '../../../shared/ui/DatePicker';
import Flex from '../../../shared/ui/Flex';
import { formatNumber } from '../../../utils/formatNumber';
import styles from './CategoriesExpenses.module.scss';
import { ICategoriesExpenses } from './CategoriesExpenses.types';

export const CategoriesExpenses = () => {
  const { items: transactions } = useTypedSelector(state => state.creditCards.transactions);
  const { symbol } = useTypedSelector(state => state.currencies.currentCurrency);
  const [{ month, year }, setCurrentDate] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() });

  const allExpenseCategories = 'beauty,education,entertainments,food,health,investments,other,tech,transport,traveling'.split(',');

  let summaryExpense = 0; 
  const allTransactionsByCategory: ICategoriesExpenses = {};
  allExpenseCategories.forEach(category => {
    const transactionsByCategory = transactions.filter(transaction => {
      return transaction.category === category && transaction.date.getFullYear() === year && transaction.date.getMonth() === month;
    });

    allTransactionsByCategory[category] = transactionsByCategory;
    summaryExpense += transactionsByCategory.map(_ => _.sum).reduce((a,b) => a+b, 0);
  });

  const monthsText = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',');

  return (
    <Flex direction='column' style={{ position: 'relative' }}>
      <Flex direction='column'>
        <DatePicker onChange={(month, year) => setCurrentDate({month, year})} />
        <p style={{ marginTop: 10 }}>Expenses in <span style={{ fontWeight: 600, color: '#959595' }}>{`${monthsText[month]} ${year}`}</span>: {symbol+formatNumber(summaryExpense)}</p>
      </Flex>
      <Flex alignItems='center' className={styles.categoriesExpenses}>
        {
          Object.keys(allTransactionsByCategory).map(category => {
            const categorySum = allTransactionsByCategory[category].length && formatNumber(allTransactionsByCategory[category].map(transaction => transaction.sum).reduce((a,b) => a+b));
            return (
              <span className={styles.categoriesExpenseItem} key={category} data-clue={`${category[0].toUpperCase() + category.slice(1)}: ${symbol+categorySum}`}>
                <img src={require(`../../../assets/${category}.svg`)} alt={category} />
              </span>
            );
          })
        }
      </Flex>
    </Flex>
  );
};
