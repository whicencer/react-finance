import React from 'react';
import Header from '../../components/Header';
import { PageContent } from '../../shared/components/PageContent';
import { TransactionsList } from './transactions.styles';

const Transactions = () => {
  return (
    <div>
      <Header />
      <PageContent>
        <h2>Transactions</h2>
        <TransactionsList>
          <div>Transaction #1</div>
          <div>Transaction #2</div>
          <div>Transaction #3</div>
          <div>Transaction #4</div>
        </TransactionsList>
      </PageContent>
    </div>
  );
};

export default React.memo(Transactions);