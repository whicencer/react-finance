import React from 'react';
import { ICrypto } from '../../app/typings/ICrypto';
import Flex from '../../shared/ui/Flex';
import styles from './CryptoCard.module.scss';

export const CryptoCard: React.FC<{ coin: ICrypto }> = ({ coin }) => {
  const { name, symbol, changePercent24Hr } = coin;
  const booleanIsMinus = +changePercent24Hr <= 0;
  
  return (
    <div className={styles.cryptoCard}>
      <img className={styles.cryptoCardImage} src={`https://cryptologos.cc/logos/${name.toLowerCase()}-${symbol.toLowerCase()}-logo.png`} alt={name} />
      <Flex direction='column' style={{ margin: '0 25px 0 20px' }}>
        <h4 className={booleanIsMinus ? styles.cryptoCardPercentageMinus : styles.cryptoCardPercentage}>{!booleanIsMinus ? '+' : ''}{Number(changePercent24Hr).toFixed(2)}%</h4>
        <p className={styles.cryptoCardCoinName}>{symbol}</p>
      </Flex>
    </div>
  );
};