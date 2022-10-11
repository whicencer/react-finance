import React from 'react';
import Header from '../../components/Header';
import { TransactionItem } from '../../components/TransactionItem';
import { PageContent } from '../../shared/components/PageContent';
import { TransactionsList } from './transactions.styles';

const Transactions = () => {
  return (
    <div>
      <Header />
      <PageContent>
        <h2>Transactions</h2>
        <TransactionsList>
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
        </TransactionsList>
      </PageContent>
    </div>
  );
};

export default React.memo(Transactions);