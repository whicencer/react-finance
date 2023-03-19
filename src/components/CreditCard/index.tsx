/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CardContextMenu } from './CardContextMenu';
import Flex from '@shared/ui/Flex';
import { Card, cardSecondSection } from './creditCard.styles';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { formatNumber } from '@utils/formatNumber';

interface Props {
  cardName: string;
  balance: number;
  themeId: number;
  id: string;
}

const CreditCard: React.FC<Props> = ({ cardName, balance, themeId, id }) => {
  const [contextOpen, setContextOpen] = useState(false);
  const [coords, setCoords] = useState({x: 0, y: 0});
  
  const currency = useTypedSelector(state => state.currencies.currentCurrency.symbol);

  return (
    <Card themeId={themeId} onClick={e => {
      e.stopPropagation();
      setContextOpen(true);
      setCoords({x: e.pageX-100, y: e.pageY});
    }}>
      <Flex direction={'column'} justifyContent={'space-around'}>
        <h2 style={{ textOverflow: 'ellipsis', overflow: 'hidden', width: '100%' }}>{currency}{formatNumber(balance)}</h2>
        <p>{cardName}</p>
      </Flex>
      <Flex direction={'column'} alignItems={'center'} style={cardSecondSection}>
        <img style={{ width: '50px' }} src="https://cutewallpaper.org/24/visa-logo-png/23-visa-logo-transparent-logo-icon-source.png"
           alt="visa" />
        <img style={{ width: '70px' }} src="https://usa.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/card-chip-800x450.png"
           alt="card-chip" />
      </Flex>
      <CardContextMenu setIsOpen={setContextOpen} isOpen={contextOpen} x={coords.x} y={coords.y} id={id} />
    </Card>
  );
};

export default CreditCard;