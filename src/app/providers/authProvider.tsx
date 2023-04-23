import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '@store/slices/user';

// eslint-disable-next-line react/display-name
const AuthProvider = (Component: FC) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('user');
    const userObject = JSON.parse(user ?? 'null');

    if (userObject != null) {
      dispatch(setUser({
        token: userObject.token,
        username: userObject.username,
      }));
    }
  }, []);

  return <Component />;
};

export default AuthProvider;
