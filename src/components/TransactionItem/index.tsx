import React from 'react';
import Flex from '../Flex';
import { StyledTransactionItem } from './transactionItem.styles';

export const TransactionItem = () => {
  return (
    <StyledTransactionItem>
      <Flex alignItems='center'>
          <img style={{ marginRight: '10px', width: '40px' }} src={require('../../assets/traveling.png')} alt="alt" />
        <Flex direction='column'>
          <h3>Купив кросівки для мами, тата, брата, сестри і для себе</h3>
          <p>12 Oct, 2022</p>
        </Flex>
      </Flex>
      <Flex>
        <h3>- $300.12</h3>
      </Flex>
    </StyledTransactionItem>
  );
};
