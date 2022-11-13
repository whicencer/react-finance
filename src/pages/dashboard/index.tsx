import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import CreditCard from '../../components/CreditCard';
import Flex from '../../shared/ui/Flex';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import AddCardPopup from '../../components/Popups/AddCardPopup';

import { useDispatch } from 'react-redux';
import { setCards } from '../../store/slices/creditCards';
import { setTransactions } from '../../store/slices/transactions';
import { PageContent } from '../../shared/components/PageContent';
import { PageButton } from '../../shared/ui/PageButton';
import { getCardsFromDB } from '../../app/services/getCardsFromDB';
import { getTransactionsFromDB } from '../../app/services/getTransactionsFromDB';
import { TransactionItem } from '../../components/TransactionItem';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';

const Dashboard = () => {
  useDocumentTitle('React Finance - Dashboard');
  const { items: cards } = useTypedSelector(state => state.creditCards);
  const { items: transactions } = useTypedSelector(state => state.transactions);
  const dispatch = useDispatch();

  // popups state
  const [isAddCardActive, setAddCardActive] = useState(false);

  useEffect(() => {
    getCardsFromDB().then(data => dispatch(setCards(data)));
    getTransactionsFromDB().then(data => dispatch(setTransactions(data)));
  }, []);

  const mappedCards = !cards.length ? `You haven't made any cards yet` : cards.map(({ cardName, balance, themeId, id }) => {
    return (
      <CreditCard
        themeId={themeId}
        id={id}
        cardName={cardName}
        balance={balance}
        key={id}
      />
    );
  });
  const last5Transactions = transactions.slice(0, 5).map(transaction => {
    return <TransactionItem transaction={transaction} key={transaction.id} />;
  });

  return (
    <div>
      <Header />
      <PageContent>
        <Flex alignItems={'center'} justifyContent={'space-between'} style={{ marginBottom: '24px' }}>
          <h2>Dashboard</h2>
          <PageButton onClick={() => setAddCardActive(true)}>Add credit card</PageButton>
        </Flex>
        <Flex style={{ overflowY: 'auto', paddingBottom: '20px' }} alignItems={'center'}>
          { mappedCards }
        </Flex>
        
        {
          transactions.length
          ?
            <Flex direction='column' style={{ marginTop: 20 }}>
              <h3>Last 5 transactions</h3>
              {last5Transactions}
            </Flex>
          : ''
        }
      </PageContent>
      
      {/* Popups */}
      <AddCardPopup isActive={isAddCardActive} setActive={setAddCardActive} />
    </div>
  );
};

export default React.memo(Dashboard);