import React from 'react';
import { ICryptoMarket } from '../../../../app/typings/ICryptoMarket';
import styles from './styles.module.scss';

export const CoinMarketCard: React.FC<{ marketData: ICryptoMarket }> = ({ marketData }) => {
  return (
    <div className={styles.cryptoMarketCard}>
      <h3>{marketData.exchangeId}</h3>
      <p>{marketData.baseSymbol}: ${(+marketData.priceUsd).toFixed(3)}</p>
    </div>
  );
};