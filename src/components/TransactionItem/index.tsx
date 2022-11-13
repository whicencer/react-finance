import React, { useState } from 'react';
import { useAwayClick } from '../../app/hooks/useAwayClick';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import { ITransaction } from '../../app/typings/ITransaction';
import Flex from '../../shared/ui/Flex';
import { formatNumber } from '../../utils/formatNumber';
import { TransactionItemContextMenu } from './TransactionContextMenu';

import styles from './TransactionItem.module.scss';

export const TransactionItem: React.FC<{ transaction: ITransaction }> = ({ transaction }) => {
  const [contextOpen, setContextOpen] = useState(false);
  const [coords, setCoords] = useState({x: 0, y: 0});
  useAwayClick(() => setContextOpen(false));

  const { items: cards } = useTypedSelector(state => state.creditCards.cards);
  const cardById = cards.find(card => card.id === transaction.balance);
  const currency = useTypedSelector(state => state.currencies.currentCurrency.symbol);
  
  const transactionIcon = transaction?.category?transaction.category.toLowerCase() : 'income';
  const transactionSum = transaction?.status === 'expense'
    ? `- ${currency}${formatNumber(transaction?.sum)}`
    : `+ ${currency}${formatNumber(transaction?.sum)}`;
  
  if (cardById === undefined) {
    throw new Error();
  }
  
  return (
    <div className={styles.transaction} onClick={e => {
      e.stopPropagation();
      setContextOpen(true);
      setCoords({x: e.pageX, y: e.pageY});
    }}>
      <Flex alignItems='center'>
          <img style={{ marginRight: '10px', width: '40px' }} src={require(`../../assets/${transactionIcon}.svg`)} alt="alt" />
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
        currentBalance={cardById?.balance}
        y={coords.y}
        transaction={transaction}
      />
    </div>
  );
};
