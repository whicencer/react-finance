import React, { useEffect, useState } from 'react';

import { DashboardContent } from './dashboard.styles';
import { AddCreditCard } from './dashboard.styles';

import Header from '../../components/Header';
import CreditCard from '../../components/CreditCard';
import Flex from '../../components/Flex';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import AddCardPopup from '../../components/AddCardPopup';

import { changeThemePopup, getCardFromDB } from './dashboard.service';
import { useDispatch } from 'react-redux';
import { setCards } from '../../store/slices/creditCards';
import { CardThemePopup } from '../../components/CardThemePopup';

const Dashboard = () => {
  const creditCards = useTypedSelector(state => state.creditCards);
  const dispatch = useDispatch();

  // popups state
  const [isAddCardActive, setAddCardActive] = useState(false);
  const [isCardThemeActive, setCardThemeActive] = useState(false);

  const [currentCardId, setCurrentCardId] = useState('');

  useEffect(() => {
    getCardFromDB().then(data => dispatch(setCards(data)));
  }, []);

  const cards = !creditCards.cards.length ? `You haven't made any cards yet` : creditCards.cards.map(({ cardName, balance, themeId, id }) => {
    return <CreditCard themeId={themeId} id={id} openPopup={() => changeThemePopup(id, setCardThemeActive, setCurrentCardId)} cardName={cardName} balance={balance} key={id} />;
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
      
      {/* Popups */}
      <AddCardPopup isActive={isAddCardActive} setActive={setAddCardActive} />
      <CardThemePopup popupState={{ isActive: isCardThemeActive, setActive: setCardThemeActive }} id={currentCardId} />
    </div>
  );
};

export default React.memo(Dashboard);