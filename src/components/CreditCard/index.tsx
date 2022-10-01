import React, { useState } from 'react';
import { useAwayClick } from '../../app/hooks/useAwayClick';
import { CardContextMenu } from '../CardContextMenu';
import Flex from '../Flex';
import { Card, cardSecondSection } from './creditCard.styles';

interface Props {
  cardName: string;
  balance: number;
  themeId: number;
  id: string;
  openPopup?: () => void;
}

const CreditCard: React.FC<Props> = ({ cardName, balance, openPopup, themeId, id }) => {
  const [context, setContext] = useState(false);
  const [coords, setCoords] = useState({x: 0, y: 0});
  useAwayClick(() => setContext(false));

  return (
    <Card themeId={themeId} onContextMenu={e => {
      e.preventDefault();
      setContext(true);
      setCoords({x: e.pageX, y: e.pageY});
    }}>
      <Flex direction={'column'} justifyContent={'space-around'}>
        <h2>${balance}</h2>
        <p>{cardName}</p>
      </Flex>
      <Flex direction={'column'} alignItems={'center'} style={cardSecondSection}>
        <img style={{ width: '50px' }} src="https://cutewallpaper.org/24/visa-logo-png/23-visa-logo-transparent-logo-icon-source.png"
           alt="visa" />
        <img style={{ width: '70px' }} src="https://usa.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/card-chip-800x450.png"
           alt="card-chip" />
      </Flex>
      { context && <CardContextMenu x={coords.x} y={coords.y} id={id} openPopup={openPopup} /> }
    </Card>
  );
};

export default CreditCard;