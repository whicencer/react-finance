import React, { useState, useEffect } from 'react';

import Flex from '../../shared/ui/Flex';
import AddCardPopup from '../../components/Popups/AddCardPopup';
import { useDispatch } from 'react-redux';
import { PageButton } from '../../shared/ui/PageButton';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';
import { fetchCards } from '../../store/slices/creditCards/creditCards.actions/fetchCards';
import { fetchTransactions } from '../../store/slices/creditCards/creditCards.actions/fetchTransactions';
import { AppThunkDispatch } from '../../app/typings/AppThunkDispatch';
import CreditCardsList from './dashboard.components/CreditCardsList';
import TransactionsList from './dashboard.components/TransactionsList';

const Dashboard = () => {
  useDocumentTitle('React Finance - Dashboard');
  const dispatch = useDispatch<AppThunkDispatch>();

  // popups state
  const [isAddCardActive, setAddCardActive] = useState(false);

  useEffect(() => {
    dispatch(fetchCards());
    dispatch(fetchTransactions());
  }, []);

  return (
    <div>
      <Flex alignItems={'center'} justifyContent={'space-between'} style={{ marginBottom: '24px' }}>
        <h2>Dashboard</h2>
        <PageButton onClick={() => setAddCardActive(true)}>Add credit card</PageButton>
      </Flex>
      <Flex style={{ overflowY: 'auto', paddingBottom: '20px' }} alignItems={'center'}>
        <CreditCardsList />
      </Flex>

      <Flex direction='column' style={{ marginTop: 20 }}>
        <TransactionsList />
      </Flex>

      {/* Popups */}
      <AddCardPopup isActive={isAddCardActive} setActive={setAddCardActive} />
    </div>
  );
};

export default React.memo(Dashboard);