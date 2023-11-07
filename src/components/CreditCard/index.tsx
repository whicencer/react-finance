/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './CreditCard.module.scss';
import { CardContextMenu } from './CardContextMenu';
import Flex from '@shared/ui/Flex';
import { Card, cardSecondSection } from './creditCard.styles';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { formatNumber } from '@utils/formatNumber';
import { ImageVisa } from '@components/CreditCard/ImageVisa';
import { ImageChip } from '@components/CreditCard/ImageChip';

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
        <h2 className={styles.balance}>{currency}{formatNumber(balance)}</h2>
        <p>{cardName}</p>
      </Flex>
      <Flex direction={'column'} alignItems={'center'} style={cardSecondSection}>
        <ImageVisa />
        <ImageChip />
      </Flex>
      <CardContextMenu setIsOpen={setContextOpen} isOpen={contextOpen} x={coords.x} y={coords.y} id={id} />
    </Card>
  );
};

export default CreditCard;