import React, { useState } from 'react';
import { AddTransactionPopup } from '../popups/AddTransactionPopup';

import Flex from '../Flex';
import { TransactionItem } from '../TransactionItem';
import Button from '../ui/Button';

export const LastTransactions = () => {
  const [isAddTransactionActive, setIsAddTransactionActive] = useState(true);

  return (
    <>
      <Flex justifyContent='space-between' alignItems='center' style={{ margin: '10px 0' }}>
        <h2>Last transaction</h2>
        <Button data-testid='button' onClick={() => setIsAddTransactionActive(true)}>Add transaction</Button>
      </Flex>
      <Flex direction='column'>
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </Flex>

      <AddTransactionPopup isActive={isAddTransactionActive} setActive={setIsAddTransactionActive} />
    </>
  );
};