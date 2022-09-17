import React, { useState } from 'react';

import { DashboardContent } from './dashboard.styles';
import { AddCreditCard } from './dashboard.styles';

import Header from '../../components/Header';
import CreditCard from '../../components/CreditCard';
import Flex from '../../components/Flex';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import AddCardPopup from '../../components/AddCardPopup';

const Dashboard = () => {
  const creditCards = useTypedSelector(state => state.creditCards);
  const [isActive, setActive] = useState(false);

  const cards = !creditCards.length ? `You haven't made any cards yet` : creditCards.map(({ cardName, balance }, key) => {
    return <CreditCard cardName={cardName} balance={balance} key={key} />;
  });

  return (
    <div>
      <Header />
      <DashboardContent>
        <Flex alignItems={'center'} justifyContent={'space-between'} style={{ marginBottom: '24px' }}>
          <h2>Dashboard</h2>
          <AddCreditCard onClick={() => setActive(true)}>Add Credit Card</AddCreditCard>
        </Flex>
        <Flex style={{ overflowY: 'auto', paddingBottom: '20px' }} alignItems={'center'}>
          { cards }
        </Flex>
      </DashboardContent>
      <AddCardPopup isActive={isActive} setActive={setActive} />
    </div>
  );
};

export default Dashboard;