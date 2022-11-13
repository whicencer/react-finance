import React from 'react';
import Flex from '../../Flex';
import styles from './CreditCardSkeleton.module.scss';
import main from '../main.module.scss';

export const CreditCardSkeleton = () => {
  return (
    <Flex direction='column' justifyContent='space-around' className={styles.creditCardSkeleton}>
      <Flex style={{ width: '100%' }} alignItems='center' justifyContent='space-between'>
        <span className={styles.creditCardSkeletonBalance+" "+main.skeletonAnimate}></span>
        <span className={styles.creditCardSkeletonChip+" "+main.skeletonAnimate}></span>
      </Flex>
      <span className={styles.creditCardSkeletonName+" "+main.skeletonAnimate}></span>
    </Flex>
  );
};
