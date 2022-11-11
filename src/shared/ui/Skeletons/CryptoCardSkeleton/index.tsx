import React from 'react';
import Flex from '../../Flex';
import styles from './CryptoCardSkeleton.module.scss';

export const CryptoCardSkeleton = () => {
  return (
    <Flex className={styles.cryptoCardSkeleton}>
      <Flex>
        <span className={styles.skeletonImage+" "+styles.skeletonAnimate}></span>
      </Flex>
      
      <Flex direction='column' style={{ margin: '15px' }}>
        <span className={styles.skeletonTitle+" "+styles.skeletonAnimate}></span>
        <span className={styles.skeletonText+" "+styles.skeletonAnimate}></span>
      </Flex>
    </Flex>
  );
};