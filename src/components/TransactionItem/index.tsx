import React from 'react';
import Flex from '../Flex';

export const TransactionItem = () => {
  return (
    <Flex style={{ backgroundColor: '#0f0f13', width: '96%', padding: '10px 20px', margin: '2px 0', borderRadius: 10 }} justifyContent='space-between'>
        <p>26.09</p>
        <p>Shopping</p>
        <p>New Sneakers</p>
        <p>Spend</p>
        <p>Shopping</p>
        <p>- $342</p>
    </Flex>
  );
};
