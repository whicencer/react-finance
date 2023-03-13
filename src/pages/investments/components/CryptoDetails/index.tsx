import React from 'react';
import { ICrypto } from '../../../../app/typings/ICrypto';
import Flex from '../../../../shared/ui/Flex';
import { formatNumber } from '../../../../utils/formatNumber';

import styles from './styles.module.scss';

export const CryptoDetails: React.FC<{ coin: ICrypto }> = ({ coin }) => {
  return (
    <Flex alignItems='center' justifyContent='space-between' className={styles.cryptoDetails}>
      <Flex alignItems='center'>
        <img className={styles.cryptoImage} src={`https://cryptologos.cc/logos/${coin.name.toLowerCase()}-${coin.symbol.toLowerCase()}-logo.png`} alt={coin.name} />
        <h2 className={styles.cryptoName}>{ coin.name }</h2>
        <div className={styles.cryptoSymbol}>
          { coin.symbol }
        </div>
      </Flex>
      <h3>{ formatNumber(+coin.priceUsd) }</h3>
    </Flex>
  );
};