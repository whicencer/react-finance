import React, { useState } from 'react';

import { DashboardContent } from './dashboard.styles';
import { AddCreditCard } from './dashboard.styles';

import Header from '../../components/Header';
import CreditCard from '../../components/CreditCard';
import Flex from '../../components/Flex';
import { Separator } from '../../components/ui/Separator/Separator';
import LineChart from '../../components/LineChart';
import { addCard } from '../../store/slices/creditCards';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import Popup from '../../components/ui/Popup';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const Dashboard = () => {
  const dispatch = useDispatch();
  const creditCards = useTypedSelector(state => state.creditCards);
  const [isActive, setActive] = useState(false);
  const [cardName, setCardName] = useState('');
  const [balance, setBalance] = useState('');

  return (
    <div>
      <Header />
      <DashboardContent>
        <Flex alignItems={'center'} justifyContent={'space-between'} style={{ marginBottom: '24px' }}>
          <h2>Dashboard</h2>
          <AddCreditCard onClick={() => setActive(true)}>Add Credit Card</AddCreditCard>
        </Flex>
        <Flex style={{ overflowY: 'auto', paddingBottom: '20px' }} alignItems={'center'}>
          {
            creditCards.map(({ cardName, balance }, key) => {
              return <CreditCard cardName={cardName} balance={balance} key={key} />;
            })
          }
        </Flex>
        <Separator />
        <h2>Statistic</h2>
        <LineChart />
      </DashboardContent>
      <Popup isActive={isActive} setActive={setActive}>
        <div>
          <h2>Add credit card</h2>
          <Input placeholder='Card Name' value={cardName} onChange={(e) => setCardName(e.target.value)} />
          <Input placeholder='Balance' value={balance} onChange={(e) => setBalance(e.target.value)} />
          <div>
            <Button onClick={() => dispatch(addCard({ balance, cardName }))}>Add card</Button>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Dashboard;
