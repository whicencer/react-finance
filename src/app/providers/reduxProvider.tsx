import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

// eslint-disable-next-line react/display-name
const ReduxProvider = (Component: FC) => () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default ReduxProvider;
