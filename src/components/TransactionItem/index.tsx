import React, { useState, useEffect } from 'react';
import { useAwayClick } from '@hooks/useAwayClick';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { ITransaction } from '@typings/ITransaction';
import Flex from '@shared/ui/Flex';
import { icons } from '@shared/categoryImages';
import { formatNumber } from '@utils/formatNumber';
import { TransactionItemContextMenu } from './TransactionContextMenu';

import styles from './TransactionItem.module.scss';
import { ICardData } from '@typings/ICardData';

export const TransactionItem: React.FC<{ transaction: ITransaction }> = ({ transaction }) => {
  const [contextOpen, setContextOpen] = useState(false);
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [cardById, setCardById] = useState<ICardData | null>(null);
  const { items: cards } = useTypedSelector(state => state.creditCards.cards);
  useEffect(() => {
    const card = cards.find(card => card.card_id == transaction.balance) || null;
    setCardById(card);
  }, []);
  
  useAwayClick(() => setContextOpen(false));

  const currency = useTypedSelector(state => state.currencies.currentCurrency.symbol);
  
  const transactionIcon = transaction?.category?.toLowerCase() || 'income';
  const transactionSum = transaction?.status === 'expense'
    ? `- ${currency}${formatNumber(transaction?.sum)}`
    : `+ ${currency}${formatNumber(transaction?.sum)}`;
  
  return (
    <div className={styles.transaction} onClick={e => {
      e.stopPropagation();
      setContextOpen(true);
      setCoords({x: e.pageX, y: e.pageY});
    }}>
      <Flex alignItems='center'>
          <img style={{ marginRight: '10px', width: '40px' }} src={icons[transactionIcon]} alt='transaction-category-icon' />
        <Flex direction='column'>
          <h3>{transaction?.note || transaction?.category.toUpperCase()}</h3>
          <p>{cardById?.cardName}</p>
        </Flex>
      </Flex>
      <Flex>
        <h3>{transactionSum}</h3>
      </Flex>

      <TransactionItemContextMenu
        isOpen={contextOpen}
        setIsOpen={setContextOpen}
        x={coords.x}
        currentBalance={Number(cardById?.balance)}
        y={coords.y}
        transaction={transaction}
      />
    </div>
  );
};