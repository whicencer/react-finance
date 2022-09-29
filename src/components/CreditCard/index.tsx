import React, { useState } from 'react';
import { useAwayClick } from '../../app/hooks/useAwayClick';
import { CardContextMenu } from '../CardContextMenu';
import Flex from '../Flex';
import { Card } from './creditCard.styles';

interface Props {
  cardName: string;
  balance: number;
  themeId: number;
  id: string;
  openPopup?: () => void;
}

const CreditCard: React.FC<Props> = ({ cardName, balance, openPopup, themeId, id }) => {
  const [context, setContext] = useState(false);
  useAwayClick(() => setContext(false));

  return (
    <Card themeId={themeId} onContextMenu={e => {
      e.preventDefault();
      setContext(true);
    }}>
      <Flex direction={'column'} justifyContent={'space-around'}>
        <h2>${balance}</h2>
        <p>{cardName}</p>
      </Flex>
      <Flex direction={'column'} alignItems={'center'} style={{ position: 'absolute', top: '0', right: '0' }}>
        <img style={{ width: '50px' }} src="https://cutewallpaper.org/24/visa-logo-png/23-visa-logo-transparent-logo-icon-source.png"
           alt="visa" />
        <img style={{ width: '70px' }} src="https://usa.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/card-chip-800x450.png"
           alt="card-chip" />
      </Flex>
      { context && <CardContextMenu id={id} openPopup={openPopup} /> }
    </Card>
  );
};

export default CreditCard;