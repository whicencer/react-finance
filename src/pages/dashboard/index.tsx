import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import CreditCard from '../../components/CreditCard';
import Flex from '../../shared/ui/Flex';
import AddCardPopup from '../../components/Popups/AddCardPopup';

import { TransactionItem } from '../../components/TransactionItem';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';
import { getCardsFromDB } from '../../services/cardsService';
import { useDispatch } from 'react-redux';
import { setCards, setTransactions } from '../../store/slices/creditCards';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import { getTransactionsFromDB } from '../../services/transactionsService';
import { PageContent } from '../../shared/components/PageContent';
import { PageButton } from '../../shared/ui/PageButton';

const Dashboard = () => {
  useDocumentTitle('React Finance - Dashboard');
  
  const { items: cards } = useTypedSelector(state => state.creditCards.cards);
  const { items: transactions } = useTypedSelector(state => state.creditCards.transactions);

  const dispatch = useDispatch();
  
  useEffect(() => {
    getCardsFromDB().then(data => dispatch(setCards(data)));
    getTransactionsFromDB().then(data => dispatch(setTransactions(data)));
  }, []);
  
  // popups state
  const [isAddCardActive, setAddCardActive] = useState(false);

  const last5Transactions = transactions.slice(0, 5).map(transaction => {
    return <TransactionItem transaction={transaction} key={transaction.id} />;
  });
  
  const cardsMapped = !cards.length ? `You haven't made any cards yet` : cards?.map(({ cardName, balance, themeId, id }) => {

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

  return (
    <div>
      <Header />
      <PageContent>
        <Flex alignItems={'center'} justifyContent={'space-between'} style={{ marginBottom: '24px' }}>
          <h2>Dashboard</h2>
          <PageButton onClick={() => setAddCardActive(true)}>Add credit card</PageButton>
        </Flex>
        <Flex style={{ overflowY: 'auto', paddingBottom: '20px' }} alignItems={'center'}>
          { cardsMapped }
        </Flex>
        
        {
          transactions?.length
          ?
            <Flex direction='column' style={{ marginTop: 20 }}>
              <h3>Last 5 transactions</h3>
              { last5Transactions }
            </Flex>
          : null
        }
      </PageContent>
      
      {/* Popups */}
      <AddCardPopup isActive={isAddCardActive} setActive={setAddCardActive} />
    </div>
  );
};

export default React.memo(Dashboard);