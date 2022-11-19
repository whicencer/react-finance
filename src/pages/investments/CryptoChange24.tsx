import React from 'react';
import { CryptoCard } from '../../components/CryptoCard';
import { useGetCryptoCoinsWithLimitQuery } from '../../services/cryptoApi';
import Flex from '../../shared/ui/Flex';
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
    </Flex>
  );
};