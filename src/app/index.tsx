import React from 'react';
import { useDocumentTitle } from '@hooks/useDocumentTitle';
import { withProviders } from '@providers/index';
import { Routing } from '@pages/routes';

const App = () => {
  useDocumentTitle('React Finance - Welcome');
  return <Routing />;
};

export default withProviders(App);