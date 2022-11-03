import React, { useState } from 'react';
import { useAwayClick } from '../../app/hooks/useAwayClick';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import { ITransaction } from '../../app/typings/ITransaction';
import Flex from '../Flex';
import { TransactionItemContextMenu } from './TransactionContextMenu';
import { StyledTransactionItem } from './transactionItem.styles';

export const TransactionItem: React.FC<{ transaction: ITransaction }> = ({ transaction }) => {
  const [context, setContext] = useState(false);
  const [coords, setCoords] = useState({x: 0, y: 0});
  useAwayClick(() => setContext(false));

  const cardFromId = useTypedSelector(state => state.creditCards.cards).find(card => card.id === transaction.balance);
  const currency = useTypedSelector(state => state.currencies.currentCurrency.symbol);
  
  const transactionIcon = transaction?.category?transaction.category.toLowerCase() : 'income';
  const transactionSum = transaction?.status === 'expense' ? `- ${currency}${transaction?.sum.toFixed(2)}` : `+ ${currency}${transaction?.sum.toFixed(2)}`;
  
  if (cardFromId === undefined) {
    throw new Error();
  }
  
  return (
    <StyledTransactionItem onClick={e => {
      e.stopPropagation();
      setContext(true);
      setCoords({x: e.pageX, y: e.pageY});
    }}>
      <Flex alignItems='center'>
          <img style={{ marginRight: '10px', width: '40px' }} src={require(`../../assets/${transactionIcon}.svg`)} alt="alt" />
        <Flex direction='column'>
          <h3>{transaction?.note || transaction?.category.toUpperCase()}</h3>
          <p>{cardFromId?.cardName}</p>
        </Flex>
      </Flex>
      <Flex>
        <h3>{transactionSum}</h3>
      </Flex>

      {context && <TransactionItemContextMenu x={coords.x} currentBalance={cardFromId?.balance} y={coords.y} transaction={transaction} />}
    </StyledTransactionItem>
  );
};
