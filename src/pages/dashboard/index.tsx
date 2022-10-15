import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import CreditCard from '../../components/CreditCard';
import Flex from '../../components/Flex';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import AddCardPopup from '../../components/Popups/AddCardPopup';

import { changeThemePopup, getCardFromDB } from './dashboard.service';
import { useDispatch } from 'react-redux';
import { setCards } from '../../store/slices/creditCards';
import { CardThemePopup } from '../../components/Popups/CardThemePopup';
import { PageContent } from '../../shared/components/PageContent';
import { OpenPopupButton } from '../../shared/ui/PageButton';

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
      <PageContent>
        <Flex alignItems={'center'} justifyContent={'space-between'} style={{ marginBottom: '24px' }}>
          <h2>Dashboard</h2>
          <OpenPopupButton onClick={() => setAddCardActive(true)}>Add Credit Card</OpenPopupButton>
        </Flex>
        <Flex style={{ overflowY: 'auto', paddingBottom: '20px' }} alignItems={'center'}>
          { cards }
        </Flex>
      </PageContent>
      
      {/* Popups */}
      <AddCardPopup isActive={isAddCardActive} setActive={setAddCardActive} />
      <CardThemePopup popupState={{ isActive: isCardThemeActive, setActive: setCardThemeActive }} id={currentCardId} />
    </div>
  );
};

export default React.memo(Dashboard);