import React from 'react';
import Flex from '../Flex';
import { Card } from './creditCard.styles';

interface Props {
  cardName: string;
  balance: number;
}

const CreditCard: React.FC<Props> = ({ cardName, balance }) => {
  return (
    <Card>
      <Flex direction={'column'} justifyContent={'space-around'}>
        <h2>${balance}</h2>
        <h4>Card Name: {cardName}</h4>
      </Flex>
      <Flex direction={'column'} alignItems={'center'} style={{ position: 'absolute', top: '0', right: '0' }}>
        <img style={{ width: '50px' }} src="https://cutewallpaper.org/24/visa-logo-png/23-visa-logo-transparent-logo-icon-source.png"
           alt="visa" />
        <img style={{ width: '70px' }} src="https://usa.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/card-chip-800x450.png"
           alt="card-chip" />
      </Flex>
    </Card>
  );
};

export default CreditCard;