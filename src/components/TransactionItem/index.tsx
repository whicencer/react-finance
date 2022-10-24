import React from 'react';
import { IStoreTransaction } from '../../app/typings/IStoreTransaction';
import Flex from '../Flex';
import { StyledTransactionItem } from './transactionItem.styles';

export const TransactionItem: React.FC<{ transaction?: IStoreTransaction }> = ({ transaction }) => {
  const transactionIcon = transaction?.category?transaction.category.toLowerCase() : 'income';
  const transactionSum = transaction?.status === 'expense' ? `- $${transaction?.sum.toFixed(2)}` : `+ $${transaction?.sum.toFixed(2)}`;
  return (
    <StyledTransactionItem>
      <Flex alignItems='center'>
          <img style={{ marginRight: '10px', width: '40px' }} src={require(`../../assets/${transactionIcon}.svg`)} alt="alt" />
        <Flex direction='column'>
          <h3>{transaction?.note || transaction?.category.toUpperCase()}</h3>
          <p>{transaction?.date}</p>
        </Flex>
      </Flex>
      <Flex>
        <h3>{transactionSum}</h3>
      </Flex>
    </StyledTransactionItem>
  );
};
