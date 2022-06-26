import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react/display-name
export const RouterProvider = (Component: React.FC) => () => {
  return (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
};
