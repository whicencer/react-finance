import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@config/theme';

// eslint-disable-next-line react/display-name
const StyledComponentProvider = (Component: React.FC) => () => {
  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
};

export default StyledComponentProvider;