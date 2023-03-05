import React from 'react';
import Flex from '../../../shared/ui/Flex';
import { CreditCardSkeleton } from '../../../shared/ui/Skeletons/CreditCardSkeleton';

export const CreditCardSkeletons = () => {
  const skeletonsCountElement = [];
  const skeletonsCount = Math.floor((window.innerWidth < 960 ? window.innerWidth : 960)/260);
  
  for (let i = 0; i < skeletonsCount; i++) {
    skeletonsCountElement.push(i);
  }

  return (
    <Flex justifyContent='space-between'>
      {
        skeletonsCountElement.map((_) => {
          return <CreditCardSkeleton key={_} />;
        })
      }
    </Flex>
  );
};
