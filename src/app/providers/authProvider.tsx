import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { auth } from '../config/firebase';

// eslint-disable-next-line react/display-name
const AuthProvider = (Component: FC) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user?.email) {
        dispatch(setUser({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          uid: user.uid
        }));
      }
    });
  }, []);

  return <Component />;
};

export default AuthProvider;
