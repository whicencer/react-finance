import React from 'react';
import { ITransaction } from '../../app/typings/ITransaction';
import Flex from '../Flex';
import { StyledTransactionItem } from './transactionItem.styles';

export const TransactionItem: React.FC<{ transaction?: ITransaction }> = ({ transaction }) => {
  return (
    <StyledTransactionItem>
      <Flex alignItems='center'>
          <img style={{ marginRight: '10px', width: '40px' }} src={require(`../../assets/${transaction?.category?transaction.category.toLowerCase() : 'income'}.png`)} alt="alt" />
        <Flex direction='column'>
          <h3>{transaction?.note}</h3>
          {/* <p>{`${transaction?.date.getDate()}.${transaction?.date.getMonth()&&transaction?.date.getMonth()+1}.${transaction?.date.getFullYear()}`}</p> */}
        </Flex>
      </Flex>
      <Flex>
        <h3>{transaction?.status === 'expense' ? `- $${transaction?.sum}` : `+ $${transaction?.sum}`}</h3>
      </Flex>
    </StyledTransactionItem>
  );
};
