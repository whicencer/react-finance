/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import Flex from '../../../shared/ui/Flex';
import { formatNumber } from '../../../utils/formatNumber';
import styles from './CategoriesExpenses.module.scss';
import { ICategoriesExpenses } from './CategoriesExpenses.types';

export const CategoriesExpenses = () => {
  const { items: transactions } = useTypedSelector(state => state.creditCards.transactions);
  const { symbol } = useTypedSelector(state => state.currencies.currentCurrency);
  const [currentYear] = useState(new Date().getFullYear());

  const allExpenseCategories = 'beauty,education,entertainments,food,health,investments,other,tech,transport,traveling'.split(',');

  const allTransactionsByCategory: ICategoriesExpenses = {};
  allExpenseCategories.forEach(category => {
    const transactionsByCategory = transactions.filter(transaction => transaction.category === category && transaction.date.getFullYear() === currentYear);

    allTransactionsByCategory[category] = transactionsByCategory;
  });

  return (
    <Flex direction='column' className={styles.categoriesExpenses}>
      <h4>Expenses by categories in {currentYear}:</h4>
      <Flex justifyContent='center' margin='10px 0' padding='5px 0'>
        {
          Object.keys(allTransactionsByCategory).map(category => {
            const categorySum = allTransactionsByCategory[category].length && formatNumber(allTransactionsByCategory[category].map(transaction => transaction.sum).reduce((a,b) => a+b));
            return (
              <Flex className={styles.categoryExpensesItem} justifyContent='center' key={category}>
                <img className={styles.categoryExpensesItemIcon} src={require(`../../../assets/${category}.svg`)} alt={category} />
                <div className={styles.tooltip}>
                  <span>{category[0].toUpperCase() + category.slice(1)}</span>
                  <span>{symbol + categorySum}</span>
                </div>
              </Flex>
            );
          })
        }
      </Flex>
    </Flex>
  );
};
