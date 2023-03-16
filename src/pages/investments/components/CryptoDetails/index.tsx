import React from 'react';
import { ICrypto } from '../../../../app/typings/ICrypto';
import { useGetCoinInMarketsQuery } from '../../../../services/cryptoApi';
import Flex from '../../../../shared/ui/Flex';
import { formatNumber } from '../../../../utils/formatNumber';
import { CoinMarketCard } from './CoinMarketCard';

import styles from './styles.module.scss';

export const CryptoDetails: React.FC<{ coin: ICrypto }> = ({ coin }) => {
  const { data } = useGetCoinInMarketsQuery(coin.name.toLowerCase());

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

      <Flex justifyContent='center' alignItems='center' wrap='wrap' style={{ marginTop: 30 }}>
        {
          data.data.map((market, key) => {
            return (
              <CoinMarketCard key={key} marketData={market} />
            );
          })
        }
      </Flex>
    </>
  );
};