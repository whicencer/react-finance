import React from 'react';
import Flex from '../../shared/ui/Flex';
import styles from './CryptoCard.module.scss';

export const CryptoCard: React.FC<{coinName: { full: string, short: string }}> = ({ coinName }) => {
  return (
    <div className={styles.cryptoCard}>
      <img className={styles.cryptoCardImage} src={`https://cryptologos.cc/logos/${coinName.full}-${coinName.short}-logo.png`} alt={coinName.short} />
      <Flex direction='column' style={{ margin: '0 25px 0 20px' }}>
        <h4 className={styles.cryptoCardPercentageMinus}>-0.84%</h4>
        <p className={styles.cryptoCardCoinName}>{coinName.short.toUpperCase()}</p>
      </Flex>
    </div>
  );
};