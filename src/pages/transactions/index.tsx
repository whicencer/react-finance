import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import Flex from '../../components/Flex';
import Header from '../../components/Header';
import { AddTransactionPopup } from '../../components/Popups/AddTransactionsPopup';
import { TransactionItem } from '../../components/TransactionItem';
import { PageContent } from '../../shared/components/PageContent';
import { OpenPopupButton } from '../../shared/ui/PageButton';
import { TransactionsList } from './transactions.styles';

const Transactions = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const { transactions } = useTypedSelector(state => state.creditCards);

  return (
    <div>
      <Header />
      <PageContent>
        <Flex justifyContent='space-between'>
          <h2>Transactions</h2>
          <OpenPopupButton onClick={() => setIsPopupActive(true)}>Add transaction</OpenPopupButton>
        </Flex>
        <TransactionsList>
          {
            transactions.length === 0 ? `You haven't created any transactions yet` : transactions.map((transaction, key) => {
              return <TransactionItem transaction={transaction} key={key} />;
            })
          }
        </TransactionsList>
      </PageContent>
      <AddTransactionPopup isActive={isPopupActive} setActive={setIsPopupActive} />
    </div>
  );
};

export default React.memo(Transactions);