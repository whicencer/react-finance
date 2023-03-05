import React from 'react';
import Flex from '../../../shared/ui/Flex';
import { TransactionSkeleton } from '../../../shared/ui/Skeletons/TransactionSkeleton';

export const TransactionsSkeletons = () => {
  return (
    <Flex direction='column' style={{ width: '100%' }}>
      <TransactionSkeleton />
      <TransactionSkeleton />
      <TransactionSkeleton />
    </Flex>
  );
};
