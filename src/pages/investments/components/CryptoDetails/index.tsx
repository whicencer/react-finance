import React from 'react';
import { ICrypto } from '../../../../app/typings/ICrypto';
import { useGetCoinInMarketsQuery } from '../../../../services/cryptoApi';
import Flex from '../../../../shared/ui/Flex';
import { formatNumber } from '../../../../utils/formatNumber';

import styles from './styles.module.scss';

export const CryptoDetails: React.FC<{ coin: ICrypto }> = ({ coin }) => {
  const { data } = useGetCoinInMarketsQuery(coin.name);

  if (!data?.data) {
    return (
      <p>bruh</p>
    );
  }

  return (
    <>
      <Flex alignItems='center' justifyContent='space-between' className={styles.cryptoDetails}>
        <Flex alignItems='center'>
          <img className={styles.cryptoImage} src={`https://cryptologos.cc/logos/${coin.name.toLowerCase()}-${coin.symbol.toLowerCase()}-logo.png`} alt={coin.name} />
          <h2 className={styles.cryptoName}>{ coin.name }</h2>
          <div className={styles.cryptoSymbol}>
            { coin.symbol }
          </div>
        </Flex>
        <h3>${ formatNumber(+coin.priceUsd) }</h3>
      </Flex>

      <Flex direction='column' style={{ marginTop: 30 }}>
        {
          data.data.map((el, key) => {
            return (
              <div key={key} style={{ margin: 20 }}>
                <h3>{el.exchangeId}</h3>
                <h5>{el.baseSymbol}: ${el.priceUsd}</h5>
              </div>
            );
          })
        }
      </Flex>
    </>
  );
};