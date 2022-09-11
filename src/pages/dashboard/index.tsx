import React, { useState } from 'react';

import { AddCardPopupTitle, DashboardContent } from './dashboard.styles';
import { AddCreditCard } from './dashboard.styles';

import Header from '../../components/Header';
import CreditCard from '../../components/CreditCard';
import Flex from '../../components/Flex';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import Popup from '../../components/ui/Popup';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { generateObjectId } from '../../utils/generateObjectId';
import { useAddCard } from './dashboard.hooks';

const Dashboard = () => {
  const id = generateObjectId();
  const creditCards = useTypedSelector(state => state.creditCards);
  const addNewCard = useAddCard();

  const [isActive, setActive] = useState(false);
  const [cardName, setCardName] = useState('');
  const [balance, setBalance] = useState('');
  
  const data = { balance: Number(balance), cardName, id };

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
      <Popup isActive={isActive} setActive={setActive}>
        <Flex direction='column' alignItems='center'>
          <AddCardPopupTitle>Add credit card</AddCardPopupTitle>
          <Input
            placeholder='Card Name'
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            style={{ margin: '10px', width: '80%' }}
          />
          <Input
            type={'number'}
            placeholder='Balance'
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            style={{ margin: '10px 0 20px 0', width: '80%' }}
          />
          <Button style={{ width: '60%' }} onClick={() => addNewCard(data)}>Add card</Button>
        </Flex>
      </Popup>
    </div>
  );
};

export default Dashboard;