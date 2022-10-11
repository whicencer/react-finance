import React from 'react';
import Header from '../../components/Header';
import { PageContent } from '../../shared/components/PageContent';

const Transactions = () => {
  return (
    <div>
      <Header />
      <PageContent>
        <h2>Transactions</h2>
        
      </PageContent>
    </div>
  );
};

export default React.memo(Transactions);