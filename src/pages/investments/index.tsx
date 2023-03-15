import React from 'react';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';
import { CryptoChange24 } from './components/CryptoChange24';
import { CryptoSearch } from './components/CryptoSearch';

const Investments = () => {
  useDocumentTitle('React Finance - Investments');
  
  return (
    <>
      <h2>Investments</h2>
      <CryptoChange24 />
      <CryptoSearch />
    </>
  );
};

export default Investments;