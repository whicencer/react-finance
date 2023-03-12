import React from 'react';
import { CryptoCard } from '../../components/CryptoCard';
import { useGetCryptoCoinsWithLimitQuery } from '../../services/cryptoApi';
import Flex from '../../shared/ui/Flex';
import Input from '../../shared/ui/Input';
import { CryptoCardSkeleton } from '../../shared/ui/Skeletons/CryptoCardSkeleton';

export const CryptoChange24 = () => {
  const { data, isLoading } = useGetCryptoCoinsWithLimitQuery('4');

  return (
    <Flex direction='column' style={{ marginTop: 20 }}>
      <h4 style={{ marginBottom: 13 }}>Change (24h)</h4>
      <Flex justifyContent='space-between' style={{ width: '100%', overflow: 'auto' }}>
        {
          isLoading
            ? <>
                <CryptoCardSkeleton />
                <CryptoCardSkeleton />
                <CryptoCardSkeleton />
                <CryptoCardSkeleton />
              </>
            : <>
                {
                  data?.data.map((coin, key) => {
                    return (
                      <CryptoCard coin={coin} key={key} />
                      );
                    })
                  }
              </>
        }
      </Flex>
      <Flex justifyContent='space-between' alignItems='center' style={{ width: '100%', marginTop: 40 }}>
        <h4>Cryptocurrencies</h4>
        <Input onChange={(event) => console.log(event.target)} placeholder='Coin name' style={{ width: '130px', height: '10px' }} />
      </Flex>
    </Flex>
  );
};