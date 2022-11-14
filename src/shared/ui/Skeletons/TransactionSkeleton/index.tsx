import React from 'react';
import Flex from '../../Flex';
import styles from './TransactionSkeleton.module.scss';
import main from '../main.module.scss';

export const TransactionSkeleton = () => {
  return (
    <Flex className={styles.transactionSkeleton} justifyContent='space-between'>
      <Flex alignItems='center'>
        <span className={styles.transactionSkeletonIcon+" "+main.skeletonAnimate}></span>
        <Flex direction='column' style={{ marginLeft: 10 }}>
          <span className={styles.transactionSkeletonDescription+" "+main.skeletonAnimate}></span>
          <span className={styles.transactionSkeletonCardName+" "+main.skeletonAnimate}></span>
        </Flex>
      </Flex>
    </Flex>
  );
};
