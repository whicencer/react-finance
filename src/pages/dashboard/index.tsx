import React, { useEffect, useState } from 'react';

import { DashboardContent } from './dashboard.styles';
import { AddCreditCard } from './dashboard.styles';

import Header from '../../components/Header';
import CreditCard from '../../components/CreditCard';
import Flex from '../../components/Flex';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import AddCardPopup from '../../components/AddCardPopup';

import { getCardFromDB } from './dashboard.service';
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/slices/creditCards';
import CardThemePopup from '../../components/CardThemePopup';

const Dashboard = () => {
  const creditCards = useTypedSelector(state => state.creditCards);

  const [isAddCardActive, setAddCardActive] = useState(false);
  const [isCardThemeActive, setCardThemeActive] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getCardFromDB().then(data => {
      data.forEach(card => {
        dispatch(addCard(card));
      });
    });
  }, []);

  const cards = !creditCards.length ? `You haven't made any cards yet` : creditCards.map(({ cardName, balance }, key) => {
    return <CreditCard onClick={() => setCardThemeActive(true)} cardName={cardName} balance={balance} key={key} />;
  });

  return (
    <div>
      <Header />
      <DashboardContent>
        <Flex alignItems={'center'} justifyContent={'space-between'} style={{ marginBottom: '24px' }}>
          <h2>Dashboard</h2>
          <AddCreditCard onClick={() => setAddCardActive(true)}>Add Credit Card</AddCreditCard>
        </Flex>
        <Flex style={{ overflowY: 'auto', paddingBottom: '20px' }} alignItems={'center'}>
          { cards }
        </Flex>
      </DashboardContent>
      <AddCardPopup isActive={isAddCardActive} setActive={setAddCardActive} />
      <CardThemePopup isActive={isCardThemeActive} setActive={setCardThemeActive} />
    </div>
  );
};

export default Dashboard;