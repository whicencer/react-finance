import React, { useState } from 'react';
import Flex from '../../components/Flex';
import Header from '../../components/Header';
import { AddTransactionPopup } from '../../components/Popups/AddTransactionsPopup';
// import { TransactionItem } from '../../components/TransactionItem';
import { PageContent } from '../../shared/components/PageContent';
import { OpenPopupButton } from '../../shared/ui/OpenPopupButton';
import { TransactionsList } from './transactions.styles';

const Transactions = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  return (
    <div>
      <Header />
      <PageContent>
        <Flex justifyContent='space-between'>
          <h2>Transactions</h2>
          <OpenPopupButton onClick={() => setIsPopupActive(true)}>Add transaction</OpenPopupButton>
        </Flex>
        <TransactionsList>
          <p>Hier sind keine Transactions...</p>
        </TransactionsList>
      </PageContent>
      <AddTransactionPopup isActive={isPopupActive} setActive={setIsPopupActive} />
    </div>
  );
};

export default React.memo(Transactions);