import React from 'react';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { TransactionItem } from '../../../components/TransactionItem';
import { TransactionsSkeletons } from './TransactionsSkeletons';

const TransactionsList = () => {
  const { items: transactions, isLoading } = useTypedSelector(state => state.creditCards.transactions);
  
  if (isLoading) {
    return <TransactionsSkeletons />;
  }
  if (!transactions.length) {
    return <p>You have not made any transactions yet</p>;
  }
  
  return (
    <>
      <h3>Last 5 transactions</h3>
      { transactions.slice(0, 5).map(transaction => <TransactionItem transaction={transaction} key={transaction.id} />) }
    </>
  );
};

export default TransactionsList;